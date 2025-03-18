import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}