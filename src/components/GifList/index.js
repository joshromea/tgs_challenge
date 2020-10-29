import React from 'react'

import Gif from '../Gif'

const GifList = props => {
    const gifs = () => {
        return props.gifs.map(gif => {
            return (
                <li key={gif.id}>
                    <h5>{gif.title}</h5>
                    <Gif onUnlikeGif={props.onUnlikeGif} height="250" width="250" gif={gif} />
                    {props.includeWeirdness ? <div className="GifList__weirdness">{gif.weirdness}/10</div> : ""}
                </li>
            )
        })
    }
    return (
        <section className="GifList component">
            <ul>
                {gifs()}
            </ul>
        </section>
    )
}

export default GifList 
