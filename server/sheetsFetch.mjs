// Share metadata reads inside a server instance and stop on Google errors before
// callers mistake a failed metadata response for a missing sheet.
const metadataCache = new Map();
const pendingMetadata = new Map();
let metadataVersion = 0;

export async function sheetsFetch(url, options = {}) {
  const method = options.method || 'GET';
  const isMetadata = method === 'GET' && /\/spreadsheets\/[^/?]+(?:\?.*)?$/.test(String(url));
  const key = String(url);
  if (method !== 'GET' && key.includes(':batchUpdate')) {
    metadataVersion++;
    metadataCache.clear();
    pendingMetadata.clear();
  }
  const request = async () => {
    const response = await globalThis.fetch(url, options);
    if (!response.ok) {
      const error = new Error(response.status === 429
        ? 'Google Sheets đang giới hạn lượt đọc/ghi. Vui lòng thử lại sau khoảng 1 phút.'
        : `Google Sheets HTTP ${response.status}: ${await response.text()}`);
      error.status = response.status;
      throw error;
    }
    return response;
  };
  if (!isMetadata) return request();
  const cached = metadataCache.get(key);
  if (cached && Date.now() < cached.expiresAt) return new Response(cached.body);
  if (!pendingMetadata.has(key)) {
    const version = metadataVersion;
    const pending = request().then(async (response) => {
      const body = await response.text();
      if (version === metadataVersion) metadataCache.set(key, { body, expiresAt: Date.now() + 60000 });
      return body;
    }).finally(() => {
      if (pendingMetadata.get(key) === pending) pendingMetadata.delete(key);
    });
    pendingMetadata.set(key, pending);
  }
  return new Response(await pendingMetadata.get(key));
}
