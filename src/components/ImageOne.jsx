import React from 'react';
import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa.jpg'

const ImageOne = () => {
  return (
    <Parallax className='image' bgImage={Nasa} bgImageAlt="the nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>


        </div>
    </Parallax>
  )
}

export default ImageOne