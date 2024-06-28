import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate();

    const onSubmit = () => {
        // idk aaaaaaaaaaaaa
        navigate("/");
    }

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
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
          Sign In
      </Button>
      </Form>
    </div>
  )
}

export default Login