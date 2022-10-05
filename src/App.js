import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ListPage from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import NewPage from "./pages/newUserPage/NewUserPage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userColumns, hotelColumns, roomColumns, bookingColumns } from "./dataTableSource";
import { AuthContext } from "./context/AuthContext";
import NewHotelPage from "./pages/newHotePage/NewHotelPage";
import NewRoomPage from "./pages/newRoomPage/NewRoomPage";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    const  ProtectedRoute = ({children}) => {
        const { user } = useContext(AuthContext);

        if(!user){
            return <Navigate to="/login"/>
        }
        return children;
    }

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login"  element={<LoginPage/>}/>
                        
                        <Route index  element={<ProtectedRoute><HomePage/></ProtectedRoute>}/> 
                        
                        <Route path="users">
                            <Route index element={<ProtectedRoute><ListPage columnValue={userColumns}/></ProtectedRoute>}/>
                            <Route path=":userId" element={<ProtectedRoute><SinglePage/></ProtectedRoute>}/>
                            <Route path="new" element={<ProtectedRoute><NewPage/></ProtectedRoute>}/>
                        </Route>

                        <Route path="hotels">
                            <Route index element={<ListPage columnValue={hotelColumns}/>}/>
                            <Route path=":hotelId" element={<ProtectedRoute><SinglePage/></ProtectedRoute>}/>
                            <Route path="new" element={<ProtectedRoute><NewHotelPage/></ProtectedRoute>}/>
                        </Route>

                        <Route path="rooms">
                            <Route index element={<ListPage columnValue={roomColumns}/>}/>
                            <Route path=":roomId" element={<ProtectedRoute><SinglePage/></ProtectedRoute>}/>
                            <Route path="new" element={<ProtectedRoute><NewRoomPage/></ProtectedRoute>}/>
                        </Route>

                        <Route path="bookings">
                            <Route index element={<ListPage columnValue={bookingColumns}/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
