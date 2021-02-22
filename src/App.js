import './App.css';

function App() { 
  const naiyok = ["Anwar", "Jafor", "Alomgir", "Razzak"];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={naiyok[0]} job="Dorsok"></Person>
        <Person name="Newaz" job="Football"></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style={{border: '2px solid salmon', margin: '10px', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
