import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "../lib/axios";
import useLogincheck from "../hooks/useLoginCheck";

function Logout() {

    useLogincheck();

    const navigate = useNavigate();

    const logout = () => {
        axios.post("/logout").then(() => {
            navigate("/login");
        })
    }
    return <div>
        <br />
        <br />
        <button onClick={logout} type="button" class="btnSubmit">Logout</button>
    </div>
}

export default Logout;