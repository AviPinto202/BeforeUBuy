import '../App.css';
import { useState, useEffect } from "react";
import NavrBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";
import { url } from "../Helpers/storge"
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
    });

    const SignUpUser = async (userName, email, password) => {
        try {
            let res = await fetch(`${url}/sign_up`, {
                method: "POST",
                body: JSON.stringify({ userName: userName, email: email, password: password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await res.json()
            return data;
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SignUpUser(userName, email, password)
        alert("Sign Up Succesfully")
        navigate('/signin')
    }


    return (
        <div id="header">
            <NavrBar />
            <div className='signin_background'>
                <h1 id="signin_title">Sign Up</h1>
                <div className="signin_box">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <Form.Label className='field_title' for="username"><b>Username <span>*</span></b></Form.Label>
                            <input type="text" placeholder="Enter Username" name="username" required
                                onChange={(e) => setUserName(e.target.value)} />
                            <Form.Label for="password"><b>Password <span>*</span></b></Form.Label>
                            <input type="password" placeholder="Enter Password" name="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <Form.Label for="email"><b>Email <span>*</span></b></Form.Label>
                            <input type="email" placeholder="Enter Email" name="email"
                                onChange={(e) => setEmail(e.target.value)} />
                            <button id="signin_btn">Sign Up</button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;