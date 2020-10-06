import React, { useContext } from 'react';
import './Home.css';
import Events from './Events';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import { eventContext } from '../../App';




const Home = () => {

    const [event, setEvent] = useContext(eventContext);

    useEffect(() => {
        fetch('https://powerful-fjord-39055.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <main id="main">
            <Navbar/>
            <div className="search">
                <h1 className='main-title'>I Grow By Helping people in need</h1>
                <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="my-0 py-1 blue-border search-input" type="text" placeholder="Search..." aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-search">Search</button>
                    </div>
                </div>
            </div>

            <div>
            {
                event.map(events => <Events  events={events}></Events>)
            }
            </div>
        </main>
    );
};

export default Home;