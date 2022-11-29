import "./Featured.css";
import { Container,Row,Col } from "react-bootstrap";

const Featured = () => {
    return(
        <div className="Featured">
            <h3 className="featured-title">FEATURED IN</h3>
            <Container>
                <Row  className="featured-conatiner">
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://eshe.in/2020/07/27/rachita-sharma-2/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/eshe-1.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://www.under30ceo.com/empowering-women-leaders/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Under30CEO-Logo-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://blog.hubspot.com/service/empathy-leadership" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/865-238cf9206b842c1d13e8eb771a67ef2838a434c3-1.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://articles.bplans.com/responsibility-over-profitability/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Bplans-Logo-undefined.png" />
                        </a>
                    </Col>
                </Row>
                <Row className="featured-conatiner">
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://www.business.com/articles/how-to-create-a-productive-work-culture/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Business.com-Logo-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://www.datadriveninvestor.com/2020/11/20/five-advantages-female-leadership-brings-to-your-business/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/DataDrivenInvestor-Logo-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://timesnext.com/girl-power-talk-empower-young-women/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/TimesNext-Logo-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://www.datadriveninvestor.com/2020/11/20/five-advantages-female-leadership-brings-to-your-business/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/DataDrivenInvestor-Logo-undefined.png" />
                        </a>
                    </Col>
                </Row>
                <Row className="featured-conatiner">
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://feminisminindia.com/2021/05/28/women-in-leadership-how-close-are-we-to-closing-the-gender-gap/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Feminism-in-India-Icon-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://www.business2community.com/leadership/7-secrets-for-female-leaders-to-boost-self-confidence-02366412" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/Business-2-Community-Logo-undefined.png" />
                        </a>
                    </Col>
                    <Col xs={6} sm={4} md={3} className="featured-icons">
                        <a href="https://community.thriveglobal.com/girl-power-talk-a-lesson-in-transformation-through-empowerment/" >
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/10/thrive-global-logo-1-1.png" />
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h3 className="awards-title">AWARDS</h3>
                <Row  className="awards-conatiner">
                    <Col xs={12} sm={4} md={3} className="awards-icons">
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/12/865-238cf9206b842c1d13e8eb771a67ef2838a434c3-1.png" />
                    </Col>
                    <Col xs={12} sm={4} md={3} className="awards-icons">
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2022/02/globa-women-awards-gpt.png" />
                    </Col>
                    <Col xs={12} sm={4} md={3} className="awards-icons">
                        <img alt="featured logo" src="https://girlpowertalk.com/wp-content/uploads/2021/12/image-1.png" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Featured;