import React, {useState} from 'react';
import Amount from './Amount';
import Button from './Button';
import './ProductInformation.css';

const ProductInformation = ({ addNewProductBasket}) => {
  const productBasket = {
    "name":"fall limited edition sneakers",
    "price":125,
    "image":"./images/image-product-1.jpg",
    "quantity":0,
  }
  const [product, setProduct]=useState(productBasket);
  
  const updateQuantityHandler=(quantity)=>{
     setProduct(prevState=>{
      return {
        ...prevState, "quantity":quantity
      }
     })

     
  }
  const addNewProduct=()=>(
    addNewProductBasket(product)
  )
  return (
    <div className='right-side-main'>
        <p>sneaker company</p>
        <h2>fall limited edition sneakers</h2>
        <p>
            These low-profile sne are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className='discount'>
            <h3>$125.00</h3>
            <p>50%</p>
        </div>
        <p>$250.00</p>
        <div className='options'>
            <Amount updateQuantityHandler={updateQuantityHandler} />
            <Button addNewProduct={addNewProduct}/>
        </div>
    </div>
  )
}


export default ProductInformation;