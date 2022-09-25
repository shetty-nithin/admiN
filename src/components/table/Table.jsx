import "./Table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {
    const rows = [
        {id : 11223344, product : "Phone", img : "https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?cs=srgb&dl=pexels-pixabay-163007.jpg&fm=jpg", customer : "John Ceana", date : "1 March", amount : 780, method : "COD", status : "Approved"},
        {id : 11223345, product : "Laptop", img : "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg", customer : "Rock", date : "1 April", amount : 300, method : "PrePaid", status : "Pending"},
        {id : 11223346, product : "Shoes", img : "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnz-1598505.jpg&fm=jpg", customer : "Khali", date : "1 May", amount : 550, method : "PhonePe", status : "Pending"},
        {id : 11223347, product : "TV", img : "https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?cs=srgb&dl=pexels-andre-moura-3151392.jpg&fm=jpg", customer : "Under Taker", date : "1 June", amount : 499, method : "GooglePay", status : "Approved"},
    ]

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt=""  className="image"/>
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableList;