import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Content from '../components/content';
import { useSelector } from 'react-redux';

const Home = () => {
    const [searchKey, setSearchKey] = useState('');
    const [movies, setMovies] = useState([]);

    const favourites = useSelector(state => state.movieReducer.favourites)

    useEffect(async() => {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchKey}&apikey=de2b2b5d`);
        const jsonResponse = await response.json();

        console.log('jsonRsponse ', jsonResponse)
        if (jsonResponse.Search) {
            setMovies(jsonResponse.Search);
        }

    }, [searchKey])

    console.log('Movies ', movies)
    return <div>
        <Header value={searchKey} handleChange={(e) => setSearchKey(e.target.value)}/>
        <Content movies={movies} isFavourite={false}/>
        <Content movies={favourites} isFavourite={true}/>
    </div>
}

export default Home;