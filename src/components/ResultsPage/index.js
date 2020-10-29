import React from 'react';
import { connect } from 'react-redux'

import GifList from '../GifList'
import { Link } from 'react-router-dom'
import Header from '../Header'

const ResultPage = props => {
    const avg_weirdness = Math.round((props.likedGifs.map(lg => lg.weirdness).reduce((a, b) => a + b, 0)) / 5);
    return (
        <React.Fragment>
            <Header />
            <section className="ResultPage component">
                <h4> You scored a
					<span className="ResultPage__avg-weirdness"> {avg_weirdness} </span>
					 out of 10 on the weirdness scale!
				</h4>
                <GifList title="The GIFs you liked" gifs={props.likedGifs} includeWeirdness={true} />
                <div className="ResultPage__start-over">
                    <Link to="/">
                        <button>
                            START OVER
						</button>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    )
}

const mapStateToProps = (state, props) => ({
    likedGifs: state.likedGifs
})

export default connect(mapStateToProps)(ResultPage)