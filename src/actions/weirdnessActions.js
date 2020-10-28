export const UPDATE_WEIRDNESS = 'weirdness:updateWeirdness'

export const updateWeirdness = newWeirdness => {
    return {
        type: UPDATE_WEIRDNESS,
        payload: {
            weirdness: newWeirdness
        }
    }
}