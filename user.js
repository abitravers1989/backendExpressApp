// module.exports = class UserService {
//     constructor({ database }) {
//         this.database = database
//     }
//     getUsers() {
//         return this.database.query('select * from users')
//     }
// }


// find
// get
// create
// delete
//     replace / alter

const database = require('./mongo')

module.exports = function userService({ database }) {
    return {
        getUsers: () => {
            //return database.query('select * from users')

            //     //const myDatabase = database.db('simple-node-backend-app')
            myDatabase.collection('users').find().toArray((err, result) => {
                if (err) throw err;
                console.log(result)
            })

        }
    }
}


