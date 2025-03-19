import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}