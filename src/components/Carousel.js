import React, { useState } from 'react';
import { images } from '../Helpers/CarouselData';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className='carousel'>
            <div className='carouselInner'>
                <a target="_blank" onClick={() => { currImg >= 2 ? setCurrImg(0) : setCurrImg(currImg + 1) }}>
                    <img id="game_img" src={images[currImg].image} alt='img1'>
                    </img>
                </a>
            </div>
            <span className="dot" onClick={() => { setCurrImg(0); }}></span>
            <span className="dot" onClick={() => { setCurrImg(1); }}></span>
            <span className="dot" onClick={() => { setCurrImg(2); }}></span>
        </div >
    )
}

export default Carousel
