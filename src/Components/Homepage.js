import "./Homepage.css";
import Tilt from 'react-parallax-tilt';//Tilt library to make the image tilt
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container,Row,Col } from "react-bootstrap";
import homeimage from "./images/homeimage.jfif";

const Homepage = () => {
    return(
        <div className="Home">
            <Container fluid="md" className="home-container">
                <Row >
                    <Col sm={12} md={6} lg={6} className="homebio">
                        <div className="welcome">Welcome to</div>
                        <div className="hero-name">
                            Girl Power Talk
                        </div>
                        <br />
                        <div className="hero-quote">
                            <i>“Let’s change the world together, one person at a time”</i>
                        </div>
                        <br/>
                    </Col >
                    <Col sm={12} md={6} lg={6} className="heroes">
                        <Tilt className="hero-container"
                            tiltMaxAngleX={13}
                            tiltMaxAngleY={15}
                            perspective={3000}
                            transitionSpeed={1500}
                            >
                            <Card className='hero-card' style={{ width: '25rem' }}>
                                <img alt="homeimage" src={homeimage} />
                            </Card>
                        </Tilt>       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage;