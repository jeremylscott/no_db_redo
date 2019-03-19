const axios = require('axios')

let recipes = []

axios.get('http://www.recipepuppy.com/api/')
    .then(response => {
        recipes = response.data.results.map((recipe,i) => {
            return {
                id: i,
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                ingredients: recipe.ingredients,
                href: recipe.href
            }
        })
    })

getRecipes = (req,res) => {
    res.json(recipes)
}

postRecipe = (req,res) => {
    recipes.push(req.body)
    res.json(recipes)
}

deleteRecipe = (req,res) => {
    deleteID = req.params.id
    let index = recipes.findIndex(recipe => recipe.id === deleteID)
    recipes.splice(index,1)
    res.json(recipes)
}

changeRecipe = (req,res) => {
    recipes.forEach(recipe => recipe.id === req.params.id)
        recipe.title = req.body.title,
        recipe.ingredients = req.body.ingredients,
        recipe.href = req.body.href,
        recipe.thumbnail = req.body.thumbnail
        res.json(recipes)
}

module.exports = {
    getRecipes,
    postRecipe,
    deleteRecipe,
    changeRecipe
}