import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('..', import.meta.url)), 'app');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};

export function handler(req, res) {
  const url = new URL(req.url, 'http://local');
  if (url.pathname === '/health') return json(res, 200, {status:'ok', service:'payanam-360'});
  const requested = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
  const file = normalize(join(root, requested));
  if (!file.startsWith(root)) return json(res, 403, {error:'forbidden'});
  stat(file).then(s => s.isFile() ? readFile(file) : Promise.reject()).then(body => {
    res.writeHead(200, {'content-type':types[extname(file)] || 'application/octet-stream','cache-control': requested === 'index.html' ? 'no-cache' : 'public, max-age=3600','x-content-type-options':'nosniff'});
    res.end(body);
  }).catch(() => json(res, 404, {error:'not found'}));
}
function json(res, status, body) { res.writeHead(status, {'content-type':'application/json; charset=utf-8'}); res.end(JSON.stringify(body)); }
if (process.argv[1] === fileURLToPath(import.meta.url)) createServer(handler).listen(port, () => console.log(`Payanam 360: http://localhost:${port}`));
