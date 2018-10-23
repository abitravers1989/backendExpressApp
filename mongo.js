
module.exports = {
    connect: function (mongoClient, mongoConnectionString) {
        mongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, database) => {
            if (err) throw err
            const myDatabase = database.db('simple-node-backend-app')
            console.log('Mongo on');
            return myDatabase;
        })
    }
}

