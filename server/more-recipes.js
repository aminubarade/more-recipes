const express = require('express');
const app = express();
const bodyParser = require("body-parser");
recipes = [
    {
        id: 1,
        recipesName: 'rice',
        upvotes: 2
    }
];

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json())
    //app.set("view engine", "ejs");
    
    app.get("/", function(req, res){
        return res.json({
            recipes: recipes,
            error: false
    });
});
    //An API route that allows a user add a recipe:
    app.post("/api/recipes", function(req, res){
            if(!req.body.name){
                return res.json({
                    recipes: "recipe missing",
                    error: true
            });
        }
            recipes.push(req.body);
            return res.json({
                recipes: "success",
                error: false
        });

        });
    //res.send("view recipes");
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
        res.send("add recipe");
    });
    //An API route that allows a user to get just recipes with the most upvotes
    app.post("/api/recipes/:recipeId/reviews", function(req, res){
        res.send("reviews route");
    });
app.listen(3000, function(){
    console.log("Server is up and running");
});
