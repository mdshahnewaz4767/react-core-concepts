import './App.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}

//Make a Component
function Person(){
  const personStyle = {
    margin: '10px',
    padding: '10px',
    border: '2px solid lightGreen'
  };

  return (
    <div style = {personStyle}>
      <h2>Name: Muhammad Shahnewaz</h2>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
