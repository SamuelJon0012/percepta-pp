import {actions} from '../types/actions'

const addToFavouites = (data) => ({
    type: actions.ADD_MOVIES,
    payload: data
})


export const MovieActions = {
    addToFavouites
}
