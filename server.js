const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes and mounting
const getPostRoute = require('./route/getPost')
app.use('/posts', getPostRoute)

app.listen(8080, () => {
    console.log(`port 8080 connected...`)
})

