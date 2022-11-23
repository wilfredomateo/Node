const fs = require('fs');
const http = require('http');

const server = http.createServer(request, response) => {
  
  const url = new URL (request.url, 'http://${request.headers.host}');

  switch(url.pathname) {
    case '/':
      if (request.method === 'GET') {
        const name = url.searchParams.get('name');
        console.log(name);
      }
      break;
    default:
      request.end('ok');
  }


}