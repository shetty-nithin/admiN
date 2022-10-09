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

    const { data } = useFetch(`/v1/${path}/${id}`);
    const hotel = useFetch(`/v1/hotels/find/${data.hotelId}`);

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
                            <div className="details">
                                <h1 className="itemTitle">Rooms :</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Hotel : </span>
                                    <span className="itemValue">{hotel.data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Title : </span>
                                    <span className="itemValue">{data.title}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Max People : </span>
                                    <span className="itemValue">{data.maxPeople}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Price : </span>
                                    <span className="itemValue">{data.price}</span>
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