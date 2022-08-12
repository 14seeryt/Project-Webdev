import React from "react";
import { Routes, Route } from "react-router";
import CRUD from "./Pages/CRUD";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import Upload from "./Pages/Upload";
import ContactUs from "./Pages/ContactUs";
import { Link } from "react-router-dom";
export default Router;

function Router() {
    return <div>

        <nav className="topnav">
            <Link to="/homepage">Homepage</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/crud">Profile Page</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/search">Search</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/contact">ContactUs</Link>
        </nav>

        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact" element={<ContactUs />} />

        </Routes>
    </div>
}