const { createContainer, asClass, asFunction } = require('awilix');

//set injectionMOde to PROXY 
// const container = awilix.createContainer({
//     injectionMode: awilix.injectionMode.PROXY
// })


const container = createContainer();

container.register({

})


module.exports = {
    container: container
}