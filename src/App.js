
import './App.css';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import ProductInformation from './components/ProductInformation';
import { useState } from 'react';

function App() {
  const [basket, setBasket]=useState({})
  const  addNewProductBasket = (product)=>{
    setBasket(product)
    console.log(basket)
  }
  return (
    <>
       <NavBar basket={basket}/>
       <main>
          <Gallery/>
          <ProductInformation  addNewProductBasket={addNewProductBasket}/>
       </main>
    </>
   
  );
}

export default App;
