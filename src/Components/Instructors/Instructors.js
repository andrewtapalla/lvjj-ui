import './Instructors.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Instructors() {
    return (
    <div style={{ textAlign: 'center' }}>
        <br /><br />
        <h1>Instructors</h1>
        <Container id="zamoraContainer">
            <br />
        <h1>Cresencio Zamora</h1>
        <h5>Founder & Head Professor</h5>
        <br />
        <Row>
            <Col id="colTest">
            <img src={process.env.PUBLIC_URL + './images/zamora2.png'} height="505px" width="505px" class="img-fluid" id="zamoraPhoto" />
            </Col>
            <Col id="resumeBody">
                <h3 className="titlesHeader">Titles:</h3>
                <br />
                <h5 className="titles">• 2014 IBJJF World NoGi Champion</h5>
                <br />
                <h5 className="titles">• 2016 IBJJF World Champion</h5>
                <br />
                <h5 className="titles">• 2015 SJJIF World Champion</h5>
                <br />
                <h5 className="titles">• 2017 JJWL World Champion</h5>
            </Col>
        </Row>
        <br />
        <Container>
            <Row>
            <Col>
                <p className="instructorDescription"> Professor Cresencio Zamora is 2nd degree black belt and received his black belt under Amilcar Cipili. He is a highly decorated jiu jitsu black belt and has over 90 medals during his career.</p>
                <p className="instructorDescription">He currently resides in Las Vegas, NV and is currently the founder and head instructor of Las Vegas Jiu-Jitsu.</p>
            </Col>
            </Row>
        </Container>
        </Container>
        <div  className="bruceBody">
        <br />
        <br />
        <Container id="bruceContainer">
        <h1>Bruce Morgenstern</h1>
        <h3>Black Belt • Instructor</h3>
        <br />
        <Row>
            <Col>
            <img src={process.env.PUBLIC_URL + './images/bruce.png'} height="505px" width="555px" class="img-fluid" id="brucePhoto" />
            </Col>
                {/* <Col className="resumeBody">
                    <h4>Titles:</h4>
                    <h4 className="titles">• 2014 IBJJF World NoGi Champion</h4>
                    <h4 className="titles">• 2016 IBJJF World Champion</h4>
                    <h4 className="titles">• 2015 SJJIF World Champion</h4>
                    <h4 className="titles">• 2017 JJWL World Champion</h4>
                </Col> */}
        </Row>
        
        <br />
            <Container>
                <Row>
                <Col>
                    <p>Professor Bruce Morgenstern is 2nd degree black belt and received his black belt under Amilcar Cipili.</p>
                <p>He currently resides in Las Vegas, NV.</p>
                </Col>
                </Row>
            </Container>
        </Container>
        <br />
        <br />
        </div>
    </div>
    )
}