import React from 'react'
import { Parallax } from 'react-parallax';
import Satelite from '../img/satelite.jpeg'


const ImageTwo = () => {
  return (
    <Parallax className='image' bgImage={Satelite} bgImageAlt="the nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>


        </div>
    </Parallax>
  )
}

export default ImageTwo