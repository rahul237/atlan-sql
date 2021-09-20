import React from 'react'
import "./styles/sidebar.css"

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            {props.children}

        </div>
    )
}
