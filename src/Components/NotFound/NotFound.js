import React from 'react';

const NotFound = () => {
    return (
        <div style={{marginTop: '100px',}} className='container'>
            <div className="jumbotron alert alert-primary jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">404 ERROR</h1>
                    <p className="lead">404 Error.... Page Not Found.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;