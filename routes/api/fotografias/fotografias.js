var express = require('express');
var router = express.Router();

var fotografiasModel = require('./fotografias.model');

router.get('/all',(req,res)=>{
    return res.status(200).json(fotografiasModel.getAll());
}); 

module.exports = router;
