import '../App.css';
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {



    return (
        <div className='footer'>
            <div className="upper_section">
                <div className='container'>
                    <a href=''><p>About Us</p></a>
                    <a href=''><p>Terms And Conditions</p></a>
                    <a href=''><p>Privacy Policy</p></a>
                    <a href=''> <p>Support</p></a>
                </div>
            </div>
            <div className="second_section">
                <div className='container'>
                    <a href=''><BsFacebook /></a>
                    <a href=''><BsTwitter /></a>
                </div>


            </div>
        </div>

    );
}

export default Footer;