import React from 'react'
import Button from './Button';
import "./styles/current_query.css";

export default function CurrentQuery() {
    return (
        <div className="current_query">
            Current query
            <div id="current_query_box">
                GET ALL ROWS

            </div>
            <Button>SAVE</Button>
        </div>
    )
}
