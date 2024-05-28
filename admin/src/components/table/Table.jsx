import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      "_id": "66525cacf8ea09e45d39f88e",
      "username": "Faizulla Murat",
      "name": "DarChiball Arena",
      "price": 20000,
      "date": "2024-05-25T00:00:00.000Z",
      "startTime": "07:00",
      "endTime": "08:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716672179/upload/ab67616d0000b2736382f06498259682f91cf981_tbyaqo.jpg"
    },
    {
      "_id": "66534576f0e8d3c196030560",
      "username": "Faizulla Murat",
      "name": "DarChiball Arena",
      "price": 20000,
      "date": "2024-05-26T00:00:00.000Z",
      "startTime": "20:00",
      "endTime": "21:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716672179/upload/ab67616d0000b2736382f06498259682f91cf981_tbyaqo.jpg"
    },
    {
      "_id": "66534917f0e8d3c196030636",
      "username": "Алтынбек",
      "name": "DarChiball Arena",
      "price": 20000,
      "date": "2024-05-26T00:00:00.000Z",
      "startTime": "23:00",
      "endTime": "00:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716733217/upload/user_arepen.jpg"
    },
    {
      "_id": "6653b015ef363865ae81df21",
      "username": "Алтынбек",
      "name": "DarChiball Arena",
      "price": 20000,
      "date": "2024-05-27T00:00:00.000Z",
      "startTime": "07:00",
      "endTime": "08:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716733217/upload/user_arepen.jpg"
    },
    {
      "_id": "6653b03def363865ae81df58",
      "username": "Темірлан",
      "name": "Спортивный зал на Сейфуллина 31",
      "price": 15000,
      "date": "2024-05-26T00:00:00.000Z",
      "startTime": "08:00",
      "endTime": "09:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716756600/upload/photo_2023-09-27_22-50-55_nvitr5.jpg"
    },
    {
      "_id": "6653b040ef363865ae81df5c",
      "username": "Темірлан",
      "name": "Спортивный зал на Сейфуллина 31",
      "price": 15000,
      "date": "2024-05-26T00:00:00.000Z",
      "startTime": "07:00",
      "endTime": "08:00",
      "img": "http://res.cloudinary.com/dsw3iy3rf/image/upload/v1716756600/upload/photo_2023-09-27_22-50-55_nvitr5.jpg"
    }
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Пайдаланушы</TableCell>
            <TableCell className="tableCell">Ойың алаңы</TableCell>
            <TableCell className="tableCell">Күні</TableCell>
            <TableCell className="tableCell">Бастау уақыты</TableCell>
            <TableCell className="tableCell">Аяқталу уақыты</TableCell>
            <TableCell className="tableCell">Бағасы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.username}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{new Date(row.date).toLocaleDateString()}</TableCell>
              <TableCell className="tableCell">{row.startTime}</TableCell>
              <TableCell className="tableCell">{row.endTime}</TableCell>
              <TableCell className="tableCell">{row.price} теңге</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
