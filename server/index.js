const express = require('express')
const {json} = require('body-parser')
const app = express()

app.use(json())










app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))