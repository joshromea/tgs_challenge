import React from 'react'
import Gif from '../Gif'
import Spinner from 'react-bootstrap/Spinner'

export default function SearchRes(props) {
    const renderResultOrError = () => {
        if (props.searchResult.meta && props.searchResult.meta.status == 200) {
            return (
                <Gif width="250" height="250" gif={props.searchResult} />
            );
        } else if (props.searchResult.meta && props.searchResult.meta.status != 200) {
            return (
                <p>There was an error processing your request. The error message is: {props.searchResult.meta.status} {props.searchResult.meta.msg} </p>
            );
        } else {
            const display = props.loadingIndicatorRunning ? <Spinner className="spinner" color="primary" /> : <p>Please enter a search term in the box above and click Search to find a GIF.</p>
            return (
                <React.Fragment>
                    {display}
                </React.Fragment>
            )
        }
    }

    return (
        <section className="SearchResult component">
            <h4 className="component-title">YOUR RESULT</h4>
            <div className="SearchResult__image">
                <h5>{props.searchResult.title}</h5>
                <div className="SearchResult__image__wrapper">
                    {renderResultOrError()}
                </div>
            </div>
            <div className="SearchResult__likeGif">
                <button ref={props.likeGifButton} data-gif={JSON.stringify(props.searchResult)}
                    onClick={e => props.onLikeGif(e)}>LIKE GIF</button>
            </div>
            <div className="SearchResult__weirdness">
                <input type="range" defaultValue="0"
                    onChange={e => props.onUpdateWeirdness(e)}
                    name="weirdness" min="0" max="10" />
                <label htmlFor="weirdness">Weirdness</label>: {props.weirdness}
            </div>
        </section>
    )
}