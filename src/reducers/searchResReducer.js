import { UPDATE_SEARCH_RESULT } from '../actions/searchResActions'

const searchResReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_SEARCH_RESULT:
            return payload.searchRes;
        default:
            return state;
    }
}

export default searchResReducer