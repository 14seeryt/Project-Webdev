import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobData from './MockData.json';
import useLogincheck from "../hooks/useLoginCheck";
export default Search;

function Search({ placeholder, data }) {

    useLogincheck();

    const [searchTerm, setSearchTerm] = useState("");

    return <div>
        <h1> Search for Jobs</h1>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Enter a job"
                    onChange={
                        event => { setSearchTerm(event.target.value) }
                    }
                    data={JobData} />
                <p className="Jobs">
                    {
                        JobData.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.Job.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return val
                            }
                        })
                            .map((val, key) => {
                                return <div> {val.Job}</div>
                            })
                    }
                </p>
            </div>
        </div>
    </div>
}