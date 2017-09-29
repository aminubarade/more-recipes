const express = require('express');
const app = express();
const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine", "ejs");

        //An API route that allows a user add a recipe:
    app.post("/api/recipes", function(req, res){
        //console.log(req.body);
        res.render("viewrecipes");
    });
    //An API route that allows a user modify a recipe
    app.put("/api/recipes/:recipeId", function(req, res){
        res.send("put route");
    });
    //An API route that allows a user to delete a recipe
    app.delete("/api/recipes/:recipeId", function(req, res){
            res.send("delete route");
    });      
    //An API route that allows a user post a review for a recipe
    app.get("/api/recipes/", function(req, res){
        res.render("addrecipe");
    });
    //An API route that allows a user to get just recipes with the most upvotes
    app.post("/api/recipes/:recipeId/reviews", function(req, res){
    res.send("reviews route");
    });


app.listen(3000, function(){
    console.log("Server is up and running");
});
