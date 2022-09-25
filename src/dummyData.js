export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, renderCell: (params)=> {
        return (
            <div className="cellWtihImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }},
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Stutus', width: 160, renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    } },

]

export const userRows = [
    {
        id: 1,
        username: "John Snow",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg",
        status: "active",
        email: "john_snow@gmail.com",
        age: 28
    },
    {
        id: 2,
        username: "Jaime Lanister",
        img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?cs=srgb&dl=pexels-pixabay-532220.jpg&fm=jpg",
        status: "passive",
        email: "jaime_lanister@gmail.com",
        age: 42
    },
    {
        id: 3,
        username: "Arya Stark",
        img: "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?cs=srgb&dl=pexels-pixabay-38289.jpg&fm=jpg",
        status: "pending",
        email: "arya_stark@gmail.com",
        age: 16
    },
    {
        id: 4,
        username: "Daenerys Targaryen",
        img: "https://images.pexels.com/photos/5676270/pexels-photo-5676270.jpeg?cs=srgb&dl=pexels-ferdie-balean-5676270.jpg&fm=jpg",
        status: "passive",
        email: "queen@gmail.com",
        age: 30
    },
    {
        id: 5,
        username: "Cersei Lanister",
        img: "https://images.pexels.com/photos/3095593/pexels-photo-3095593.jpeg?cs=srgb&dl=pexels-jj-jordan-3095593.jpg&fm=jpg",
        status: "active",
        email: "cersei_lanister@gmail.com",
        age: 40
    },
    {
        id: 6,
        username: "Sansa Stark",
        img: "https://images.pexels.com/photos/7181807/pexels-photo-7181807.jpeg?cs=srgb&dl=pexels-cottonbro-7181807.jpg&fm=jpg",
        status: "active",
        email: "sansa_stark@gmail.com",
        age: 20
    },
    {
        id: 7,
        username: "Joffrey Baratheon",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
        status: "passive",
        email: "joffrey_baratheon@gmail.com",
        age: 20
    },
    {
        id: 8,
        username: "Bran Stark",
        img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg",
        status: "pending",
        email: "bran_stark@gmail.com",
        age: 18
    },
    {
        id: 9,
        username: "Theon Greyjoy",
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creation-hill-1681010.jpg&fm=jpg",
        status: "passive",
        email: "theon_greyjoy@gmail.com",
        age: 27
    },
    {
        id: 10,
        username: "Jorah Mormont",
        img: "https://images.pexels.com/photos/3408420/pexels-photo-3408420.jpeg?cs=srgb&dl=pexels-daisa-tj-3408420.jpg&fm=jpg",
        status: "active",
        email: "jorah_mormont@gmail.com",
        age: 44
    },
    
]


export const productColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 230, renderCell: (params)=> {
        return (
            <div className="cellWtihImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.productname}
            </div>
        )
    }},
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'status', headerName: 'Stutus', width: 160, renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    } }
]

export const productRows = [
    {
        id: 1,
        productname: "Mac book pro",
        img: "https://images.pexels.com/photos/10948208/pexels-photo-10948208.jpeg?cs=srgb&dl=pexels-szymon-shields-10948208.jpg&fm=jpg",
        price: "$40",
        status: "available"
    },
    {
        id: 2,
        productname: "Google Pixel",
        img: "https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?cs=srgb&dl=pexels-deepanker-verma-1482061.jpg&fm=jpg",
        price: "$25",
        status: "available"
    },
    {
        id: 3,
        productname: "Head Phone",
        img: "https://images.pexels.com/photos/7120885/pexels-photo-7120885.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7120885.jpg&fm=jpg",
        price: "$5",
        status: "available"
    },
    {
        id: 4,
        productname: "Watch",
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
        price: "$15",
        status: "not_available"
    },
]