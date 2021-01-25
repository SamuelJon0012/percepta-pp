import {MovieCard} from './movieCard';

const Content = (props) => {
    console.log('Movies in content', props.movies)
    return <div className="movieList">
        {
            props.movies.map((movie, index) => (
                <MovieCard movie={movie} isFavourite={props.isFavourite} key={index}/>
            ))
        }
    </div>
}

export default Content;