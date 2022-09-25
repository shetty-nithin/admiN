import "./ListPage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from  "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";

const ListPage = ({columnValue, rowValue, createNew}) => {
    return (
        <div className="listPage">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DataTable column={columnValue} row={rowValue} createNew={createNew}/>
            </div>
        </div>
    )
}

export default ListPage;