import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from "./images/about.png";
import vision from "./images/vision.jpg";


const About = () => {
    return(
        <div className="About">
            <Container fluid="md" className="about-container">
                <Row >
                    <Col sm={12} md={6} lg={6} className="about-bio">
                        <h1>About Us</h1>
                        <p>At Girl Power Talk, we are growing up with a wonderful culture of gender equality. 
                            We passionately empower women as well as men and non-binary individuals to grow with 
                            persistence, empathy and to achieve a career with their full potential. We celebrate the 
                            diverse talents of each individual.
                        </p>
                        <q><i>Let’s unlock your potential. Welcome to Girl Power Talk.</i></q>
                        <br /><br />
                        <a href="https://girlpowertalk.com/about-us/">
                            <button className="learnMore">Learn more !</button>
                        </a>
                    </Col >
                    <Col sm={12} md={6} lg={6} >
                        <img alt="about" src={logo} className="about-image" />
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col sm={12} md={6} lg={6}>
                        <img alt="vision" src={vision} className="vision-image" />
                    </Col >
                    <Col sm={12} md={6} lg={6} className="vision-bio">
                        <h1>Our Vision</h1>
                        <p>Girl Power Talk is passionate about elevating young women to become global leaders 
                            who are recognized for their myriad of talents and contributions. We believe that 
                            through education, opportunity, and the support of empathetic male allies, girls 
                            and women will advance beyond gender roles, aspire to new levels of achievement
                            and reshape our society. Through our innovative ecosystem, we are changing the  
                            world of work for the better and providing all voices equal weight in a new narrative 
                            defining the future.
                        </p>
                        <Link to="Featured" ><button className="seeMore">See more !</button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;