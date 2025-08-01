import { Route, Routes, BrowserRouter ,Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path='/login' element={< Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}