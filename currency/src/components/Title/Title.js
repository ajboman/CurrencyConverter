import React from 'react'

const Title = (props) => {
    return (
        <div>
            <h1>
                {props.title || 'Default Title'}
            </h1>
        </div>
    )
}

export default Title;