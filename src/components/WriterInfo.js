import { useEffect, useState } from "react";
import useDBService from "../services/DBService";
import useTranslator from "../services/Translator";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Container, Carousel, Spinner } from "react-bootstrap";

export default function WriterInfo(props) {

    const { getCurrLang } = useTranslator();

    const [allLoaded, setAllLoaded] = useState(false);
    const [writerInfo, setWriterInfo] = useState(null);

    const [shortLoaded, searchShort] = useDBService("writersS.json");
    const [longLoaded, searchLong] = useDBService("writersL.json");

    useEffect(() => {
        if (shortLoaded === true && longLoaded === true) {
            let short = searchShort("id", parseInt(props.id), true)[0];
            let long = searchLong("id", parseInt(props.id), true)[0];
            if (short !== undefined && long !== undefined) {
                Object.assign(short, long);
                setWriterInfo(short);
                setAllLoaded(true);
            } else {
                setAllLoaded(false);
            }
        }
    }, [props.id, shortLoaded, longLoaded]);

    function loadBio() {
        let res = [];
        writerInfo.bio.forEach(b => {
            res.push(
                <TimelineItem style={{ color: "#21c25c" }}
                    dateInnerStyle={{ background: "#21c25c", color: "#000" }}
                    bodyContainerStyle={{
                        background: "#ddd",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                    }}
                    dateText={b.date}>
                    <h3>{b.title[getCurrLang()]}</h3>
                    <p>{b.text[getCurrLang()]}</p>
                </TimelineItem>
            );
        });
        return res;
    }

    function loadPhotos() {
        let result = [];
        writerInfo.photos.forEach(ph => {
            result.push(
                <Carousel.Item>
                    <img style={{ height: "60vh", objectFit: "cover", objectPosition: "top", margin: "auto" }} className="d-block" src={ph} alt="Loading" />
                </Carousel.Item>
            );
        })
        return result;
    }

    return (
        <>
            {
                allLoaded === true ? (
                    <>
                        <Container className="mb-5">
                            <Container md={3} style={{ height: "250px", width: "250px" }}>
                                <img className="w-100 h-100" style={{ objectFit: "cover", objectPosition: "top" }} src={writerInfo.photoUrl} alt="Avatar" />
                            </Container>
                            <Container md={9} >
                                <h3 className="text-center">{writerInfo.name[getCurrLang()]}</h3>
                                <h4 className="text-center">{writerInfo.dob} - {writerInfo.dod}</h4>
                                <p>{writerInfo.longDescription[getCurrLang()]}</p>
                            </Container>
                        </Container>

                        <Container id="bio">
                            <Timeline lineColor="#ddd">
                                {loadBio()}
                            </Timeline>
                        </Container>

                        <Container style={{ width: "60vw" }}>
                            <Container id="photos" className="mb-5">
                                <Carousel style={{ backgroundColor: "var(--secondary)" }}>
                                    {loadPhotos()}
                                </Carousel>
                            </Container>

                            <Container id="video" style={{ height: "60vh" }} className="mb-5">
                                <iframe className="w-100 h-100" src={"https://www.youtube.com/embed/" + writerInfo.video} title="Writer video" style={{ border: 0 }} allowFullScreen></iframe>
                            </Container>

                            <Container id="map" style={{ height: "60vh" }} className="mb-5">
                                <iframe className="w-100 h-100" src={"https://www.google.com/maps/embed?pb=" + writerInfo.location} title="Writer location" style={{ border: 0 }} loading="lazy"></iframe>
                            </Container>
                        </Container>
                    </>
                ) : (
                    <Spinner animation="border" />
                )
            }
        </>
    );
}