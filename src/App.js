import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import Weather from './components/Weather';
import Advertisement from './components/Advertisement';
import Footer from './components/Footer';

const App = () => {
    const news = [
        { icon: 'https://via.placeholder.com/40', text: 'News 1', link: '#' },
        { icon: 'https://via.placeholder.com/40', text: 'News 2', link: '#' },
        { icon: 'https://via.placeholder.com/40', text: 'News 3', link: '#' },
    ];

    return (
        <div className="App">
            <Header />
            <SearchBar />
            <Advertisement image="https://via.placeholder.com/728x90" link="#" />
            <NewsList news={news} />
            <Weather temperature="+17°C" condition="Sunny" />
            <Footer />
        </div>
    );
};

export default App;
