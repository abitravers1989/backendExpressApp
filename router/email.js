var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('itenary home page')
})

//get emails
// router.post('/', function (req, res) {
//     //get email off res.email
// })

module.exports = router;