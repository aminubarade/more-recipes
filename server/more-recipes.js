const express = require('express');
const moreRecipes = express();
const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine", "ejs");

    //
    moreRecipes.post('/api/recipes', function(res, req){
        res.render();
    });
    //
    moreRecipes.put('/api/recipes/:recipeId', function(res, req){
        res.send();
    });
    moreRecipes.delete('/api/recipes/:recipeId', function(res, req){
        res.send();
    });
    moreRecipes.get('/api/recipes/', function(res, req){
        res.render();
    });
    moreRecipes.post('/api/recipes/:recipeId/reviews', function(res, req){
        res.send();
    });

app.listen(3000, function(){
    console.log("Server is up and running");
});
