import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className='Title'>
            <h1>
                {props.title || 'Default Title'}
            </h1>
        </div>
    );
};

export default Title;