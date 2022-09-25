import "./NewPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadeOutLinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewPage = ({inputs, title}) => {
    const [file, setFile] = useState("");

    return (
        <div className="newPage">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image : <DriveFolderUploadeOutLinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={e=>(setFile(e.target.files[0]))} style={{display : "none"}}/>
                            </div>

                            {inputs.map(input => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPage;