var express = require('express');
var router = express.Router();

var fotografiasRouter = require('./fotografias/fotografias');

router.use('/fotografias',fotografiasRouter);

module.exports = router;
