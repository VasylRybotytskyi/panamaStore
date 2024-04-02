import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableCheckout({ cartData }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Назва</TableCell>
            <TableCell align="center">Кількість</TableCell>
            <TableCell align="center">Розмір</TableCell>
            <TableCell align="center">Ціна</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartData?.map(({ name, quantity, size, price }) => (
            <TableRow
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="center">{quantity}</TableCell>
              <TableCell align="center">{size}</TableCell>
              <TableCell align="center">{price * quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
