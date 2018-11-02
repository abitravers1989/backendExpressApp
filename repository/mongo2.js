const connect = (MongoClient, mongoConnectionString) => {
    var database;
    if (!process.env.USER_NAME && !process.env.PASSWORD) {
        throw console.log("Mongo user name and password is not provided.")
    }
    try {
        new Promise((resolve, reject) => {
            MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
                if (err) return reject(console.log(err))
                database = db.db('simple-node-backend-app');
                console.log(`Mongo now listening. Mongo Object: ${database}`);
                return resolve(database)
            })
        })
    } catch (e) {
        return new Error(`issue connecting to mongo: ${e}`)
    }
    return database.collection('users').find()
 }

 const MongoClient = require('mongodb');
const mongoConnectionString = 'mongodb://localhost/';

connect(MongoClient, mongoConnectionString)
