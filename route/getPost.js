const router = require('express').Router()

let posts = [
    {id:'1', name:"John Doe"},
    {id:'2', name:"Susan Doe"} ]

//get post
router.get('/', (req,res) => {
    res.status(200).json(posts)
})

router.post('/', (req,res) => {
    const name = req.body.name
    const id = req.body.id
    
    posts.push(req.body)
    console.log(posts)
    
    res.status(201).send(`Post with id: ${id} and name:${name} added`)
})

module.exports = router