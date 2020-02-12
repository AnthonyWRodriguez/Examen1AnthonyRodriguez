var fs = require('fs');
var fileToSave = 'security.json';

var fotografiasModel = {};

var fotografiasCollection = [];

function writeToFile(){
    var serializedJSON = JSON.stringify(fotografiasCollection);
    fs.writeFileSync(fileToSave, serializedJSON, {encodeing:'utf8'});
    return true;
}

function openFile(){
    try{
        var serializedJSON = fs.readFileSync(fileToSave, {encodeing:'utf8'});
        fotografiasCollection = JSON.parse(serializedJSON);
        return true;    
    }
    catch(e){
        console.log(e);
    }
}

var fotografiasTemplate = {
    id:"",
    title:"",
    url:"",
    thumbnailURL:"",
    album:""
}

openFile();

fotografiasModel.getAll = ()=>{
    return fotografiasCollection
}

fotografiasCollection.push(
    Object.assign(
        {},
        fotografiasTemplate, 
        {
            id:1,
            title:"Snow Mountain",
            url:"https://unsplash.com/photos/zlPhxd5OydQ",
            thumbnailURL:"https://images.unsplash.com/photo-1531436107035-40b2e85b7a1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            album:"Mountains"
        })
);

fotografiasModel.addNew=({sent_title, sent_url, sent_thumbnailURL, sent_album} )=>{
    var newfoto = Object.assign(
        {},
        fotografiasTemplate, 
        {
                title: sent_title,
                url: sent_url,
                thumbnailURL: sent_thumbnailURL,
                album: sent_album
        });
        newfoto.id = fotografiasCollection.length + 1;
        fotografiasCollection.push(newfoto);
        writeToFile();
        return newfoto;
}

fotografiasModel.update=( ID, {new_url, new_thumbnailURL}) => {
    var updatingfoto = fotografiasCollection.filter(
    (o,i)=>{
            return o.id === ID;
        }
    );
    if (updatingfoto && updatingfoto.length > 0){
        updatingfoto = updatingfoto[0];
    }else{
        return null;
    }
    var updatefoto={};
    var newUpdatedCollection = fotografiasCollection.map(
        (o,i)=>{
            if (o.id === ID){
                updatefoto = Object.assign({},
                    o,
                    { url:new_url,
                      thumbnailURL:new_thumbnailURL }
                );
                return updatefoto;
            }else{
                return o;
            }
        }
    );
    fotografiasCollection = newUpdatedCollection;
    writeToFile();
    return updatefoto;
}

fotografiasModel.deleteByID = (ID)=>{
    var newCollection = [];
    newCollection = fotografiasCollection.filter(
        (o)=>{
            return o.id !== ID;
        }
    );
    fotografiasCollection = newCollection;
    writeToFile();    
    return true;
}

module.exports = fotografiasModel;