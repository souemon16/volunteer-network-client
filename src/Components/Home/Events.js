import React, { useContext } from 'react';
import './Event.css';
import {Link, useHistory} from "react-router-dom";
import { taskContext } from '../../App';


const Events = (props) => {
    const [task, setTask] = useContext(taskContext);

    const { id, eventName, eventImage } = props.events;

    const History = useHistory();
    const handleEvent = () => {
        History.push(`/registration`)
    }
    return (
        <Link onClick={() => {
            handleEvent();
            setTask({taskId: id, taskName: eventName, taskImage: eventImage})
            }}>
            <div className="container-fluid events">
            <div className="card event-card">
                <img className="card-img-top" src={eventImage} alt="Card Image" />
                <div className="card-body event-title" id='ranCol'>
                    <h4>{eventName}</h4>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Events;