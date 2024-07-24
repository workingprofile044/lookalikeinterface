import React from 'react';

const NewsItem = ({ icon, text, link }) => {
    return (
        <div className="news-item">
            <img src={icon || 'https://via.placeholder.com/40'} alt="news-icon" />
            <a href={link}>{text}</a>
        </div>
    );
};

export default NewsItem;
