const { createContainer, asFunction, asValue } = require('awilix');
const express = require('express');
const server = require('./server');
//const logger = require('morgan');

const container = createContainer();

//do a try catch for the env variables which need for mongo

container.register({
    app: asFunction(express).singleton(),
    server: asFunction(server).singleton(),
    //logger: asFunction(logger).singleton()
})

module.exports = container.cradle;