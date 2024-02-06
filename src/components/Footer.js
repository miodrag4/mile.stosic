import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from '../assets/img/github-mark-white.svg';
import mascot from '../assets/img/mascot.jpg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <img src={mascot} alt="Logo" style = {{width: 70}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon2">
              <a href="https://www.linkedin.com/in/mile-stosic-b07856209/" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/mile.stosic.948" target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://github.com/miodrag4" target="_blank" rel="noopener noreferrer">
              <img src={navIcon3} alt="Github" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved. Miodrag Stosic.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}