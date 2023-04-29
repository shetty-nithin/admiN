import "./DataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import { makeRequest } from "../../axios.js"


const DataTable = ({column}) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    
    
    let { data } = useFetch(`/v1/${path}`);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(data);
    }, [data]);

    const handleDelete = async (id) => {
        try {
            await makeRequest.delete(`/v1/${path}/${id}`);
            setList(list.filter(item => item._id !== id) );
        }
        catch (err) {
            console.log(err);
        }
    }   

    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to={`/${path}/${params.row._id}`} style={{textDecoration:"none"}}>
                        {path !== "bookings" && <div className="viewButton">View</div>}
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row._id)}>Delete</div>
                </div>
            )
        }}
    ]
    return (
        <div className="datatable">
            <div className="dataTableTitle">
                {path}
                {path !== "bookings" && <Link to={`/${path}/new`} className="link">
                    Add New
                </Link>}
            </div>
            <DataGrid
                className="datagrid"
                rows={list}
                columns={column.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    )
}

export default DataTable;