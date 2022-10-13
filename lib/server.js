import http from 'node:http';

const server = {};

server.httpServer =  http.createServer((req, res) => {
    console.log('Gavau uzklausa is kliento..');
    res.end('Serverio atsakymas klientui')
});

server.init = () => {
    console.log('Pasileidzia serveris...')
    server.httpServer.listen(3917)
}

export { server };