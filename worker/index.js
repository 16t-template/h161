import sheetsHandler from '../api/sheets.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api' && !url.pathname.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }

    // Adapt the existing Node/Vercel handler to the Workers Request/Response API.
    const headers = new Headers();
    let status = 200;
    const res = {
      setHeader(name, value) {
        headers.set(name, value);
      },
      status(code) {
        status = code;
        return this;
      },
      json(data) {
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return new Response(request.method === 'HEAD' ? null : JSON.stringify(data), { status, headers });
      },
      end() {
        return new Response(null, { status, headers });
      },
    };

    let body = {};
    if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
      const rawBody = await request.text();
      if (rawBody) {
        try {
          body = JSON.parse(rawBody);
        } catch {
          return res.status(400).json({ success: false, error: 'Invalid JSON request body' });
        }
      }
    }

    return sheetsHandler({ method: request.method, url: url.pathname + url.search, body }, res);
  },
};
