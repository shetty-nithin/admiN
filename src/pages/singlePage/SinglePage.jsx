import "./SinglePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const SinglePage = () => {
    return (
        <div className="singlePage">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Phone : </span>
                                    <span className="itemValue">+91 0000000000</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address : </span>
                                    <span className="itemValue">Bengalure, Karnataka, India - 560024</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Contry : </span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="User Transactions (last 6 months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;