import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.styles.css';
import { Link } from 'react-router-dom';
import UserContext from '../../providers/UserProvider/User.context';

function Navigation() {
  const userContext = useContext(UserContext);
  const [username, setusername] = useState('');
  const { userState, logIn } = useContext(UserContext);

  function authenticate(event) {
    event.preventDefault();
    logIn(username);
    console.log(userContext);
  }

  function onUsernameChange(event) {
    setusername(event.target.value);
  }

  const loginForm = (
    <form className="form-inline" onSubmit={authenticate}>
      <input
        className="form-control mr-sm-2 login-input"
        type="search"
        placeholder="username"
        aria-label="Search"
        value={username}
        onChange={onUsernameChange}
      />
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
        LogIn
      </button>
    </form>
  );

  const welcome = <Navbar.Brand>Welcome {userState.name}</Navbar.Brand>;
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home">Find Your video</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {userState.isAuth && (
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {!userState.isAuth ? loginForm : welcome}
    </Navbar>
  );
}

export default Navigation;
