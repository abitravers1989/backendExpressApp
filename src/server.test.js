// const serverFactory = require('./server');

// const server = serverFactory

const { server } = require('./container')

server.start()

server.stop()