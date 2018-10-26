const { MongoClient } = require('mongodb');
const promisify = require('es6-promisify')

const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
let _connection;

const connection = () => {
    //console.log(process.env.USER_NAME)
    if (!process.env.USER_NAME && !process.env.PASSWORD) {
        throw console.log("Mongo user name and password is not provided.")
    }
    _connection = MongoClient.connect(mongoConnectionString, { useNewUrlParser: true })
}

connection()


// const thing = MongoClient.connect

// console.log(new thing.MongoError());






// module.exports = {
//     connect: async (mongoClient, mongoConnectionString) => {
//         try {
//             let client = await mongoClient.connect(mongoConnectionString, { useNewUrlParser: true })
//             let db = client.db('simple-node-backend-app');
//             try {
//                 const res = await db.collection('users').updateOne({
//                     "email": 'test@test.com'
//                 }, { $set: someObj }, { upsert: true })
//                 console.log(`res => ${JSON.stringify(res)}`)
//             }
//             catch {
//                 (err => console.log(err))
//             }
//             finally {
//                 client.close();
//             }
//         }
//     }
        //catch { console.log(err) }
    //}

    // .catch(err => console.log(err))
//}




// module.exports = class mongoDb {
//     constructor(mongoClient, mongoConnectionString) {
//         this.mongoClient = mongoClient;
//         this.mongoConnectionString = mongoConnectionString;
//         let myDatabase;
//     }
//     connect() {
//         this.mongoClient.connect(this.mongoConnectionString, { useNewUrlParser: true }, (err, database) => {
//             if (err) throw err
//             mongoDb.myDatabase = database.db('simple-node-backend-app')
//             console.log('Mongo on');
//             //console.log(mongoDb.myDatabase)
//             //return this;
//         })
//     }
//     //sync or async?
//     getAll() {
//         console.log(mongoDb.myDatabase)
//         mongoDb.myDatabase.collection('users').find().toArray((err, result) => {
//             if (err) throw err;
//             console.log(result)
//         })
//     }
// }
    // (async () => {
    //     let client = await MongoClient.connect(connectionString,
    //         { useNewUrlParser: true });

    //     let db = client.db('dbName');
    //     try {
    //        const res = await db.collection("collectionName").updateOne({ 
    //            "someKey": someValue
    //        }, { $set: someObj }, { upsert: true });

    //        console.log(`res => ${JSON.stringify(res)}`);
    //     }
    //     finally {
    //         client.close();
    //     }
    // })()
    //     .catch(err => console.error(err));


// {
//     connect: function (mongoClient, mongoConnectionString) {
//         mongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, database) => {
//             if (err) throw err
//             const myDatabase = database.db('simple-node-backend-app')
//             console.log('Mongo on');
//             console.log(myDatabase);
//         })
//     }
// }

