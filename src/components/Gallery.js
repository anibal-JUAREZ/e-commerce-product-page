import React, {useState, useRef} from 'react';
import './Gallery.css';
import ModalGallery from './ModalGallery';

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const mainPhotoRefResponsive = useRef(null);
  const openModalHandler = ()=>{
    setOpenModal(!openModal)
  }
  let numberPhoto=1;
    const nextPhotoHandler=()=>{
        numberPhoto++;
        if(numberPhoto>4){
            numberPhoto =1
        }
        mainPhotoRefResponsive.current.src=`./images/image-product-${numberPhoto}.jpg`;
        
    }

    const previousPhotoHandler=()=>{
        numberPhoto--;
        if(numberPhoto<1){
            numberPhoto =4;
        }
        mainPhotoRefResponsive.current.src=`./images/image-product-${numberPhoto}.jpg`;
      

    }
  return (
    <>
      <div className='left-side-main'>
          <div className='big-picture'>
            <div className='move-button previous'>
                  <svg onClick={previousPhotoHandler} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
              <img ref={mainPhotoRefResponsive} src='./images/image-product-1.jpg' alt='shoes picture'/>
            <div className='move-button next'>
                <svg  onClick={nextPhotoHandler} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
          </div>
          
          <div className='small-pictures'>
              <img onClick={openModalHandler} src='./images/image-product-1-thumbnail.jpg' alt='shoes picture'/>
              <img onClick={openModalHandler} src='./images/image-product-2-thumbnail.jpg' alt='shoes picture'/>
              <img onClick={openModalHandler} src='./images/image-product-3-thumbnail.jpg' alt='shoes picture'/>
              <img onClick={openModalHandler} src='./images/image-product-4-thumbnail.jpg' alt='shoes picture'/>
          </div>
      </div>
      {openModal && <ModalGallery openModalHandler={openModalHandler}/>}
    </>
  )
}


export default Gallery;