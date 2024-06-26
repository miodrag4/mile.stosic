import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css'; // default styling for circular progress bars
import detail from '../assets/img/detail.png';
import TrackVisibility from 'react-on-screen';

export const Aboutme = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>
                          I am Miodrag Stosic, a Computer Engineering graduate from Queen’s University with a strong passion for technology and innovation. My expertise lies in algorithmic solutions and data analytics, with proficiency in Python, Java, and SQL.
                        </p>
                        <p>
                          As a Software Developer with Queen’s Algorithmic Network & Trading Team, I enhanced trading algorithms, improving execution speed by 15% and accuracy by 20%. In my role as a Propulsion Design Engineer for the Queen’s Hyperloop Design Team, I led the design and testing of a propulsion sub-system, resulting in a 12% performance boost. Additionally, as a Data Analyst at Custom Biologics, I managed and analyzed complex datasets to support bioanalytical studies.
                        </p>
                        <p>
                          I have successfully developed projects like an award-winning early detection system for ovarian cancer and a neural network model for phishing email detection, achieving a high accuracy rate. My technical skills include Google Data Analytics, Git, HTML, CSS, PowerBI, Tableau, TensorFlow, and LookerStudio.
                        </p>
                        <p>
                          Beyond work, I enjoy Catan, music, FPS games, boxing, running, festivals, investing, cryptocurrency, traveling, hiking, and reading. Explore my portfolio to see more about my work and projects. Let's connect and create something amazing together!
                        </p>
                    </div>
                </div>
                <section className="about" id="about-me">
                  <div className="container detail-container">
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className="detail"> 
                          <img src={detail} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
                  </div>
                </section>
            </div>
        </div>
    </section>
  )
}