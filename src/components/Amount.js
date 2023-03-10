import React, {useState} from 'react';
import './Amount.css'

const Amount = ({updateQuantityHandler}) => {

    const [amount, setAmount]=useState(0);
    const increaseHandler=()=>{
        setAmount(prevState=>{
            updateQuantityHandler(prevState+1)
            return prevState+1;
        })
        ;
    }

    const decreaseHandler=()=>{
        setAmount(prevState=>{
            if(prevState === 0){
                updateQuantityHandler(0)
                return 0
            }else{
                updateQuantityHandler(prevState-1)
                return prevState -1;
            }
            
        })
        
    }
  return (
    <div className='amount'>
        
        <svg onClick = {decreaseHandler} className='icon-amount' width="8" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsxLink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="Currentcolor" fill-rule="nonzero" xlinkHref="#a"/></svg>
        <p>{amount}</p>
        <svg onClick = {increaseHandler} className='icon-amount' width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsxLink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="Currentcolor" fill-rule="nonzero" xlinkHref="#b"/></svg>
    </div>
  )
}

export default Amount;
