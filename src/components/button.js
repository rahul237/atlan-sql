import React from 'react'
import "./styles/button.css"

export default function Button(props) {
    return (
            <button className="button">
                {props.children}
            </button>
    )
}
