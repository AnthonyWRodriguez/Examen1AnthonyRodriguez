var express = require('express');
var router = express.Router();

var fotografiasModel = require('./fotografias.model');

router.get('/all',(req,res)=>{
    return res.status(200).json(fotografiasModel.getAll());
}); 

router.post('/new', (req,res)=>{
    var datosEnviados = req.body;
    var newfoto = fotografiasModel.addNew(datosEnviados);
    return res.status(200).json(newfoto);
}); 

module.exports = router;
