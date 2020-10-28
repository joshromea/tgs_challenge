import { UPDATE_WEIRDNESS } from '../actions/weirdnessActions'

const weirdnessReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case UPDATE_WEIRDNESS:
            return parseInt(payload.weirdness);
        default:
            return state;
    }
}

export default weirdnessReducer