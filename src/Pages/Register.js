import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../lib/axios";
export default Register;

function Register() {

    const RegisterUser = () => {
        axios.post("/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
        })
    }

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    return <div>
        <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Registration</p>
                </div>
                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text"
                                    onChange={(e) => {
                                        setUsernameReg(e.target.value);
                                    }}
                                    class="form-control" placeholder="Your Username *" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="password" onChange={(e) => {
                                    setPasswordReg(e.target.value)
                                }}
                                    class="form-control" placeholder="Your Password *" />
                            </div>
                        </div>
                    </div>
                    <button onClick={RegisterUser} type="button" class="btnSubmit">Register</button>

                </div>
            </div>
        </div>
    </div>
}