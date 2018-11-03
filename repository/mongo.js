const connect = (MongoClient, mongoConnectionString) => {
    // if (!process.env.USER_NAME && !process.env.PASSWORD) {
    //     throw console.log("Mongo user name and password is not provided.")
    // }
    try {
        // new Promise((resolve, reject) => {
        MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
            if (err) return console.log(err)
            // reject(console.log(err))
            const database = db.db('nodeBackend');
            console.log(`Mongo now listening. Mongo Object: ${database}`);
            const users = database.collection('users').find();
            //console.log(users)
            return users
            return resolve(users)
        })
        // })
    } catch (e) {
        return new Error(`issue connecting to mongo: ${e}`)
    }

}

const { MongoClient } = require('mongodb');
const mongoConnectionString = 'mongodb://localhost/';
//const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
console.log(connect(MongoClient, mongoConnectionString))
