import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const Ff=()=>{
    return "hello world";
  }

  return (

  <div className='App'>
    <div className='container'>
      <h1 id='heading'>Todo List App</h1>
      <form action="" className='todoForm'>
        <input type="text" />
        <button>Go</button>
      </form>
      <ul className='allTodo'>
        
        <li className='singleTodo'> 
        
          <span className='todoText'>Learn React</span>
          <button>Edit</button>
          <button>Delete</button>
          
        
        </li>
      </ul>


    </div>
  </div>
    
  )
}

export default App
