import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums: {index:number , isMagical:boolean }[] = new Array(30_000_000).fill(1).map((_ , i:number)=>{

  return {
      index: i,
      isMagical : i === 29_000_000
  }
})

// Here I have created an Array which contains 30 million ones (1) init , with the help of Map I have created
// object for each index of the array (means 30 million objects)
// so evetually map return a new array which contains 30million objects


function App() {

  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

//  let magicalNum : any= numbers.find((items:{index:number, isMagical:boolean})=>{ return items.isMagical === true})

 // Array ke jis object per ye  condition {items.isMagical === true} satify hu ge find wo object return kry ga
 // magicalNum ko

 //But there is a problem with it

// When our page re-render on change of state then this magicalNum  varaible will re-created so it's all 
// Login runs again which is very unessecery  so we  to prevent this we use , useMemo with the help useMemo
// we will freez this varaible so it will not re-created and will not re-run it's whole logic when ever the page
// re-render, unles and until it's dependices  remains same


let magicalNum = useMemo(()=>{

 let returnedObj = numbers.find((items:{index:number, isMagical:boolean})=>  items.isMagical === true)
 return returnedObj;
},[numbers]); 

// if we pass anything inside the array then if that thing changes then our magicalNum will be re-created
// and it's whole logic will runs again otherwise it remains freezed

//console.log("NUMBER",magicalNum) by this you can see what is find method returning
  return (
    <>

      <div>
        <h1>The magical number is {magicalNum!.index}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
              if(count === 10){

                setNumbers(
                  new Array(10_000_000).fill(1).map((_ , i:number)=>{
                    return {
                      index: i,
                      isMagical : i === 9_000_000
                  }
                }))
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
    </>
  )
}

export default App
