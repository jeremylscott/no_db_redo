require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const app = express()
const {getRecipes,postRecipe,deleteRecipe,changeRecipe} = require('./controller')

app.use(json())

app.get('/api.recipes', getRecipes)
// app.post('/api/recipes', postRecipe)
// app.delete('/api.recipes/:id', deleteRecipe)
// app.put('/api/recipes', changeRecipe)








app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))