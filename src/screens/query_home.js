import React from 'react'
import ChartBuilder from '../components/chart_builder'
import CurrentQuery from '../components/current_query'
import QueryIn from '../components/Query_in'
import SavedQueries from '../components/Saved_queries'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'

import TableView from '../components/table_view'

import "./styles/query_home.css"
import QueryHeading from '../components/query_heading'
import TableList from '../components/table_list'

export default function QueryHome() {
    return (
        <div id="query_home">
            {/* Query Home */}

            <div id="side">
            <Sidebar>
                <TableList/>
                <CurrentQuery/>
                <SavedQueries/>
                <ChartBuilder/>
                <div className="margin">
                <Button>SHOW CHART</Button>
                </div>
                <div className="">
                <Button>DOWNLOAD DATA</Button>
                </div>
            </Sidebar>
            </div>
            <div id="main">
            <QueryHeading>SampleDB</QueryHeading>
            <QueryIn/>
            <TableView/>
            </div>

        </div>
    )
}
