import React from 'react';
import Header from './Header';

const Welcome = () => {
    return (
        <div>
            <Header />
            <p>You must be logged in to add a goal.</p>
        </div>
    );
};

export default Welcome;
