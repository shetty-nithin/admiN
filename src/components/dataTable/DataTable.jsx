import "./DataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


const DataTable = ({column, row, createNew}) => {
    const [data, setData] = useState(row);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }   

    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ]
    
    return (
        <div className="datatable">
            <div className="dataTableTitle">
                Add New {createNew}
                <Link to={createNew === "user" ? "/users/new" : "/products/new"} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={column.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable;