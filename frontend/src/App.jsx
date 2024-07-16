import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  const [jokes,setJokes] = useState([])

  

  useEffect(() => {
    axios.get('/api/jokes') 
      .then(function (response) {
        
        setJokes(response.data); 
      })
      .catch(function (error) {
        // Handle error
        console.error('Error fetching jokes:', error);
      });
  }, []);



  return (
    <>
      <h1>proxy setup</h1>

      <div >
        {jokes.map((joke,index)=>(
          <div key={index} >
          <p key={joke.id} >{joke.title}</p>
          <h3>{joke.content}</h3>
          </div>
          
        ))}
      </div>
    </>
  )
}

export default App
