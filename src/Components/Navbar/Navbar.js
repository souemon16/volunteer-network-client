import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../Images/logos/Logo.png';
import {Link} from "react-router-dom";
import { userContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";


const Navbar = () => {
    const [user, setUser] = useContext(userContext);

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then(function() {
            const signOutUser = {
                isSignedIn: false,
                userName : '',
                userEmail: '',
            }
            setUser(signOutUser);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <nav className="navbar">
            <div className="logo">
            <Link to='/'><img src={logo} alt="Logo"/></Link>
            </div>
            <ul>
                <Link to='/'><li><a href="#">Home</a></li></Link>
                <li><a href="#">Donation</a></li>
                <Link to='/event-task'><li><a href="#">Events</a></li></Link>
                <li><a href="#">Blogs</a></li>
    {user.isSignedIn ? 
    <div style={{display: 'flex'}}>
        <p style={{fontWeight: 'bold', fontSize: '16px', lineHeight: '20px', fontStyle: 'normal', display: 'flex', marginTop: '15px'}}>{user.userName}</p>
        <li><button onClick={() => handleLogOut()} className='btn btn-danger nav-btn'>Log Out</button></li>
        </div> : 
    <div style={{display: 'flex'}}>
    <Link to='/registration'><li><button className='btn btn-primary nav-btn'>Register</button></li></Link>
            <Link to='/volunteer-list'><li><button className='btn btn-dark nav-btn'>Admin</button></li></Link>
    </div> }
            </ul>
        </nav>
    );
};

export default Navbar;