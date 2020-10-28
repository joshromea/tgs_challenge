export const LIKE_GIF = 'likedGifs:likeGif'
export const UNLIKE_GIF = 'likedGifs:unlikeGif'

export const likeGif = gif => {
    return {
        type: LIKE_GIF,
        payload: {
            gif: gif
        }
    }
}

export const unlikeGif = gif => {
    return {
        type: UNLIKE_GIF,
        payload: {
            gif: gif
        }
    }
}