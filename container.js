const { createContainer, asClass, asFunction } = require('awilix');
const database = require('./database');

//set injectionMOde to PROXY 
// const container = awilix.createContainer({
//     injectionMode: awilix.injectionMode.PROXY
// })

const container = createContainer();

container.register({
    mongoDatabase: asFunction(database)
})


module.exports = {
    container: container
}