export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "isAdmin",
    headerName: "Admin",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "address",
    headerName: "Addres",
    width: 350,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 200 },
 
  
  {
    field: "booking",
    headerName: "Booking",
    width: 400,
  },
  {
    field: "aa",
    headerName: " aa",
    width: 100,
  },
];
