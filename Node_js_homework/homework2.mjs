import http from 'node:http';
import url from 'node:url';

let sumApiCallCount = 0;

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); 
  const pathName = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204); 
    res.end();
    return;
  }

  if (pathName === '/sum-endpoint' && method === 'GET') {
    sumApiCallCount++;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Đây là API tính tổng (Node.js thuần). Lần gọi thứ: ${sumApiCallCount}`);
  } else if (pathName === '/calculate-sum-post' && method === 'POST') {

    sumApiCallCount++;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const responseBody = {
        message: 'Sum calculation (POST) successful (Node.js thuần)',
        currentCallCount: sumApiCallCount
    };
    res.end(JSON.stringify(responseBody));
  } else if (pathName === '/sum-api-calls' && method === 'GET') {

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const responseBody = { totalCalls: sumApiCallCount };
    res.end(JSON.stringify(responseBody));
  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found - Không tìm thấy trang');
  }
});

server.listen(port, () => {
  console.log(`Server Node.js thuần đang chạy tại http://localhost:${port}`);
  console.log('Để gọi API tính tổng (GET): GET http://localhost:3000/sum-endpoint');
  console.log('Để gọi API tính tổng (POST): POST http://localhost:3000/calculate-sum-post (không cần body cho ví dụ này)');
  console.log('Để lấy số lần gọi API tính tổng: GET http://localhost:3000/sum-api-calls');
});