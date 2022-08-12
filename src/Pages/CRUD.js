import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useLogincheck from "../hooks/useLoginCheck";
import axios from "../lib/axios";
export default CRUD;

function CRUD() {

    useLogincheck();

    const addJobSeeeker = () => {
        console.log(name);
        console.log(age);
        console.log(role);
        axios.post('/create', {
            name: name,
            role: role,
            age: age,
        }).then(() => {
            console.log("success");
        });
    };

    const getJobSeekers = () => {
        axios.get('/jobseekers', {
        }).then((response) => {
            setJobSeekerList(response.data);
        });
    };

    const updateJobSeeker = (idjobseeker) => {
        axios.put("/update", { role: newRole, idjobseeker: idjobseeker }, { withCredentials: true }).then(
            (response) => {
                setJobSeekerList(
                    JobSeekerList.map((val) => {
                        return val.idjobseeker == idjobseeker
                            ? {
                                idjobseeker: val.idjobseeker,
                                name: val.name,
                                role: newRole
                            }
                            : val;
                    })
                );
            }
        );
    };

    const DeleteJobSeeker = (idjobseeker) => {
        axios.delete(`/delete/${idjobseeker}`)
    }

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [role, setRole] = useState("");

    const [JobSeekerList, setJobSeekerList] = useState([]);

    const [newRole, setNewRole] = useState("");

    return <div>
        <div className="information">
            <h1> Please add your Specifications </h1>
            <label>Name:</label>
            <input type="text"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <label>Age:</label>
            <input type="number"
                onChange={(event) => {
                    setAge(event.target.value);
                }}
            />

            <label>Desired Role:</label>
            <input type="text"
                onChange={(event) => {
                    setRole(event.target.value);
                }}
            />

            <button onClick={addJobSeeeker}>Add Specifications</button>
        </div>
        <br>
        </br>
        <div className="ShowJS">
            <button onClick={getJobSeekers}> Show JobSeekers </button>

            {JobSeekerList.map((val, key) => {
                return <div className="jobseekers">
                    <div>
                        <h3>Name:
                            <br>
                            </br>
                            {val.name}
                        </h3>
                        <h3>Age:
                            <br>
                            </br>
                            {val.age}
                        </h3>
                        <h3>Role:
                            <br>
                            </br>
                            {val.role}
                        </h3>
                    </div>
                    <div className="Change">
                        <input type="text" placeholder="Change desired role..."
                            onChange={(event) => {
                                setNewRole(event.target.value);
                            }}
                        />
                        <button onClick={() => {
                            updateJobSeeker(val.idjobseeker);
                        }}> Update </button>

                        <button onClick={() => { DeleteJobSeeker(val.idjobseeker) }}> Delete</button>
                    </div>

                </div>
            })}
        </div>
        <div></div>
    </div>
}