var fotografiasModel = {};

var fotografiasCollection = [];

var fotografiasTemplate = {
    id:"",
    title:"",
    url:"",
    thumbnailURL:"",
    album:""
}

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
        return newfoto;
}

module.exports = fotografiasModel;