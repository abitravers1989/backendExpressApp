const express = require('express');
const router = express.Router();


const healthCheck = function (req, res) {
    res.send('healthy')
}

const insertOneUser = function (req, res) {
    const customerObj = { name: req.body.name, email: req.body.email }
    console.log(customerObj)
    const database = req.db;
    if (customerObj.name && customerObj.email) {
        database.collection('users').insertOne(customerObj, (err, res) => {
            if (err) throw err;
            database.close();
            return res.status(201).json(`Custmer object was created: ${customerObj}`)
        })
    } else {
        database.close();
        return res.status(400).send("valid email not provided")
    }
}

const getAll = function (req, res) {
    const database = req.db;
    // console.log(req);
    // res.send(database)
    const users = database.collection('users').find();
    users.forEach((err, doc) => {
        if (err) throw console.log(err);
        res.send(doc)
    })
    database.close();
}

router.route('/health')
    .get(healthCheck)

router.route('/user')
    .get(getAll)
    .post(insertOneUser)

module.exports = router;