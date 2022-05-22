import '../App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';




const InfoCard = (props) => {
    const [CardImg, setCardImg] = useState("");

    return (
        <div className="card_container">
            <div className="card_img">
                <img src={props.image} alt='screenshot'></img>
            </div>
            <div className="card_title">
                <h1>{props.title}</h1>
            </div>
            <div className="card_info">
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.<br />
                    Nunc libero lectus, ultricies eget odio tempus.</p>
            </div>
            <div className='infocard_btn'>
                <h2>8.1</h2>
                <Button variant="secondary" className='moreinfo_btn'>More Info</Button>
            </div>
        </div>
    );
}

export default InfoCard;