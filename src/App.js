import './App.css';

function App() { 
  const naiyok = ["Anwar", "Jafor", "Alomgir", "Razzak"];
  const products = [
    {name: "Photoshop", price: "$99.90"},
    {name: "Illustrator", price: "$60.07"},
    {name: "PDF Reader", price: "$10.11"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person name={naiyok[0]} job="Dorsok"></Person>
        <Person name="Newaz" job="Football"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button>Buy now</button>
    </div>
  )
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
