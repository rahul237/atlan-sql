import React from 'react'

import "./styles/table_tile.css";

export default function Table_tile(props) {
    return (
        <div className="table_tile">
            {props.name}
        </div>
    )
}
