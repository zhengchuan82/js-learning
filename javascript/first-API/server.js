var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
var ingredients = [
    {
        "id":"232kAk",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frogs Legs"
    }
]

app.get('/ingredients', function(request, response){
    response.send(ingredients);
});

app.post('/ingredients', function(request, response){
    var ingredient = request.body;
    if (!ingredient || ingredient.text === ""){
        response.status(500).send({error:"Your ingredient must have a name"});
    } else{
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }
});

app.put('/ingredients/:ingredientId', function(request, response ){
    var ingredientId = request.params.ingredientId;
    var newText = request.body.text;

    if (!newText || newText === ""){
        response.status(500).send({error:"You must provide ingredient text"})
    } else {
    for (var x = 0; x < ingredients.length; x++){
        var ing = ingredients[x];

        if(ing.id === request.params.ingredientId){
            ingredients[x].text = newText;
            break;

        }
    }

    response.send(ingredients);
    }
});



app.get('/funions', function(request, response){
    response.send('yo yo yo');
});
app.listen(3000, function(){
    console.log("First API running on port 3000!")
});