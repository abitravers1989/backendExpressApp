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



const MongoClient = require('mongodb');
const mongoConnectionString = 'mongodb://localhost/';


// const mongDatabase = (MongoClient, mongoConnectionString) => {
//     var database;
//     try {
//         if (!process.env.USER_NAME && !process.env.PASSWORD) {
//                 throw console.log("Mongo user name and password is not provided.")
//             } 
//             MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
//                 if (err) return reject(console.log(err))
//                 .then(db.db('simple-node-backend-app'))
//                 .then(console.log(`Mongo now listening. Mongo Object: ${database}`))
//                 .then(database.collection('users').find())
//                 // database = db.db('simple-node-backend-app');
//                 // console.log(`Mongo now listening. Mongo Object: ${database}`);
//                 //return database;
//             })   
//     } catch (e) {
//         return new Error(`issue connecting to mongo: ${e}`)
//     }
//     //
//     return database.collection('users').find();
// }

// mongDatabase(MongoClient, mongoConnectionString)


// const { MongoClient } = require('mongodb');
// //const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
// const mongoConnectionString = 'mongodb://localhost/';

// //module.exports = {
// const connect = (MongoClient, mongoConnectionString) => {
//     if (!process.env.USER_NAME && !process.env.PASSWORD) {
//         throw console.log("Mongo user name and password is not provided.")
//     }
//     try {
//         new Promise((resolve, reject) => {
//             MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, db) => {
//                 if (err) return reject(console.log(err))
//                 const database = db.db('simple-node-backend-app');
//                 console.log(`Mongo now listening. Mongo Object: ${database}`);
//                 return resolve(database)
//             })
//         })
//     } catch (e) {
//         return new Error(`issue connecting to mongo: ${e}`)
//     }
//  }

// //maybe make the connection emit an event instead then act on that event?

// const showError = () => {
//     console.log("Error with mongoConnectionPromise")
// }

// const mongoConnectionPromise = connect(MongoClient, mongoConnectionString)
// mongoConnectionPromise.then((database) => {
//     const users = database.collection('users').find();
//     console.log(users)
// })
// mongoConnectionPromise.catch(showError)

//alternative would be to find a mongo libary that uses async and await and promises 
