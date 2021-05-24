import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container, ButtonGroup, ToggleButton, Row, Jumbotron, Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useTranslator from "../services/Translator"
import "./home.css";
import { Link } from "react-router-dom";
import WriterOTD from "./WriterOTD";
import VladIcon from "../res/vlad-icon.jpg";
import NikitaIcon from "../res/nikita-icon.jpg";

export function ChangeLang() {
    const { setLang, getCurrLang } = useTranslator();
    const [radioValue, setRadioValue] = useState(getCurrLang());

    const radios = [
        { name: 'ENG', value: 'en' },
        { name: 'RUS', value: 'ru' },
    ];

    return (
        <ButtonGroup toggle>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-secondary"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                        setRadioValue(e.currentTarget.value);
                        setLang(e.currentTarget.value)
                    }}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}

export default function Home() {
    const { t } = useTranslator();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Link className="navbar-brand" to="/">Belarusian Writers</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/Writers">{t("navbar.writers")}</Link>
                        <ChangeLang />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container id="land" fluid style={{ backgroundColor: "#fff" }}>
                {/* style={{ backgroundImage: "linear-gradient(180deg, rgba(212, 44, 44, 1) 60%, rgba(0, 189, 3, 0.9) 100%)" }} */}
                <Jumbotron style={{ backgroundImage: "linear-gradient(180deg, rgba(212, 44, 44, 1) 60%, rgba(0, 189, 3, 1) 100%)" }}>
                    <Row className="justify-content-center">
                        <h1 className="big-heading text-center">
                            {t("landing.label")}
                        </h1>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="text-center">
                            {t("landing.desc")}
                        </h2>
                    </Row>
                    <Row className="justify-content-center">
                        <Link className="btn btn-lg btn-outline-light" to="/Writers">{t("landing.button")}</Link>
                    </Row>
                </Jumbotron>
            </Container>

            <WriterOTD style={{ height: "90vh" }} id="daily" />

            <Container id="devs" className="pt-5" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 1%, rgba(53, 62, 74, 1) 100%)", color: "white" }} fluid>
                <Row className="justify-content-center">
                    <Col md={2} >
                        <Card className="mb-5 text-center" text="dark" style={{ width: "12rem" }}>
                            <Card.Img variant="top" src={VladIcon} />
                            <Card.Body>
                                <Card.Title>Nevinskiy Vladislav</Card.Title>
                                <Card.Text>
                                    <a className="mb-0" href="https://github.com/newvlad2001">newvlad2001</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} >
                        <Card className="mb-5 text-center" text="dark" style={{ width: "12rem" }}>
                            <Card.Img variant="top" src={NikitaIcon} />
                            <Card.Body>
                                <Card.Title>Fedarenchyk Nikita</Card.Title>
                                <Card.Text>
                                    <a className="mb-0" href="https://github.com/Fedarenchyk-16">Fedarenchyk-16</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}