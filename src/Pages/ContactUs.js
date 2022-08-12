import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../lib/axios";
import { userSchema } from "../Validation";

function ContactUs() {

    const [errors, setErrors] = useState([]);

    const createContact = async (event) => {
        event.preventDefault()
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            number: event.target[2].value
        };
        console.log(formData);
        userSchema.validate(formData, { abortEarly: false }).catch((ValidationError) => {
            setErrors(ValidationError.errors);
        });

    }


    return <div>
        <div className="Form">
            <form onSubmit={createContact}>
                <input type="text" placeholder="Name..." />
                <br />
                <input type="text" placeholder="email@email.com" />
                <br />
                <input type="text" placeholder="Phone Number..." />
                <br />
                <input type="Submit" />
                <ul>
                    {errors.map(error => {
                        return <li key={error}>
                            {error}
                        </li>
                    })}
                </ul>
            </form>

        </div>

    </div>
}

export default ContactUs;