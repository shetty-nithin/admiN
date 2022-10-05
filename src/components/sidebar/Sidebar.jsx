import "./Sidebar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import ApartmentIcon from '@mui/icons-material/Apartment';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";



const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">admiN</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                        <li>
                            <Person3OutlinedIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/hotels" style={{textDecoration:"none"}}>
                        <li>
                            <ApartmentIcon className="icon"/>
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <Link to="/rooms" style={{textDecoration:"none"}}>
                        <li>
                            <HotelIcon className="icon"/>
                            <span>Rooms</span>
                        </li>
                    </Link>
                    <Link to="/bookings" style={{textDecoration:"none"}}>
                        <li>
                            <BookOnlineIcon className="icon"/>
                            <span>Bookings</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <li>
                            <ExitToAppOutlinedIcon className="icon"/>
                            <span onClick={() => localStorage.removeItem("user")}>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
             </div>
        </div>
    )
}

export default Sidebar;