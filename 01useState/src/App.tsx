import  { useState } from 'react' // useState is a built-in hook provided by React. "useState hook in React allows you to change the state of any element in your UI dynamically". This can be any element rendered by your React component, whether it's an HTML element (like <div>, <button>, <p>, etc.) or a custom React component.

import './App.css'

function App() {


  let [count,setCounter] = useState(0)


//   useState(0): Initializes count to 0.
// setCounter(newValue): Updates count to newValue and triggers a re-render of the component.

//////////////////////////------------------------ONE MORE CONCEPT RELATED TO HOOKS JUST FOR UNDERSTANDING---------------------------////////////////////////////////////////////////////

 // increment count 
 // These all setCount are doing the same thing so they all are considered to be one batch that's why count is incremented  to 1 not to 6
//  function addvalue(){
//   setCounter(count + 1)
//   setCounter(count + 1)
//   setCounter(count + 1)
//   setCounter(count + 1)
//   setCounter(count + 1)  
//   setCounter(count + 1)
//   if(count === 20){
//     alert("Counter value reached 20, cannot decrement further.")
//     setCounter(0)
//   }
// }


// function addvalue(){
//             //In prevcounter we have the exsiting state value which is 0 in our case , so In prevcount we will get the exsiting state value
//   setCounter((prevCount:number)=> prevCount + 1)
//   setCounter((prevCount:number)=> prevCount + 1)  // so now here the exsiting state value is 1 because counter increment from 0 to 1
//   setCounter((prevCount:number)=> prevCount + 1)
//   setCounter((prevCount:number)=> prevCount + 1)  // onclick  addValue function first time the  the setcounter function increments the counter directly to 6 on second time to 12
//   setCounter((prevCount:number)=> prevCount + 1)
//   setCounter((prevCount:number)=> prevCount + 1)
// }


/////////////////////////////----------------------------------------------------------------------------------------------//////////////////////////////////////


    function addvalue(){
        setCounter(count + 1)
        if(count === 20){
          alert('You have reached the limits')
          setCounter(count)  // reset counter to 0 after reaching the limit.
        }
    }
    function removeValue(){
        setCounter(count - 1)
        if(count === 0){
          alert('Cannot remove')
          setCounter(count)  // reset counter to 0 after reaching the limit.
        }
    }
  return (
    <>
    <h2>counter Value : {count}</h2><br />
    <button onClick={addvalue}>Add value</button><br /> <br />
    <button onClick={ removeValue}>Remove Value</button>
    </>
  )
}

export default App
