import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HotelIcon from '@mui/icons-material/Hotel';
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Widget = ({type}) => {
    const navigate = useNavigate();

    const [count, setCount] = useState([]);
    const { data } = useFetch(`/v1/${type}`);

    useEffect(() => {
        setCount(data);
    }, [data]);


    let widgetData;
    const percentage = 20;
    
    switch(type){
        case "users" : 
        widgetData = {
                title : "USERS",
                isMoney : false,
                link : "view all users",
                icon : (
                    <PersonOutlinedIcon className="icon" style={{color : "crimson", backgroundColor : "rgba(255, 0, 0, 0.2)"}}/>
                )
            }
            break;
        
        case "hotels" : 
        widgetData = {
            title : "HOTELS",
            isMoney : false,
            link : "view all orders",
            icon : (
                <ApartmentIcon className="icon" style={{color : "purple", backgroundColor : "rgba(128, 0, 128, 0.2)"}}/>
            )
        }
        break;

        case "rooms" : 
        widgetData = {
            title : "ROOMS",
            isMoney : true,
            link : "view all rooms",
            icon : (
                <HotelIcon className="icon" style={{color : "green", backgroundColor : "rgba(0, 128, 0, 0.2)"}}/>
            )
        }
        break;

        case "bookings" : 
        widgetData = {
            title : "BOOKINGS",
            isMoney : true,
            link : "view all booking",
            icon : (
                <ShoppingCartOutlinedIcon className="icon" style={{color : "goldenrod", backgroundColor : "rgba(218, 165, 32, 0.2)"}}/>
            )
        }
        break;

        default : 
                break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{widgetData.title}</span>
                <span className="counter">{count.length}</span>
                <span className="link" onClick={() => navigate(`/${type}`)}>{widgetData.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {percentage}%
                </div>
                {widgetData.icon}
            </div>
        </div>
    )
}

export default Widget;