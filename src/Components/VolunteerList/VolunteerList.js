import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import logo from '../../Images/logos/Logo.png';
import iconUser from '../../Images/logos/users-alt 1.png';
import iconAdd from '../../Images/logos/plus 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const VolunteerList = () => {
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/volunteerList`)
        .then(res => res.json())
        .then(data => setVolunteerList(data))
    }, [])
    return (
        <div id='volunteerList-section'>
            <div className="sideNav">
            <nav>
                <div className="logo"><Link to='/'><img src={logo} alt="Logo" /></Link></div>
                <div className="sideNav-links mt-5">
                    <Link to='/volunteer-list'><li><img className='icon' src={iconUser} alt="Icon" />Volunteer Register List</li></Link>
                    <Link to='/add-event'><li><img src={iconAdd} alt="Icon" className="icon" />Add Event</li></Link>
                </div>
            </nav>
            </div>

            <div className="list-main">
                <h1 className="main-title">Volunteer Register List</h1>
                <table className="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Event List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                   {
                       volunteerList.map((volunteer) => 
                       <tbody>
                       <tr>
                           <th scope="row">{volunteer.volunteerName}</th>
                           <td>{volunteer.volunteerEmail}</td>
                           <td>{volunteer.taskDate}</td>
                           <td>{volunteer.taskName}</td>
                           <td><button className="btn btn-danger dlt"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                       </tr>
                   </tbody>
                       )
                   }
                </table>
            </div>
        </div>
    );
};

export default VolunteerList;