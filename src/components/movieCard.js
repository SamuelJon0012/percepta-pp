import { useDispatch } from 'react-redux';
import { MovieActions } from '../redux/actions/movie.actions'

export const MovieCard = (props) => {
    
    const dispatch = useDispatch()

    const handleAdd = () => {

        dispatch(MovieActions.addToFavouites(props.movie))
    }

    return <div>        
        <div>{props.movie.Title}</div>
        {props.isFavourite ? <button>Remove From Favourites</button> : <button onClick={handleAdd}>Add to Favourites</button>}
    </div>
}
