export const userColumns = [
    {
        field: '_id',
        headerName: 'ID',
        width: 250
    },
    {
        field: 'user',
        headerName: 'User',
        width: 200,
        renderCell: (params)=> {
            return (
                <div className="cellWtihImg">
                    <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'contry',
        headerName: 'Contry',
        width: 100 },
    {
        field: 'city',
        headerName: 'City',
        width: 100 },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150
    },
];


export const hotelColumns = [
    {
        field: "_id",
        headerName: "ID",
        width: 250
    },
    {
        field: "name",
        headerName: "Name",
        width: 200
    },
    {
        field: "type",
        headerName: "Type",
        width: 100
    },
    {
        field: "title",
        headerName: "Title",
        width: 250
    },
    {
        field: "city",
        headerName: "City",
        width: 120
    }
];


export const roomColumns = [
    {
        field: "_id",
        headerName: "ID",
        width: 250
    },
    {
        field: "title",
        headerName: "Title",
        width: 150
    },
    {
        field: "desc",
        headerName: "Descrition",
        width: 300
    },
    {
        field: "price",
        headerName: "Price",
        width: 120
    },
    {
        field: "maxPeople",
        headerName: "Max People",
        width: 150
    }
];

export const bookingColumns = [
    {
        field: "_id",
        headerName: "ID",
        width: 200
    },
    {
        field: "user",
        headerName: "User",
        width: 150
    },
    {
        field: "hotelId",
        headerName: "Hotel",
        width: 200
    },
    {
        field: "roomType",
        headerName: "Room Type",
        width: 150
    },
    {
        field: "roomNumbers",
        headerName: "Rooms",
        width: 100
    },
    {
        field: "startDate",
        headerName: "Check-In",
        width: 100
    },
    {
        field: "endDate",
        headerName: "Check-Out",
        width: 100
    },
]