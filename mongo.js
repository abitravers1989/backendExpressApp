
module.exports = class mongoDb {
    constructor(mongoClient, mongoConnectionString) {
        this.mongoClient = mongoClient;
        this.mongoConnectionString = mongoConnectionString;
        let myDatabase;
    }
    connect() {
        this.mongoClient.connect(this.mongoConnectionString, { useNewUrlParser: true }, (err, database) => {
            if (err) throw err
            mongoDb.myDatabase = database.db('simple-node-backend-app')
            console.log('Mongo on');
            //console.log(mongoDb.myDatabase)
            //return this;
        })
    }
    //sync or async?
    getAll() {
        console.log(mongoDb.myDatabase)
        mongoDb.myDatabase.collection('users').find().toArray((err, result) => {
            if (err) throw err;
            console.log(result)
        })
    }
}
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

