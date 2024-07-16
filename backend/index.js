require('dotenv').config()
const express = require('express')
// var cors = require('cors')

const app = express();
// app.use(cors()) 


let jokes = [
    {
      "id": 1,
      "title": "Programming Joke",
      "content": "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
      "id": 2,
      "title": "Math Joke",
      "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
    },
    {
      "id": 3,
      "title": "Dad Joke",
      "content": "I'm reading a book on anti-gravity. It's impossible to put down!"
    }
  ]

app.get('/',(req,res)=>{
    res.send('proxy')
})

app.get('/api/jokes',(req,res)=>{

    res.json(jokes)

})

app.listen(process.env.PORT,()=>console.log('proxy on 4000'))

