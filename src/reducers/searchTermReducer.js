import { UPDATE_SEARCH_TERM } from '../actions/searchTermActions'

const searchTermReducer = (state = "", { type, payload }) => {
    switch (type) {
        case UPDATE_SEARCH_TERM:
            return payload.searchTerm;
        default:
            return state;
    }
}

export default searchTermReducer