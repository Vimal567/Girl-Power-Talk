import "./Contact.css";
import { Container,Row,Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';//All social icons are imported from material ui icons
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () =>{
    return(
        <div className="Contact">
            <Container className="contact-container">
                <Row>
                    <Col xs={12} sm={4} md={4} className="contact-list">
                        <img alt="logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Group-263.png" />
                        <div className="contact-para">   
                            <q className="contact-para"><i>One girl empowers another. Let’s change lives together: <br />
                            one girl, one woman and one human being at a time.</i></q>
                            <br />
                            <div className="contact-para">
                                Phone: <a href="tel:+917973931882">+91 7973931882</a>
                            </div>
                            <div className="contact-para">
                                Email: <a href="mailto:info@girlpowertalk.com" >info@girlpowertalk.com</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={2} md={2} className="contact-list">
                        <h3>About</h3>
                        <a href="https://girlpowertalk.com/about-us/">About Us</a>
                        <a href="https://girlpowertalk.com/blog/">Blog</a>
                        <a href="https://girlpowertalk.com/press/">Press</a>
                    </Col>
                    <Col xs={6} sm={2} md={2} className="contact-list">
                        <h3>Team</h3>
                        <a href="https://girlpowertalk.com/apply-now/">Apply Now</a>
                        <a href="https://girlpowertalk.com/our-leaders/">Our Leaders</a>
                        <a href="https://girlpowertalk.com/gallery/">Gallery</a>
                        <a href="https://girlpowertalk.com/videos/">Videos</a>
                    </Col>
                    <Col xs={6} sm={2} md={2} className="contact-list">
                        <h3>Company</h3>
                        <a href="https://girlpowertalk.com/apply-now/">Careers</a>
                        <a href="https://girlpowertalk.com/#">Submit Your Story</a>
                        <a href="https://www.google.com/maps/dir//girlpowertalk/@30.7067585,76.6151532,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fefbdef862817:0x47e34ae0a9ab800!2m2!1d76.6851941!2d30.7066297?shorturl=1">Get Directions</a>
                        <a href="https://girlpowertalk.com/privacy-policy/">Privacy Policy</a>
                    </Col>
                    <Col xs={6} sm={2} md={2} className="contact-list">
                        <a href="https://girlpowertalk.com/apply-now/">
                            <button className="apply-button">Apply Now</button>
                        </a>
                        <br />
                        <a href="https://girlpowertalk.com/contact-us/">
                            <button className="contact-button">Contact Us</button>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Container className="separator"></Container>
                </Row>
                <Row  className="social">
                    <Col xs={12} sm={8} md={10} >
                        <div>GIRL POWER TALK | © COPYRIGHT 2022</div>
                    </Col>
                    <Col xs={12} sm={4} md={2} >
                        <span className="social-icons"><a href="https://www.facebook.com/girlpowertalk/"><FacebookIcon /></a></span>
                        <span className="social-icons"><a href="https://twitter.com/girlpowertalk"><TwitterIcon /></a></span>
                        <span className="social-icons"><a href="https://www.instagram.com/girlpowertalk/"><InstagramIcon /></a></span>
                        <span className="social-icons"><a href="https://www.linkedin.com/company/girl-power-talk/"><LinkedInIcon /></a></span>
                        <span className="social-icons"><a href="https://www.youtube.com/watch?v=JR9rMZYPkR0"><YouTubeIcon /></a></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;