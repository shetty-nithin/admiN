import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ListPage from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import NewPage from "./pages/newPage/NewPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userColumns, userRows, productColumns, productRows } from "./dummyData";

function App() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index  element={<HomePage/>}/> 
                        
                        <Route path="login"  element={<LoginPage/>}/>

                        <Route path="users">
                            <Route index element={<ListPage columnValue={userColumns} rowValue={userRows} createNew="user"/>}/>
                            <Route path=":userId" element={<SinglePage/>}/>
                            <Route path="new" element={<NewPage inputs={userInputs} title="Add new user"/>}/>
                        </Route>

                        <Route path="products">
                            <Route index element={<ListPage columnValue={productColumns} rowValue={productRows} createNew="product"/>}/>
                            <Route path=":productId" element={<SinglePage/>}/>
                            <Route path="new" element={<NewPage inputs={productInputs} title="Add new product"/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
