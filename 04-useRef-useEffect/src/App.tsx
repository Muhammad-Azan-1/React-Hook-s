
import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let btnRef = useRef()  as any


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
     {/* // The ref in React is essentially a reference or a "connector" to a DOM element or a React component, allowing you to directly interact with that element in a controlled way. */}
        <button ref = {btnRef} onClick={() => {setCount((count) => count + 1)
          if(count > 5){

            console.log('On fifth re-rendered')
          btnRef.current.style.backgroundColor = 'red'
            }
        }}>

          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{
        btnRef.current.style.backgroundColor = 'white'; 
        btnRef.current.style.color= 'black';
      }}>Click me to Change the color </button>
    </>
  )
}

export default App
