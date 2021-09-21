import React from 'react'
import "./styles/saved_queries.css";

export default function SavedQueries() {
    return (
        <div>
           <div className="subhead">Saved Queries</div> 
            <div className="sidecontainer">
                <div>SELECT * FROM Pets</div>
                <hr></hr>
                <div>DELETE FROM Offices WHERE OfficeName = 'Alfreds';</div>
                <hr></hr>

                <div>CLEAR ALL TABLES</div>
            </div>
        </div>

    )
}
