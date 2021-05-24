import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTranslator from "../services/Translator";
import useDBService from "../services/DBService";

export default function WriterOTD(props) {

    const { t, getCurrLang } = useTranslator();

    const [writer, setWriter] = useState(null);

    const [dbLoaded, dbSearchWriter] = useDBService("writersS.json");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        if (dbLoaded) {
            let allWriters = dbSearchWriter("", "");
            let randomIndex = getRandomInt(allWriters.length);
            setWriter(allWriters[randomIndex]);
        }
    }, [dbLoaded]);


    return (
        <Container id={props.id} style={props.style} fluid className="d-flex flex-column justify-content-center align-items-center">
            {
                dbLoaded === true && writer !== null ? (
                    <>
                        <h3>{t("landing.writerOTD")}</h3>
                        <Container className="mb-5 d-flex flex-column justify-content-center align-items-center">
                            <Container style={{ height: "250px", width: "250px" }}>
                                <img className="w-100 h-100" style={{ objectFit: "cover", objectPosition: "top" }} src={writer.photoUrl} alt="Avatar" />
                            </Container>
                            <Container>
                                <h3 className="text-center">{writer.name[getCurrLang()]}</h3>
                                <h4 className="text-center">{writer.dob} - {writer.dod}</h4>
                                <p className="text-center">{writer.description[getCurrLang()]}</p>
                            </Container>
                            <Link className="btn btn-outline-secondary" to={"/Writers/" + writer.id}>{t("landing.writerLink")}</Link>
                        </Container>
                    </>
                ) : (
                    <Spinner animation="border" />
                )
            }

        </Container >
    );
}