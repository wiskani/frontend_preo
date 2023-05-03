import * as React from 'react'

import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext
} from 'react'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { PostUserArea } from '../api/UsersArea'
import { PostAspectArea} from '../api/AspectsArea.jsx'
import AppContext from "../context/AppContext";


const DataTable = (props) => {
  const data = useMemo(() => props.data, [props.data])
  const propsColumns = useMemo(() => props.columns, [props.columns])
  const initialSelectedRowIds = useMemo(() => props.initialSelectedRowIds);
  const { setOpenModal }= useContext(AppContext);

  const [rowSelection, setRowSelection] = useState(initialSelectedRowIds)
  const [relationship, setRelationship] = useState([])
  const [filterSelected, setFilterSelected] = useState(false);
  const [columnVisibility, setColumnVisibility] = React.useState({id:false})


  //Button for filter rows selected
  useEffect(() => {
      if (filterSelected) {
        table.getAllColumns().forEach((column) => {
          if (column.id === 'id') {
            console.log(column.id)
            column.setFilterValue('true');
          }
        });
      }
    else {
        table.getAllColumns().forEach((column) => {
          if (column.id === 'id') {
            column.setFilterValue('');
          }
        });
      }
    }, [ filterSelected]);

  const selectedRowFilter = useMemo(
    () => (rows, ids, filterValue) => {
      if (filterValue) {
        return rows.getIsSelected()
      }
      return rows;
    },
    []
  );
  
  // Columns 
  const columns = useMemo(() => [
    {
      id: 'id',
      header: 'Id',
      filterFn: "selectedRowFilter",
    },
    ...propsColumns
  ], [])
  

  /* Filter */
  const Filter = useCallback(({column}) => {
    return(
      <input
      type="text"
      value={(column.getFilterValue() || '') }
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Buscar..`}
    />
    )
    
  }, [])
  


  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      columnVisibility,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    filterFns:{
      selectedRowFilter: selectedRowFilter
    }
  })
  
  /* For post new relationship of users and sector*/
  useEffect(() => {
    setRelationship((table.getSelectedRowModel().flatRows).map(d=> d.original.id))
  }, [rowSelection])
  
  const makeRelationship = ()=>{
    if (props.type==='personalArea'){
      PostUserArea(props.id, props.token, relationship)
    }
    if (props.type==='aspectoArea'){
      PostAspectArea(props.id, props.token, relationship)
    }
    setOpenModal(false)
  }

  
  return (
    <div >
      <div>
      <button
         className="button-confirm"
         onClick={()=>{
          makeRelationship()
         }}
      >
          Guardar
        </button>
       <button
         onClick={() => setFilterSelected(!filterSelected)}
       >
         {filterSelected? "Mostar todo": "Mostrar seleccionados"}
       </button>
      </div>
      <div style={{ maxHeight: "650px", overflow: "auto" }} >
      <table className="styled-table-user" >
        <thead  style={{ position: "sticky", top: 0, backgroundColor: "#ffffff" }}>
          {table.getHeaderGroups().map(headerGroup => (
             <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody  style={{ height: "250px", overflowY: "auto" }}>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })
          }
        </tbody>
      </table>
      </div>
      </div>
  )
}

export default DataTable


