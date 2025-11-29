import { useState } from 'react';
import './App.css';
import PersInfo from './Components/PersInfo';
// let i=0;
// in console is incriment by 1 but ui not change because react not aware of this change that why use the State

// const addVal=()=>{
// i++;
// console.log(i);
// }
// we use state than the first import useState from react in app.js file --> useState mai (state value and setter function) rahata h -->state value we have to initalize it with some value such as Number,Boolean , string , Array ,object Literal -->Setter function use to which allow you to update state value and inform react and load -->


// function App() {
//   const [i,setCount]=useState(0);
//   const addVal=()=>{
//     setCount(i+1);
//     console.log(i+1);
//   }
// lazy initial state :- if the initial state is the result of an expensive computation, you can provide a function to useState.
// function initialState(){
//   console.log("initial state called"+Date.now());
//   return 0;
// }
let i=1;
function App() {
  const [i,setCount]=useState(10);
  const [flag,setFlag]=useState(true);
  // const addVal=()=>{
  //   setCount(i+1);
  // }
  // const adddec=()=>{
  //   setCount(i-1);
  // }

// function App() {
//   const [addVal,setCount]=useState(()=>initialState());// lazy initial state
  const changeCounter=(val)=>{
   if(val==="+"){
    setCount(i+1);
   }else if(val==="-"){
    setCount(i-1);
   }}
  return (<>
    <div className="Pers">
      <PersInfo name="Name1" age="99"/>
       <PersInfo name="Name2" age="89"/>
        <PersInfo name="Name3" age="22"/>
    </div>
    <div>
      {/* <h1>{addVal}</h1> */}
      <h1>{i}</h1>
     {/* // <button onClick={()=>{setCount(addVal+1)}}>incriment</button> */}
     <button className='cb' onClick={()=>changeCounter("+")}>incriment</button>
     <button className='cb' onClick={()=>changeCounter("-")}>decriment</button>
    </div>
    <div>
      <h1>{flag.toString()}</h1>
      <button onClick={()=>{setFlag(!flag)}}>Toggel</button>
      </div>   
       </>
  );
}

export default App;

//this this custom App component which is being called in index.js file
//flow is App.js call to index.js file to index.html file.
//in App.js we can write our custom code to render UI and components we can create here and use them here as well.
//what is difftence betwwen npm and npx?
//npm is a package manager that allows you to install, update, and manage packages (libraries or modules) for your Node.js projects. It is used to handle dependencies and manage the packages required for your application.
//npx is a package runner that comes with npm (version 5.2.0 and higher). It allows you to execute //packages without installing them globally on your system. npx is often used to run command-line tools or scripts directly from the npm registry or from local project dependencies.
