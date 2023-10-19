import { useRoutes } from "react-router-dom";
import { defaultRoutes, extra } from "@/routes";
import React, { useEffect, useState } from 'react';
import Menus from "@/pages/Menus";
import { Container, Row, Col } from "react-bootstrap";
import { test } from "@/services"
export default function App() {
    const [routes, setRoutes] = useState(defaultRoutes)
    useEffect(() => {
        const t = async () => {
            let res = await test.getTestData()
            console.log('res', res)
        }
        t()
    }, [])
    const testFunc = () => {
        setRoutes([...defaultRoutes, ...extra])
    }
    const ele = useRoutes(routes)
    return (
        <>
            <Container className="bg-light border">
                .container
            </Container>
            <Container
                className="bg-light border"
                fluid="sm"
            >
                .container-sm
            </Container>
            <Container
                className="bg-light border"
                fluid="md"
            >
                .container-md
            </Container>
            <Container
                className="bg-light border"
                fluid="lg"
            >
                .container-lg
            </Container>
            <Container
                className="bg-light border"
                fluid="xl"
            >
                .container-xl
            </Container>
            <Container
                className="bg-light border"
                fluid
            >
                .container-fluid
            </Container>
            <Container
                className=" border"
                fluid
            >
                <Row >
                    HeaderHeaderHeaderHeaderHeaderHeader
                    HeaderHasd
                    HeaderHeaderHeaderHeaderHeaderHeader
                    HeaderHeaderHeaderHeaderHeaderHeader
                    HeaderHeaderHeaderHeaderHeaderHeader
                    HeaderHeaderHeaderHeaderHeaderHeader
                </Row>
                <Row>
                    <Col className="border">
                        <button onClick={testFunc}>点击动态添加路由</button>
                        <Menus /></Col>
                    <Col className="border">
                        {ele}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
