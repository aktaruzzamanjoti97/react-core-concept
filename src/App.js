import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Alomgir', 'Salman','Bappy', 'Shakib', 'Shuvo'];
 const products = [
   {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.90'},
    {name: 'PDF reader', price: '$6.60'},
    {name: 'Premiere El', price: '$248'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react</p>


        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = 
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Users () {
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setPhotos(data));
  }, [])
  return(
    <div>
      <h3>Dynamic users: {photos.length}</h3>
      {
        photos.map(photo => <li>{photo.id}</li>)
      }
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


function  Person(props) {
  return (
    <div style={{border: '2px solid gold', width: '400px'}}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}

export default App;
