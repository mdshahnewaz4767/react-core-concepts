import React, {useEffect, useState} from 'react';
import './App.css';

function App() { 
  const naiyoks = ["Anwar", "Jafor", "Alomgir", "Razzak", "Bappi"];
  const products = [
    {name: "Photoshop", price: "$99.90"},
    {name: "Illustrator", price: "$60.07"},
    {name: "PDF Reader", price: "$10.11"}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  const naiyokNames = naiyoks.map(naiyok => naiyok);
  console.log(naiyokNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            naiyoks.map(naiyok => <li key={naiyok.toString()}>{naiyok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        <Product product={products[0]}></Product>
        <Person name={naiyoks[0]} job="Dorsok"></Person>
        <Person name="Newaz" job="Football"></Person>
      </header>
    </div>
  );
}

//digit count
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    console.log('clicked');
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => {setCount(count - 1)}}>Decrease</button>
    </div>
  )
}
//Load dynamic data, API call useEffect integrate state
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    console.log('Calling Effect');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => 
      {
        console.log(data);
        setUsers(data);
      })
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
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
