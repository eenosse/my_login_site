import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { apiCall } from "./util";

const SignUp = () => {
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        // event.preventDefault();
        // console.log(event.target.elements);
        // const display_name =
        //     event.target.elements["formBasicDisplayName"].value;
        // const email = event.target.elements["formBasicEmail"].value;
        // const password = event.target.elements["formBasicPassword"].value;
        // const responseData = await apiCall("/api/auth/signup", "POST", {
        //     display_name,
        //     email,
        //     password,
        // });
        // const isSuccess = responseData && responseData["code"] === 201;
        // if (isSuccess) {
        //     window.location.href = "/signin";
        // } else {
        //     alert(responseData["detail"]);
        // }
        navigate("/signin");
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicDisplayName">
                    <Form.Label className="mb-1">Display Name</Form.Label>
                    <Form.Control
                        type="display_name"
                        placeholder="Enter display name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-1">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="mb-1">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
