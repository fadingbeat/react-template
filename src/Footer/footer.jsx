import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <nav>
              <ul>
                <li>
                  <p>pet-facts.com</p>
                </li>
                <li>About us</li>
                <li>Careers</li>
                <li>FAQ</li>
              </ul>
            </nav>
          </Col>
          <Col className="footer-col-2" style={{ paddingTop: "3px" }}>
            <nav>
              <ul>
                <li>
                  <p>our brands</p>
                </li>
                <li>Supercoat</li>
                <li>Fancy Feast</li>
                <li>Pro Plan</li>
                <li>Beyond</li>
              </ul>
            </nav>
          </Col>
          <Col>
            <nav>
              <ul>
                <li>
                  <p>contact us</p>
                </li>
                <li>Contact us</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingBottom: "80px", letterSpacing: "0.07px" }}>
            Copyright is a legal right, existing in many countries, that grants
            the creator of an original work exclusive rights to determine
            whether, and under what conditions, this original work may be used
            by others.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
