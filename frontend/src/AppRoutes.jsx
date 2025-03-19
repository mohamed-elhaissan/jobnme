import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="Register" element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}