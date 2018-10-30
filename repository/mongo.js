const { MongoClient } = require('mongodb');
const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
// const mongoConnectionString = 'mongodb://localhost/       REMOVE?nodeBackend';

//module.exports = {
const connect = (MongoClient, mongoConnectionString) => {
    //console.log(process.env.USER_NAME)
    if (!process.env.USER_NAME && !process.env.PASSWORD) {
        throw console.log("Mongo user name and password is not provided.")
    }

    new Promise((resolve, reject) => {
        return MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
            if (err) return reject(console.log(err))
            const database = db.db('simple-node-backend-app');
            console.log(`Mongo now listening. Mongo Object: ${database.hasOwnProperty("collection")}`);
            // const users = await database.collection('users').find();
            // console.log(users)
            return resolve(database)
        })
    })
}




//}

const database = connect(MongoClient, mongoConnectionString)
console.log(database)





//alternative would be to find a mongo libary that uses async and await and promises 