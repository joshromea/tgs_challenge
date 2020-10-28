import React from 'react'

import Button from 'react-bootstrap/Button'

const Gif = (props) => {
    const unLike = props.onUnlikeGif ? <Button close><span data-gif={JSON.stringify(props.gif)} onClick={e => props.onUnlikeGif(e)} aria-hidden="true">X</span></Button> : null
    return (
        <section className="Gif">
            <img width={props.width} height={props.width}
                src={props.gif.url} alt={props.gif.title} />
            {unLike}
        </section>
    )
}

export default Gif