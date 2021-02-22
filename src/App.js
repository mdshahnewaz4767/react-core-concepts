import './App.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Person name="Rubel" nayika="Moushumi"></Person>
       <Person name="Jasim" nayika="Sabana"></Person>
       <Person name="Bapparaz" nayika="Cheka"></Person>
       <Person name="Elias" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

//Make a Component
function Person(props){
  const personStyle = {
    margin: '10px',
    padding: '10px',
    border: '2px solid lightGreen'
  };

  return (
    <div style = {personStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
