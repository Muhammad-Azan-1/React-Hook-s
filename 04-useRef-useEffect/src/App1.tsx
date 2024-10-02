import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

                              // How useEffect works in different scenarios: // ----

//1) Runs only on initial render (empty dependency array): If you pass an empty array ([]), 
//useEffect will only run once after the initial render (on mount) and not on subsequent re-renders.

// useEffect(()=>{
//   console.log('Page rendered')
// },[count]);

//2) Runs on every render (no dependency array): If you don't pass a dependency array, useEffect will run after every render,
// both for the initial render and after every update.. so to understand useRef we use this example of useEffect

// let a = 0

// useEffect(()=>{
//   a = a + 1;
//   console.log(`Page re-rendered the value of a is ${a}`)
// })

// now have you seen the value of {a}  is not increasing when the page re-render becasue on re-render
//the varaible is re-created so value fo {a} again become zerio then useEffect run again on re-render that's
// why value of a is incremented to (1) doesn't increment furthure and the proccess goes on same on every
//re-redner, so to solve this issue qwe use useRef 



//-------------------------- FIRST USE CASE OF useRef -------------------------------------------------//


//What is useRef ?

//useRef hook in React is used to persist the value of a variable across renders 
//Persist value across renders: The value stored in useRef persists across component renders. 
//Unlike state, updating a useRef value does not cause the component to re-render.

let a = useRef(0)

useEffect(()=>{
  a.current = a.current + 1;
  console.log(`Page re-rendered the value of a is ${a.current}`)
})

//When you click the button, the state is updated, causing the component to re-render, but the varaible {a} value persists between renders.
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App









