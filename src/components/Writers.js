import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from "react-router-dom";
import { Navbar, Nav, Container, InputGroup, FormControl, Spinner } from "react-bootstrap";
import useTranslator from "../services/Translator";
import useDBService from "../services/DBService";
import WritersList from "./WritersList";
import { ChangeLang } from "./Home";
import { HashLink } from "react-router-hash-link";
import WriterInfo from "./WriterInfo";

export default function Writers() {
    const { t, getCurrLang } = useTranslator();
    const { id } = useParams();

    const [dbLoaded, dbSearch] = useDBService("writersS.json");
    const [searchResult, setSearchResult] = useState(null);

    const [query, setQuery] = useState("");
    useEffect(() => {
        if (dbLoaded === true) {
            setSearchResult(dbSearch("name." + getCurrLang(), query));
        }
    }, [dbLoaded, query]);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <HashLink className="navbar-brand" smooth to="/">Belarusian Writers</HashLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            id === undefined ? (
                                <InputGroup className="mr-4">
                                    <FormControl
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                        placeholder={t("writers.search")} />
                                </InputGroup>
                            ) : (
                                <>
                                    <HashLink className="nav-link" smooth to="#bio">{t("writers.bio")}</HashLink>
                                    <HashLink className="nav-link" smooth to="#photos">{t("writers.photos")}</HashLink>
                                    <HashLink className="nav-link" smooth to="#video">{t("writers.video")}</HashLink>
                                    <HashLink className="nav-link" smooth to="#map">{t("writers.map")}</HashLink>
                                    <Link className="nav-link" to="/Writers">{t("navbar.writers")}</Link>
                                </>
                            )
                        }
                        <ChangeLang />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                {
                    id === undefined ? dbLoaded === false ?
                        (
                            <Spinner animation="border" />
                        ) :
                        (
                            <WritersList writers={searchResult} />
                        ) :
                        (
                            <WriterInfo id={id} />
                        )
                }
            </Container>
        </>);
}