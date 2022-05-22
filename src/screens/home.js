import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavrBar from '../components/Navbar';
import Box from '../components/Box';
import TopGames from '../components/TopGames';
import GamesPlatforms from '../components/GamesPlatforms';
import Footer from '../components/Footer';
import { url } from "../Helpers/storge";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";



const Home = () => {
    const [userToken, setUserToken] = useState('');
    const [Games, setGames] = useState([{}])


    useEffect(() => {
        getToken();
        getGames();
        return () => {
        };
    }, []);

    const getToken = () => {
        setUserToken(localStorage.getItem('token'));
    }

    const getGames = async () => {
        try {
            let res = await fetch(`${url}/games`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                let data = await res.json()
                setGames(data)
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="home">
            <div id="header">
                <NavrBar />
            </div>
            <Box />
            <div id="topgamesSection">
                <TopGames games={Games} />
            </div>
            <div id="games_platforms">
                <GamesPlatforms />
            </div>
            {/* Add condition if the use log in so link to add review page */}
            <div id='addreview_btn'>
                {!userToken ?
                    <Link to="/signin"><button>Start Add Reviews</button></Link>
                    :
                    <Link to="/game_page"><button>Start Add Reviews</button></Link>
                }
            </div>
            <div>{Games.map((item, index) => item.game_name)}</div>
            <Footer />
        </div >
    );
}

export default Home;