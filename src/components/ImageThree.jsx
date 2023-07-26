import React from 'react';

import { Parallax } from 'react-parallax';
import spaceStation from '../img/spaceStation.jpeg'

const ImageThree = () => {
  return (
    <Parallax className='image' bgImage={spaceStation} bgImageAlt="the nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>


        </div>
    </Parallax>
  )
}

export default ImageThree