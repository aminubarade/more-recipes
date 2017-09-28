const express = require('express');
const moreRecipes = express();
const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine", "ejs");

    //
    moreRecipes.post('', function(res, req){
        res.render();
    });
    //
    moreRecipes.put('', function(res, req){
        res.send();
    });
    moreRecipes.delete('', function(res, req){
        res.send();
    });
    moreRecipes.get('', function(res, req){
        res.render();
    });
    moreRecipes.post('', function(res, req){
        res.send();
    });

app.listen(3000, function(){
    console.log("Server is up and running");
});
