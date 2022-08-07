let http = require('http');

let server = http.createServer(handler);
server.listen(3000);
function handler(request, response){
    response.writeHead(200);
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>html {
            background: aqua;
            color: blue;
        }</style>
    </head>
    <body>
    <p>Hello world!</p>
    <button>Click me!</button>
    </body>
    </html>`);
    response.end();
}