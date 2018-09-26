var express = require('express');
var router = express.Router();

const healthCheck = function (req, res) {
    res.send('healthy')
}

const sendOneEmail = function (req, res) {
    const customerEmail = req.body.email;
    console.log(customerEmail)
    //change this to validation middleware.
    //want to log is email in wrong formatt. 
    if (customerEmail) {
        return res.status(201).json(`created user with ${customerEmail}`)
    } else {
        // console.error(err.stack)
        return res.status(400).send("valid email not provided")
    }
}

router.route('/health')
    .get(healthCheck)

router.route('/email')
    .post(sendOneEmail)

module.exports = router;