import React from 'react'
import DbTile from '../components/db_tile'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import QueryHome from './query_home';
import TableView from '../components/table_view';



export default function SelectDb() {
    return (
        <Router>

           
            <Switch>
                <Route exact path="/">
                Select Database
            <Link  to="query" >
            <div>
                <DbTile>People</DbTile>
                <DbTile>Cars</DbTile>
                <DbTile>Toys</DbTile>
                <DbTile>Clothes</DbTile>
                <DbTile>Pets</DbTile>


            </div>
            </Link>
                </Route>
                <Route exact path="/viewtables">
                    <TableView></TableView>
                </Route>
                <Route exact path="/query">
                    <QueryHome />
                </Route>
        </Switch>
        

        </Router>
    )
}
