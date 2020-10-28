import React from 'react'

import Tooltip from 'react-bootstrap/Tooltip'

const Search = (props) => {
    return (
        <section className="Search component">
            <div>
                <p>
                    Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.
                </p>
                <p>
                    When you find a GIF you like, press the <i>Like</i> button. Once you like 5 GIFs, we'll show you how weird you are.
                </p>
            </div>
            <form id="searchForm" onSubmit={e => props.handleSearchTermSubmit(e)}>
                <label htmlFor="searchTerm">Search term</label>
                <input id="TooltipExample" ref={props.searchInput} type="text" name="searchTerm" onChange={e => props.handleSearchTermChange(e)} />
                <button ref={props.searchButton} type="submit">SEARCH</button>
                <Tooltip placement="bottom" trigger={"focus"} isOpen={props.toolTipOpen} target="TooltipExample">
                    Try another search term!
            </Tooltip>
            </form>
        </section>
    )
}

export default Search