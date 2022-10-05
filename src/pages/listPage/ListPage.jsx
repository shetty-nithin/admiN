import "./ListPage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from  "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";

const ListPage = ({columnValue}) => {
    return (
        <div className="listPage">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DataTable column={columnValue}/>
            </div>
        </div>
    )
}

export default ListPage;