import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableView from './components/table_view.js';
import Button from "./components/Button";
import Db_tile from "./components/db_tile";

import { useTable } from 'react-table';
import Query_in from './components/Query_in';
import Saved_queries from './components/Saved_queries';
import Sidebar from './components/Sidebar';
import Table_tile from './components/Table_tile';
import Current_query from './components/current_query';
import Select_db from './screens/select_db';
import View_tables from './screens/view_tables';
import Query_home from './screens/query_home';
import Chart_builder from './components/chart_builder';
import ChartView from './components/chart_view';

function App() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'This',
        col2: 'shit',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    ef
    {/* <TableView/>
    <Button></Button>
    <Db_tile/>
    <Query_in></Query_in>
    <Saved_queries/>
    <Sidebar/>
    <Table_tile/>
    <Current_query/> */}

    {/* <Select_db/> */}
    {/* <View_tables/> */}
    {/* <Query_home/> */}
    {/* <Chart_builder/> */}
    <ChartView/>

    </>
    
  )
}

export default App;
