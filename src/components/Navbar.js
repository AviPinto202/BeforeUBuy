import logo from "../assets/BeforeYouBuy.png"
import '../App.css';
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";



const NavrBar = () => {
    const [userToken, setUserToken] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        getToken();
        return () => {

        };
    }, []);

    const getToken = () => {
        setUserToken(localStorage.getItem('token'));
    }

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="NavBarColor" variant="dark" fixed="top">
            <Container>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Platforms" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="link-nav-link" href="#about">About</Nav.Link>
                        <Nav.Link href="#pricing">Support</Nav.Link>
                    </Nav>
                    <Nav>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <BsSearch className="searchIcon"></BsSearch>
                        </Form>
                        <div>
                            {!userToken ? <Nav.Link className="signinBtn" href="/signin">Sign In</Nav.Link> :
                                <div className="welcomeUser"> Hello Avi Pinto
                                    <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                                </div>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavrBar;