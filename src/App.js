import './App.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return <h2>Name: Muhammad Shahnewaz</h2>
}

export default App;
