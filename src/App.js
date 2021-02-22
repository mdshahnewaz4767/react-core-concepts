import logo from './logo.svg';
import './App.css';

function App() { 

  var person = {
    name: "Muhammad Shahnewaz",
    job: "Web Developer"
  };
  var style = {
    color: "salmon",
    backgroundColor: "green",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px gray"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style = {style}>I am {person.name}</h1>
        <h3 style = {{backgroundColor: 'cyan', color: 'black'}}>Job: {person.job}</h3>
      </header>
    </div>
  );
}

export default App;
