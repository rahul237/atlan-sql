import React from 'react'
import Button from './Button';
import "./styles/current_query.css";

export default function CurrentQuery() {
    return (
        <div className="margin">
        <div className="subhead">
            Current query
        </div>

            <div className="sidecontainer">
            SELECT * FROM People
            </div>
            <Button>SAVE CURRENT QUERY</Button>
        </div>
    )
}
