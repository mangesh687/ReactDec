
import './App.css';
import PersInfo from './Components/PersInfo';
let i=0;
// in console is incriment by 1 but ui not change because react not aware of this change
const addVal=()=>{
i++;
console.log(i);
}
function App() {
  return (<>
    <div className="Pers">
      <PersInfo name="Name1" age="99"/>
       <PersInfo name="Name2" age="89"/>
        <PersInfo name="Name3" age="22"/>
    </div>
    <div>
      <h1>{i}</h1>
      <button onClick={addVal}>incriment</button>
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
//npx is a package runner that comes with npm (version 5.2.0 and higher). It allows you to execute packages without installing them globally on your system. npx is often used to run command-line tools or scripts directly from the npm registry or from local project dependencies.
