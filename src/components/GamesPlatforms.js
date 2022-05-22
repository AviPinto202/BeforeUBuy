import '../App.css';
import pc_logo from '../assets/pc_logo.png'
import ps4_logo from '../assets/ps4_logo2.jpg'
import ps5_logo from '../assets/ps5_logo.png'
import Xbox_logo from '../assets/Xbox_logo.png'



const GamesPlatforms = () => {

    return (
        <div className="title">
            <h2>Reviews by Platform</h2>
            <div className="container">
                <div className="logos">
                    <a href='_blank'><img src={pc_logo} alt='pc'></img></a>
                    <a href='_blank'><img src={ps4_logo} alt='ps4'></img></a>
                    <a href='_blank'><img src={ps5_logo} alt='ps5'></img></a>
                    <a href='_blank'><img src={Xbox_logo} alt='xbox'></img></a>

                </div>
            </div>

        </div>
    );
}

export default GamesPlatforms;