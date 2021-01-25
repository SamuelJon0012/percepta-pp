import {actions as MovieActions} from '../../types/actions'

const initialState = {
    movies: [],
    favourites: [],
    load: false
}

export const movieReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case MovieActions.ADD_MOVIES:
            console.log('Adding To Favourites')
            const addMovies = [...state.favourites, actions.payload]
            const favourites = Array.from(new Set(addMovies.map(movie => movie.imdbID))).map((id) => addMovies.find((item) => item.imdbID === id))
            return {
                ...state, 
                favourites
            }
        default:
            return state;
    }
}