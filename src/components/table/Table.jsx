import "./Table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from "../../hooks/useFetch";

const TableList = ({bookings}) => {
    const { rows } = useFetch(`/v1/bookings?_id=bookings`);
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">User</TableCell>
                        <TableCell className="tableCell">Hotel</TableCell>
                        <TableCell className="tableCell">Room Number</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow key={row}>
                            <TableCell className="tableCell">{row.hotelId}</TableCell>
                            <TableCell className="tableCell">{row.totalCost}</TableCell>
                            <TableCell className="tableCell">{row.roomNumbers}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableList;