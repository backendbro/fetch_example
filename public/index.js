

const display = document.getElementById('display')
const get = document.getElementById('get')
const post = document.getElementById('post')


get.addEventListener("click", () => {
    getPost()
})

post.addEventListener('click', () => {
    makePost({id:3, name:"Chioma Susan"})
    makePost({id:4, name:"Monkey D. Luffy"})
    makePost({id:5, name:"Uchiha Itachi"})
})

async function getPost(){
    const response = await fetch('/posts')
    const posts = await response.json()
    let output = ""
    posts.forEach(post => {
        console.log(post.name)
        output+=`<li> id: ${post.id}, name: ${post.name} </li>`
        return output
    })
    display.innerHTML = output
}


async function makePost(data){
    const post = await fetch('/posts',{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        'Accept':"application/json"
    },
    body:JSON.stringify(data)
    })
   const response = await post.text()
   console.log(response)
       
    }

