import "./NewHotelPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadeOutLinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewHotelPage = () => {
    const [files, setFiles] = useState("");
    const [info, setInfo] = useState({});
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    const { data, loading } = useFetch("/v1/rooms");

    const handleChange = (e) => {
        setInfo(prev => ({...prev, [e.target.id]: e.target.value}))
    };

    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, (option) => option.value);
        setRooms(value);
    };
    
    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            const list = await Promise.all(Object.values(files).map(async file => {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmydn76la/image/upload", data);
                const { url } = uploadRes.data;
                
                return url;
            }));
            
            const newHotel = {...info, rooms, photos:list};
            await axios.post("/v1/hotels", newHotel);
            navigate("/hotels");
        }
        catch (err) {
            console.log(err); 
        }
    }

    return (
        <div className="newPage">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add new hotel</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={files ? URL.createObjectURL(files[0]) : "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image : <DriveFolderUploadeOutLinedIcon className="icon"/></label>
                                <input type="file" id="file" multiple onChange={e=>(setFiles(e.target.files))} style={{display : "none"}}/>
                            </div>

                            {hotelInputs.map(input => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Featrued</label>
                                <select id="feautred" onChange={handleChange}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                            <div className="selectRooms">
                                <label>Rooms</label>
                                <select id="rooms" multiple onChange={handleSelect}>
                                    {loading 
                                        ? "Loading..." 
                                        : data && data.map(room => (
                                            <option key={room._id} value={room._id}>{room.title}</option>
                                        ))}
                                </select>
                            </div>

                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewHotelPage;