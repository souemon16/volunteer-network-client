import React, { useContext } from 'react';
import './RegisterVolunteer.css';
import logo from '../../Images/logos/Logo.png';
import {Link, useHistory} from "react-router-dom";
import { eventContext, taskContext, userContext } from '../../App';

const RegisterVolunteer = () => {
    const [event, setEvent] = useContext(eventContext);
    const [user, setUser] = useContext(userContext);
    const [task, setTask] = useContext(taskContext);

    const History = useHistory();
    const handleSubmit = (e) => {
        History.push(`/event-task`)
        const volunteerDetails = {
            volunteerName : document.getElementsByTagName("input")[0].value,
            volunteerEmail: document.getElementsByTagName("input")[1].value,
            taskName: document.getElementsByTagName("input")[4].value,
            taskDate: document.getElementsByTagName("input")[2].value
        }
        const newVolunteer = {...task, ...volunteerDetails};
        setTask(newVolunteer);
        e.preventDefault();

        // Send Data to BackHend 
        fetch('http://localhost:5000/addVolunteer', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => console.log("post submitted"))
    }
    return (
        <div id='register-section'>
            <div><Link to='/'><img className='logo' src={logo} alt="Logo" /></Link></div>

            <div className="register-form">
                <h2 className='mb-4'>Register as a Volunteer</h2>
                <div class="md-form align-c">
                    <form onSubmit=''>
                    <input type="text" class="form-control form-style" required placeholder="Full Name" value={user.userName} />
                    <input type="text" class="form-control form-style" required placeholder="Username or Email" value={user.userEmail} />
                    <input type="Date" class="form-control form-style" required placeholder="Date" />
                    <input type="text" class="form-control form-style" required placeholder="Description" />
                    <input type="text" class="form-control form-style" required placeholder="Event Name" value={task.taskName} />
                    <button onClick={handleSubmit} className='btn btn-block btn-primary' type="submit">Registration</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;