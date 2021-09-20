import React from 'react'
import Button from './Button'

import "./styles/query_in.css";

export default function QueryIn() {
    return (
        <div className="query_container">
            <input className="query_field"></input>
            <Button>Submit</Button>
        </div>
    )
}
