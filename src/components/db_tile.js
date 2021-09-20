import React from 'react'
import "./styles/db_tile.css";

export default function DbTile(props) {
    return (
        <div className="dbTile">
            {props.name}
        </div>
    )
}
