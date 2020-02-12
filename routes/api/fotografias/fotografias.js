var express = require('express');
var router = express.Router();

var fotografiasModel = require('./fotografias.model');

router.get('/all',(req,res)=>{
    return res.status(200).json(fotografiasModel.getAll());
}); 

router.post('/new', (req,res)=>{
    var datosEnviados = req.body;
    var newFoto = fotografiasModel.addNew(datosEnviados);
    return res.status(200).json(newFoto);
}); 

router.put('/upd/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    var updFoto = fotografiasModel.update (id, req.body);
    return res.status(200).json(updFoto);
});

router.delete('/del/:id', (req, res)=>{
    var id = parseInt( req.params.id );
    fotografiasModel.deleteByID (id);
    return res.status(200).json({"delete":true});
});

module.exports = router;
