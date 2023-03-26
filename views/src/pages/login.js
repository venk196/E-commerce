import React, { useRef } from "react"
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import loginApi from "../api/login"

const Login = (props) => {
    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()

    const handleLogin = (event) => {
        event.preventDefault()
        authenticateUser()

    }

    const authenticateUser = async () => {
        try {
            const data = {
                username: username.current.value,
                password: password.current.value
            }
            // const response = await loginApi.authenticateUser(data)

            // if (response.isAuthenticated) {
            //     navigate('/dashboard')
            // }
            console.log()
            navigate('/dashboard')

        } catch (err) {
            console.log('error')
        }
    }

    return (
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary" />
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleLogin}>
                                            <Form.Group className="mb-3" controlId="username">
                                                <Form.Label className="text-center">Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" ref={username}/>
                                            </Form.Group>
                                             <Form.Group className="mb-3" controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" ref={password}/>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">Login</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default Login;