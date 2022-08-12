import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "../lib/axios";

const useLogincheck = () => {

    const navigate = useNavigate();

    useEffect(() => {
        axios.post("/me")
            .then((res) => {
                if (res.data.loggedin == false) {
                    navigate("/login")
                }
            })
    }, [])
}

export default useLogincheck;