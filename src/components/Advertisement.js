import React from 'react';

const Advertisement = ({ image, link }) => {
    return (
        <div className="advertisement">
            <a href={link}>
                <img src={image || 'https://via.placeholder.com/728x90'} alt="ad-banner" />
            </a>
        </div>
    );
};

export default Advertisement;
