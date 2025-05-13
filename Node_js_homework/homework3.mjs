
import http from 'node:http';
import url from 'node:url'; 

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204); 
    res.end();
    return;
  }

  if (pathName === '/current-time' && method === 'GET') {
    const now = new Date();
    const utcTimeString = now.toISOString().split('.')[0] + 'Z';

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const responseBody = { currentTime: utcTimeString };
    res.end(JSON.stringify(responseBody));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found - Endpoint không tồn tại');
  }
});

server.listen(port, () => {
  console.log(`Server Node.js thuần đang chạy tại http://localhost:${port}`);
  console.log(`Để lấy thời gian UTC hiện tại: GET http://localhost:${port}/current-time`);
});