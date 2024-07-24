import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
    return (
        <div className="news-list">
            {news.map((item, index) => (
                <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
            ))}
        </div>
    );
};

export default NewsList;
