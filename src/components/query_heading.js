import React from 'react'
import "./styles/query_heading.css";

export default function QueryHeading(props) {
    return (
        <div id="query_heading">
            <h1>
            {props.children}
            </h1>
        </div>
    )
}
