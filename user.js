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

module.exports = function userService({ database }) {
    return {
        getUsers: () => {
            return database.query('select * from users')
        }
    }
}

