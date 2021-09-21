import React from 'react'
import Button from './Button'

import "./styles/query_in.css";

export default function QueryIn() {
    return (
        <div className="query_container">
            <input className="query_field"></input>
            <div id="button_container">
            <Button>Submit</Button>
            </div>
        </div>
    )
}
