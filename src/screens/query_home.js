import React from 'react'
import Button from '../components/Button'
import Chart_builder from '../components/chart_builder'
import Current_query from '../components/current_query'
import Query_in from '../components/Query_in'
import Saved_queries from '../components/Saved_queries'
import Sidebar from '../components/Sidebar'
import TableView from '../components/table_view'

export default function Query_home() {
    return (
        <div>
            Query Home
            <Query_in/>
            <Button/>
            <TableView/>
            <Sidebar>
                <Current_query/>
                <Saved_queries/>
                <Chart_builder/>
            </Sidebar>
        </div>
    )
}
