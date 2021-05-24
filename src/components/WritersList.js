import { Container, Row, Col, Card } from "react-bootstrap";
import useTranslator from "../services/Translator";
import { Link } from "react-router-dom";

export default function WritersList(props) {
    const { t, getCurrLang } = useTranslator();

    if (props.writers !== null && props.writers.length > 0) {
        let output = [];
        props.writers.forEach(writer => {
            output.push(
                <Col className="justify-content-center" md={3} >
                    <Card className="mb-5" style={{ width: "230px", height: "450px" }} >
                        <Card.Img variant="top" style={{ height: "200px", objectFit: "cover", objectPosition: "left top" }} src={writer.photoUrl} />
                        <Card.Body>
                            <Card.Title>{writer.name[getCurrLang()]}</Card.Title>
                            <Card.Text>{writer.description[getCurrLang()]}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex flex-column justify-content-center align-items-center">
                            <Link className="mt-auto btn btn-outline-secondary" to={"/Writers/" + writer.id}>{t("landing.writerLink")}</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            );
        });
        return (
            <>
                <Container fluid>
                    <Row>
                        {output}
                    </Row>
                </Container>
            </>
        );
    } else {
        return null;
    }
}