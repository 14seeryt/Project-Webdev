import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../lib/axios";
export default Login;

function Login() {

    const login = () => {
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
            console.log(response.data)
        })
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    return <div>
        <div class="container register-form">
            <div class="note">
                <p>Login</p>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }} class="form-control" placeholder="Your Username *" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} class="form-control" placeholder="Your Password *" />
                    </div>
                </div>
            </div>
            <button onClick={login} type="button" class="btnSubmit">Login</button>
            <div>
                <h1 className="LoginStatus">{loginStatus}</h1>
            </div>
        </div>
    </div>
}