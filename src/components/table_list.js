import React from 'react'
import "./styles/current_query.css";
import "./styles/common.css";


export default function TableList() {
    return (
        <div className="current_query margin">
            <div className="subhead">Tables in SampleDB</div>
            <div className="sidecontainer">
                <div className="selected">People</div>
                <div>Cars</div>
                <div>Pets</div>
                <div>Offices</div>
                <div>Restaurants</div>
                <div>Parks</div>

            </div>
        </div>
    )
}
