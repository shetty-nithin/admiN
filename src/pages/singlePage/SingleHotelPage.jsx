import "./SinglePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const SinglePage = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[2];

    const { data } = useFetch(`/v1/${path}/find/${id}`);

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
                            <img src={data.photos} alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">{data.name}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Type : </span>
                                    <span className="itemValue">{data.type}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">City : </span>
                                    <span className="itemValue">{data.city}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address : </span>
                                    <span className="itemValue">{data.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="User Transactions (last 6 months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Booking hitstory</h1>
                    <Table value={data.bookings}/>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;