import React from 'react'
import "./styles/db_tile.css";

export default function Db_tile(props) {
    return (
        <div className="dbTile">
            {props.name}
        </div>
    )
}
