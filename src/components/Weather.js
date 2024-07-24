import React from 'react';

const Weather = ({ temperature, condition }) => {
    return (
        <div className="weather">
            <span>{condition}</span>
            <span>{temperature}</span>
        </div>
    );
};

export default Weather;
