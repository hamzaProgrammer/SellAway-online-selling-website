import React from 'react'
import './ImagesCarousel.css'
import Flickity from "react-flickity-component";


const ImagesCarousel = () => {
    return (
        <>
            <Flickity >
                <img style={{minWidth : '100%' , borderRadius : '5px', maxHeight : '400px' , objectFit : 'cover'}} alt="Img 1" src="./images/image1.jpg"   />
                <img style={{minWidth : '100%' , borderRadius : '5px',maxHeight : '400px' , objectFit : 'cover'}} alt="Img 1" src="./images/image2.jpg"   />
                <img style={{minWidth : '100%' , borderRadius : '5px',maxHeight : '400px', objectFit : 'cover'}} alt="Img 1" src="./images/image3.jpg"   />
                <img style={{minWidth : '100%' , borderRadius : '5px',maxHeight : '400px', objectFit : 'cover'}} alt="Img 1" src="./images/image4.jpg"   />
            </Flickity>
        </>
    )
}

export default ImagesCarousel