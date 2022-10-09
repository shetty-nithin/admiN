import "./HomePage.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from  "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";


const HomePage = () => {
    return (
        <div className="homePage">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="users"/>
                    <Widget type="hotels"/>
                    <Widget type="rooms"/>
                    <Widget type="bookings"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart aspect={2/1} title="Last 6 months Revenue"/>
                </div>
                {/* <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table/>
                </div> */}
            </div>
        </div>
    )
}

export default HomePage;