import React from 'react'
import "./Button.css"
const Button = ({text}) => {
    return (
        <button className="btn-style">
            {text}
        </button>
    )
}

export default Button
