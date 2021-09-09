var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.send({greeting: '백엔드 서버 연결'});
})

module.exports = router;


