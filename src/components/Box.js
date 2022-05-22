import excellent_rating from '../assets/rating_excellent.png'
import Carousel from './Carousel'
import { BsCaretRightFill } from "react-icons/bs";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Box = () => {
    const [rating, setRating] = useState(9.2);


    return (
        <div className="box">
            <div className="infoBox">
                <h1>Name of game  <span>{rating} Rating <img className='rating_icon' src={excellent_rating}></img></span>
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue auctor finibus. Suspendisse congue risus sed sollicitudin commodo. Maecenas iaculis dolor ac volutpat placerat. Praesent sed nisl tristique, luctus dolor ut, porta nibh. Fusce felis magna, porta at tellus vitae, mattis cursus enim. Curabitur sagittis pretium commodo. Integer nec ligula vitae mi fringilla volutpat. Curabitur at nisl at odio tempor egestas. Proin id odio in metus varius hendrerit eget sed metus. Aliquam eu est turpis. Integer pretium ornare massa, id euismod lacus gravida ac.</p>
                <p className='price'>Price: 59.99$</p>
                <Link to="/game_page">
                    <div className='btn_learnmore'>
                        <Button variant="secondary" className='learnmore'>Learn More
                            <span className='btnIcon'><BsCaretRightFill /></span>
                        </Button>

                    </div>
                </Link>
            </div>

            <div className="box_img">
                <Carousel />
            </div>
        </div>
    );
}

export default Box;