import React from 'react'

export default function ChartBuilder() {
    return (
        <div>
            Chart Builder
            <div>
                
                <label for="type">Select Chart Type</label><br></br>
                    <select name="type" id="type">
                        <option value="Bar">Bar</option>
                        <option value="Scatter">Scatter</option>
                        <option value="Pie">Pie</option>
                    
                    </select>
                    <br></br>
                Select X-axis                    <select name="type" id="type">
                        <option value="Bar">Bar</option>
                        <option value="Scatter">Scatter</option>
                        <option value="Pie">Pie</option>
                    
                    </select>
                    <br></br>
                Select Y-axis                     <select name="type" id="type">
                        <option value="Bar">Bar</option>
                        <option value="Scatter">Scatter</option>
                        <option value="Pie">Pie</option>
                    
                    </select>
                    <br></br>
            </div>
        </div>
    )
}
