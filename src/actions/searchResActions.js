export const UPDATE_SEARCH_RESULT = "searchResult:updateSearchResult";
export const CLEAR_SEARCH_RESULT = "searchResult:clearSearchResult";

export const updateSearchRes = (data, meta, weirdness) => {
    return {
        type: UPDATE_SEARCH_RESULT,
        payload: {
            searchRes: {
                id: data.id,
                title: data.title,
                url: data.images ? data.images.downsized_medium.url : undefined,
                weirdness: weirdness,
                meta: meta
            }
        }
    }
}

export const clearSearchRes = () => {
    return {
        type: UPDATE_SEARCH_RESULT,
        payload: {
            searchRes: {}
        }
    }
}