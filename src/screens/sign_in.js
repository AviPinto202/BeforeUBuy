import '../App.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { url } from "../Helpers/storge";
import NavrBar from "../components/Navbar";
import Footer from "../components/Footer";

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //const [userToken, setUserToken] = useState('');
    const [arr, setArr] = useState([]);

    const navigate = useNavigate()

    const LoginUser = async (userName, password) => {
        try {
            let res = await fetch(`${url}/login`, {
                method: "POST",
                body: JSON.stringify({ userName: userName, password: password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                let data = await res.json()
                setToken(data.token)
                navigate('/')
                if (!EmptyArr(data)) {
                    return data[0]
                }
            }
            else {
                alert("Login falied")
                return null
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const EmptyArr = (arr) => {
        return setArr().length === 0
    };

    const setToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        LoginUser(userName, password)
    }


    return (
        <div id="header">
            <NavrBar />
            <div className="signin_background">
                <h1 id="signin_title">Sign In</h1>
                <div className="signin_box">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <Form.Label for="uname"><b>Username</b></Form.Label>
                            <input type="text" placeholder="Enter Username" name="username" required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)} />
                            <Form.Label for="psw"><b>Password</b></Form.Label>
                            <input type="password" placeholder="Enter Password" name="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <button id="signin_btn">Login</button>

                            <Link to="/signup">
                                <button id="createaccount_btn" type="button">Create an Account
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;