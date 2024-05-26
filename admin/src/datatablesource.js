export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Пайдаланушы",
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
    headerName: "Админ",
    width: 100,
  },
  {
    field: "managerValue",
    headerName: "Менеджер",
    width: 100,
    renderCell: (params) => {
      const manager = params.row.manager;
      if (manager) {
        return <span>{manager.value.toString()}</span>;
      } else {
        return <span>N/A</span>; // или другое сообщение об ошибке
      }
    },
  },
  
  {
    field: "managerFieldId",
    headerName: "Менеджердің ойың алаңы ID",
    width: 250,
    renderCell: (params) => {
      const manager = params.row.manager;
      if (manager) {
        return <span>{manager.fieldId || 'Жоқ'}</span>;
      } else {
        return <span>N/A</span>; // или другое сообщение об ошибке
      }
    },
  },
  
];

export const fieldColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Ойың алаңы атауы",
    width: 300,
  },
  {
    field: "type",
    headerName: "Түрі",
    width: 100,
  },
  {
    field: "address",
    headerName: "Мекенжайы",
    width: 350,
  },
  {
    field: "price",
    headerName: "Бағасы",
    width: 100,
  },
  {
    field: "city",
    headerName: "Қала",
    width: 100,
  },
];


export const bookingColumns = [
  { field: "_id", headerName: "ID", width: 200 },

  
  {
    field: "username",
    headerName: "Пайдаланушы аты",
    width: 200,
  },
  {
    field: "name",
    headerName: "Алаң атауы",
    width: 200,
  },
  {
    field: "date",
    headerName: " Күні",
    width: 100,
    renderCell: (params) => {
      const dateValue = params.value;
      if (dateValue) {
        const dateOnly = dateValue.split('T')[0];
        return <span>{dateOnly}</span>;
      } else {
        return <span>N/A</span>; // или другое сообщение об ошибке
      }
    },
  },
  
  {
    field: "startTime",
    headerName: " Басталуы",
    width: 100,
  },
  {
    field: "endTime",
    headerName: " Аяқталуы",
    width: 100,
  },
  {
    field: "price",
    headerName: " Бағасы",
    width: 100,
  },
];
