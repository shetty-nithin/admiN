import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Featured = () => {
    const thisWeek = 101428;
    const target = 119732;
    const lastWeek = 108756;
    const lastMonth = 3567866;
    const percent = ((thisWeek*100)/target).toFixed(2);

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar  value={percent} text={`${percent}%`} strokeWidth={8}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">Rs 119428</p>
                <p className="desc">Previous transaction is in processing. Last payment may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">Rs {target/1000}k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">Rs {lastWeek/1000}k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">Rs {lastMonth/1000}k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;