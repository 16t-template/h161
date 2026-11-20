import fs from 'node:fs';
import { createPrivateKey } from 'node:crypto';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const account = JSON.parse(fs.readFileSync(new URL('../service-account.json', import.meta.url), 'utf8'));
// Export the same RSA key as JWK for Workers; never print or save the secret.
account.private_key_jwk = createPrivateKey(account.private_key).export({ format: 'jwk' });
const child = spawn(process.execPath, [
  fileURLToPath(new URL('../node_modules/wrangler/bin/wrangler.js', import.meta.url)),
  'secret', 'put', 'GOOGLE_SERVICE_ACCOUNT', '--name', 'h161',
], { cwd: root, stdio: ['pipe', 'inherit', 'inherit'] });
child.stdin.end(JSON.stringify(account));
child.on('error', () => {
  console.error('Could not start Wrangler. Run npm install and try again.');
  process.exitCode = 1;
});
child.on('close', (code) => { process.exitCode = code ?? 1; });
