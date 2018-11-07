const connect = (MongoClient, mongoConnectionString) => {
    // if (!process.env.USER_NAME && !process.env.PASSWORD) {
    //     throw console.log("Mongo user name and password is not provided.")
    // }
    try {
        // new Promise((resolve, reject) => {
        MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, function (err, client) {
            if (err) return console.log(err)
            // reject(console.log(err))
            const database = client.db('nodeBackend');

            const users = database.collection('users').find();
            console.log(database.collection('users').find().toArray())
            users.forEach((err, doc) => {
                if (err) throw console.log(err);
                // res.send(doc)
                console.log(doc)
            })
            console.log(`Mongo now listening. Mongo Object: ${database}`);
            //return users
            //return resolve(users)
            client.close()
        })
        // })
    } catch (e) {
        return new Error(`issue connecting to mongo: ${e}`)
    }

}

const MongoClient = require('mongodb').MongoClient;
const mongoConnectionString = 'mongodb://localhost//';
//const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`
connect(MongoClient, mongoConnectionString)
