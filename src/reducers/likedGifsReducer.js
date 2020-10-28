import { LIKE_GIF, UNLIKE_GIF } from '../actions/likedGifsActions'

const likedGifsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case LIKE_GIF:
            return [
                ...state,
                {
                    id: payload.gif.id,
                    title: payload.gif.title,
                    url: payload.gif.url,
                    weirdness: payload.gif.weirdness
                }
            ];
        case UNLIKE_GIF:
            const ids = state.map(p => p.id);
            const index = ids.indexOf(payload.gif.id);
            return [...state.slice(0, index), ...state.slice(index + 1)]
        default:
            return state;
    }
}

export default likedGifsReducer  