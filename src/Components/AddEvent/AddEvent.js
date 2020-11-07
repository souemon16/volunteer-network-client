import React from 'react';
import './AddEvent.css';
import logo from '../../Images/logos/Logo.png';
import iconUser from '../../Images/logos/users-alt 1.png';
import iconAdd from '../../Images/logos/plus 1.png';
import {Link} from "react-router-dom";

const AddEvent = () => {

    const handleAddEvent = (e) => {
        const eventDetails = {
            taskName : document.getElementById('title').value,
            taskDate: document.getElementById('eventDate').value,
            taskImage: document.getElementById('banner').value
        }
        console.log(eventDetails);
         // Add Event to BackHend 
         fetch('https://volunteer-network-sourav.herokuapp.com/addEvent', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventDetails)
        })
        .then(res => res.json())
        .then(data => console.log("Event Added"))

        e.preventDefault();
    }
    return (
        <div id="addEvent-section">
            <div className="sideNav">
                <nav>
                    <div className="logo"><Link to='/'><img src={logo} alt="Logo" /></Link></div>
                    <div className="sideNav-links mt-5">
                    <Link to='/volunteer-list'><li><img className='icon' src={iconUser} alt="Icon" />Volunteer Register List</li></Link>
                    <Link to='/add-event'><li><img src={iconAdd} alt="Icon" className="icon" />Add Event</li></Link>
                    </div>
                </nav>
            </div>

            <div className="addEvent-main">
                <h1 className="main-title">Add Event</h1>
                <div className="addEvent-form md-form align-c form-group">
                    <label for="title">Event Title</label>
                    <input type="text" id="title" className="form-control form-inline" />
                    <br/>
                    <label for='eventDate'> Event Date</label>
                    <input type='date' id='eventDate' className="form-control  form-inline" />
                    <br/>
                    <label for="description"> Event Description</label>
                    <textarea class="form-control" rows="5" id="description"></textarea>
                    <br/>
                    <label for='banner'>Banner</label>
                    <br/>
                    <input type="file" name="" id="banner"/>
                    <br/>
                </div>
                <button onClick={handleAddEvent} className='btn btn-primary' style={{marginRight: '50px' , float: 'right'}} type="submit">Submit</button>
            </div>
        </div>
    );
};

export default AddEvent;