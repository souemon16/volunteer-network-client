import React, { useContext, useEffect, useState } from 'react';
import { eventContext, taskContext, userContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './EventTask.css';

const EventTask = () => {
        const [volunteerTask, setVolunteerTask] = useState([]);
        const [event, setEvent] = useContext(eventContext);
        const [user, setUser] = useContext(userContext);
        const [task, setTask] = useContext(taskContext);

        console.log(user);
        useEffect(() => {
            fetch('https://volunteer-network-sourav.herokuapp.com/FilteredVolunteerList?email='+task.volunteerEmail)
            .then(res => res.json())
            .then(data => setVolunteerTask(data))
        }, [])

        const handleDelete = (id) => { 
                fetch(`https://volunteer-network-sourav.herokuapp.com/delete/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(result => {
                    console.log("result")
                })
                console.log(id);
        } 
    return (
        <>
        <Navbar/>
        <div className="container" id="eventTask-section">
            {
            volunteerTask.map((task)=> 
            <div className="event" id={task.taskId}>
                <div className="event-img"><img src={task.taskImage} alt="eventImage"/></div>
                <div className="event-detail">
                    <h4>{task.taskName}</h4>
                    <p>{task.taskDate}</p>
                    <button onClick={() => handleDelete(`${task._id}`)} className="btn btn-outline-danger">Cancel</button>
                </div>
            </div>
            )
        }
        </div>
        </>
    );
};

export default EventTask;