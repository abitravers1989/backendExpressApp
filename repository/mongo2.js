// const connect = (MongoClient, mongoConnectionString) => {
//     var database;
//     if (!process.env.USER_NAME && !process.env.PASSWORD) {
//         throw console.log("Mongo user name and password is not provided.")
//     }

//     return new Promise((resolve, reject) => {
//         MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
//             //can't return console.log error as reject needs soemthing returned
//             if (err) return reject(err)
//             database = db.db('nodeBackend');
//             console.log(`Mongo now listening. Mongo Object: ${database}`);
//             return resolve(database)
//         })
//     })

// }

const MongoClient = require('mongodb');
const mongoConnectionString = 'mongodb://localhost/';

const connect = (MongoClient, mongoConnectionString) => {
    var database;
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
            if (err) return reject(err)
            database = db.db('nodeBackend')
            return resolve(database)
        })
    })
}




var dbs = connect(MongoClient, mongoConnectionString)
console.log(await dbs)

