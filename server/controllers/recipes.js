let express = require('express'),
router = express.Router();
let db = [];

global.recipes = [
    {
        id: 1,
        recipesName: 'rice',
        upvotes: 2
    }
];

router.get('/', function(){
    return res.json({
        recipes: global.recipes,
        error
    })
});
 //An API route that allows a user add a recipe:
 app.post("/api/recipes", function(req, res){
    //console.log(req.body);
    res.send("view recipes");
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
    res.send("add recipe");
});
//An API route that allows a user to get just recipes with the most upvotes
app.post("/api/recipes/:recipeId/reviews", function(req, res){
    res.send("reviews route");
});