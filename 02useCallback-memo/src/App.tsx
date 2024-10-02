import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0) 
  // as the state changes or if there is any prop which change the App Component re-render
  // as App re-render everthing inside it re-created , so as getName function re-created
  //so it's props also re-created that's why Navbar thinks a new props comes or the prop is updated 
  // because Navbar dont remeber the getName function , so as the Navbar thinks that the prop is change/update
  //so that's why Navbar component re-render

    //  function getName(){
    // return "Azan" + count  }


// So to avoid this unnecessary re-rendering we use a hook called useCallback, if our App Component re-render
//with the help of this hook  our getname function become memoized means the function become freezed so as the
//function becomes freezed which means prop is also become freezed so that our Navbar component will not re-render 
//When App re-render

//Note: (If any dependencies of usecallback changed then this function will be re-created )

//SO use callback will remain same when the App Component re-render but it will change if and only it's
// depend changed



let getName = useCallback(function(){
    return "Azan" + count
},[])

// after using usecallback navbar is still re-rendering
// Why is Navbar still re-rendering?

//1
// React Re-renders Parent Components: When you change the state in App (using useState), 
//React re-renders the entire App component, and by default, it re-renders all of its child components 
//(including Navbar), regardless of whether the child props have changed or not. This is React's default behavior.

//2
// useCallback Memoizes getName: Using useCallback prevents the getName function from being
// re-created on every render of App. Therefore, the getName prop itself is not changing, and thus,
// Navbar is not re-rendering due to the getName prop.

// Why does Navbar re-render if getName function hasn’t changed?

//3
// Even though getName hasn't changed due to useCallback, React still re-renders the entire App component when its state (count) changes.
// Since Navbar is a child of App, it is included in the re-render by default, even if its props remain the same.
// React does not automatically check whether a component’s props have changed before re-rendering the child. Instead, it just re-renders all children when the parent re-renders unless instructed otherwise.
 
  return (
    <>
      <Navbar  getName = {getName}/>
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
