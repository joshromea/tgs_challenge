import { updateSearchRes } from './searchResActions'
export const UPDATE_SEARCH_TERM = 'searchTerm:UpdateSearchTerm'

const API_KEY = "A5htrbuOVfoZSAmfRZLthIB2ymwt7EcZ"


export const updateSearchTerm = (newSearchTerm) => {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: {
            searchTerm: newSearchTerm
        }
    }
}


export const apiRequest = cb => {
    return (dispatch, getState) => {
        const { searchTerm, weirdness } = getState()
        fetch(`http://api.giphy.com/v1/gifs/translate?s=${searchTerm}&weirdness=${weirdness}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(({ data, meta }) => {
                dispatch(updateSearchRes(data, meta, weirdness))
                cb()
            })
    }
}