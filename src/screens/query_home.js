import React from 'react'
import ChartBuilder from '../components/chart_builder'
import CurrentQuery from '../components/current_query'
import QueryIn from '../components/Query_in'
import SavedQueries from '../components/Saved_queries'
import Sidebar from '../components/Sidebar'
import TableView from '../components/table_view'

import "./styles/query_home.css"

export default function QueryHome() {
    return (
        <div>
            {/* Query Home */}

            <div id="side">
            <Sidebar>
                <CurrentQuery/>
                <SavedQueries/>
                <ChartBuilder/>
            </Sidebar>
            </div>
            <div id="main">
            <QueryIn/>
            <TableView/>
            </div>

        </div>
    )
}
