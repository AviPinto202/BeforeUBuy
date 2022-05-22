import ImageGallery from 'react-image-gallery';
import { gallery } from '../Helpers/CarouselData';
import excellent_rating from '../assets/rating_excellent.png'
import Footer from "../components/Footer";
import NavrBar from "../components/Navbar";
import { url } from "../Helpers/storge";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const GamePage = () => {
    const [Game, setGame] = useState({})
    const [Rating, setRating] = useState(9.1);

    console.log(Game)

    useEffect(() => {
        getGame();
        return () => {

        };
    }, []);

    const { id } = useParams()

    const getGame = async () => {
        try {
            let res = await fetch(`${url}/game/${id}`, {
                method: "GET",
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                setGame(await res.json())
            }
        }
        catch (error) {
            console.log(error)
        }
    };


    return (
        <div id="header">
            <NavrBar />
            <div className="full-section">
                <div class="left-column">
                    <div className="mySlides">
                        <ImageGallery items={gallery} showNav={false} showFullscreenButton={false} />
                    </div>

                </div>
                <div className="right-column">
                    <h1>Game Name {Game._id}</h1>
                    <h5> Rating: {Rating} <img className='rating_icon' src={excellent_rating} alt="rating">
                    </img></h5>

                </div>
            </div>

            <div className='reviews'>
                <form className='add_review'>
                    <textarea type='text' id='review_content' />
                </form>

            </div>
            <Footer />
        </div>
    );
}

export default GamePage;