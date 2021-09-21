import React from 'react'
import "./styles/chart_builder.css"

export default function ChartBuilder() {
    return (
        <div>
            Chart Builder
            <div id="chart_builder">
                
                <label for="type">Select Chart Type</label><br></br>
                    <select name="type" id="type">
                        <option value="Bar">Bar</option>
                        <option value="Scatter">Scatter</option>
                        <option value="Pie">Pie</option>
                    
                    </select>
                    <br></br>
                Select X-axis                    <select name="type" id="type">
                        <option value="Age">Age</option>
                        <option value="Scatter">Profile Progress</option>
                        <option value="Pie">Status</option>
                    
                    </select>
                    <br></br>
                Select Y-axis                     <select name="type" id="type">
                        <option value="Profile Progress">Profile Progress</option>
                        <option value="Scatter">Age</option>
                        <option value="Pie">Status</option>
                    
                    </select>
                    <br></br>
            </div>
        </div>
    )
}
