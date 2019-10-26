import './Button.scss';
import React from 'react';

// function Button(props) {
//     return `<button id="${props.id}" class="btn ${props.class}">${props.text}</button>`;
// }

function Button(props) {
    console.log(props);
    return (
        <button className={`btn btn--${props.type}`}>
            {props.children}
        </button>
    );
}

export default Button;