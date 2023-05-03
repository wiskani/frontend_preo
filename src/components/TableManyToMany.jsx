import * as React from 'react'

import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useContext
} from 'react'

import { GetUsersArea } from '../api/UsersArea.jsx';
import { GetAspectsArea } from '../api/AspectsArea.jsx';
import "../styles/ModalUsersSector.scss"

import {AdminContext} from "../context/AdminContext.js";

import DataTable from './DataTable.jsx';

function TableManyToMany(props){
  const [token] = useContext(AdminContext);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  /* API connector to get data users of sector*/
  useEffect(() => {
    if (props.type==='personalArea'){
      GetUsersArea(props.id, token).then(val=>{
        setData(val)
        setLoading(false)
    })
    }
    if (props.type==='aspectoArea'){
      GetAspectsArea(props.id, token).then(val=>{
        setData(val)
        setLoading(false)
    })
    }
  }, [loading])


  // Make columns
  // columa case UsersArea
  const columnsUserArea = [
    {
      accessorKey: 'users_name',
      header: 'Nombre',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'users_role',
      header: 'Puesto',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'users_department',
      header: 'Centro',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'users_center',
      header: 'Gerencia',
      footer: props => props.column.id,
    },

  ]

  //column case AspectArea
  const columnsAspectArea = [
    {
      accessorKey: 'aspect_name',
      header: 'Aspecto',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'aspect_description',
      header: 'Descripción',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'impacts',
      header: 'Impactos',
      footer: props => props.column.id,
    },
    {
      accessorKey: 'aspectsgroups_id',
      header: 'Grupo',
      footer: props => props.column.id,
    },

  ]


  const columns =useMemo( () => [
    {
      id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
    },
    ...(props.type === 'personalArea' ? columnsUserArea : []),
    ...(props.type === 'aspectoArea' ? columnsAspectArea : []),
  ],[])

  //Make Checkbox
  function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
  }) {
    const ref = useRef()
    
    useEffect(() => {
      if (typeof indeterminate === 'boolean') {
        ref.current.indeterminate = !rest.checked && indeterminate
      }
    }, [ref, indeterminate])

    return (
      <input
        type="checkbox"
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
    )
  }

  /* For get initial selected users for the sector*/
  const initialSelectedRowIds =useMemo( () => {
    let initialList={}

    for (let i = 0; i < data.length; i++) {
      let user = data[i];
      let matchingSector = user.sectors.some(sector => sector.id === props.id);

      initialList[i]=matchingSector
    }
    return initialList
    
  },[loading])

  return (
    <>
      {!loading ? <DataTable data={data} columns={columns} initialSelectedRowIds={initialSelectedRowIds} id={props.id} token={token} type={props.type}/> :  <div><p>cargando</p></div>  }
    </>
      )
}

export default TableManyToMany
