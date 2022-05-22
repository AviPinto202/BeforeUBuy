import '../App.css';
import InfoCard from './InfoCards';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { useEffect } from 'react';

const TopGames = (props) => {
    const games = props.games;

    useEffect(() => {
        console.log(games)
        return () => {

        };
    }, []);

    return (
        <div className="backgroundSection">
            <div className="topgames_title">
                <h2>Top Games 2021</h2>
            </div>
            <OwlCarousel className='owl-theme' items="2" loop dots>
                {games.map((game, index, key) =>
                    <div className='item' key={key = game._id}>
                        <InfoCard image={game.img1}
                            title={game.game_name} />
                    </div>
                )}
            </OwlCarousel >
        </div>
    );
}

export default TopGames;