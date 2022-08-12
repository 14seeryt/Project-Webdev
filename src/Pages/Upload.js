import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogincheck from "../hooks/useLoginCheck";
export default Upload;

function Upload() {

    useLogincheck();

    return <div>
        <form method="post" action="#" id="#">
            <div class="form-group files">
                <label>Upload Your CV </label>
                <input type="file" class="form-control" multiple=""></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
}