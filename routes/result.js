var express = require('express');
var router = express.Router();

router.get('/bits', function(req, res){
	res.render('result');
});

module.exports = router;