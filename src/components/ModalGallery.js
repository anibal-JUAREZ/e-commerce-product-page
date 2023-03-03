import React, {useRef} from 'react';
import './ModalGallery.css';

const ModalGallery = ({openModalHandler}) => {
    const mainPhotoRef = useRef(null);
    let numberPhoto=1;
    const nextPhotoHandler=()=>{
        numberPhoto++;
        if(numberPhoto>4){
            numberPhoto =1
        }
        mainPhotoRef.current.src=`./images/image-product-${numberPhoto}.jpg`;
        
    }

    const previousPhotoHandler=()=>{
        numberPhoto--;
        if(numberPhoto<1){
            numberPhoto =4;
        }
        mainPhotoRef.current.src=`./images/image-product-${numberPhoto}.jpg`;
      

    }
  return (
    <>
        <div className='backdrop'></div>
        <div className='carousel'>
       
                <div className='close-button'>
                    <svg onClick={openModalHandler} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="Currentcolor" fill-rule="evenodd"/></svg>
                </div>
                <div className='main-carousel'>
                    <div className='move-button'>
                        <svg onClick={previousPhotoHandler} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    <img ref={mainPhotoRef} stye ={{"width":"1rem"}}src='./images/image-product-1.jpg' alt='shoes picture'/>
                    <div className='move-button'>
                        <svg onClick={nextPhotoHandler} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                </div>
                
          
          
                <div className='all-photos'>
                    <img src='./images/image-product-1-thumbnail.jpg' alt='shoes picture'/>
                    <img src='./images/image-product-2-thumbnail.jpg' alt='shoes picture'/>
                    <img src='./images/image-product-3-thumbnail.jpg' alt='shoes picture'/>
                    <img src='./images/image-product-4-thumbnail.jpg' alt='shoes picture'/>
                </div>
        </div>
    </>
  )
}


export default ModalGallery;