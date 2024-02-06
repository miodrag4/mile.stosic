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
                        <p> Hello! I'm Miodrag Stosic, a diligent Fourth Year Computer Engineering student at Queen’s University, where my academics intersect with my passion for technology and innovation, especially within the financial sector. My forte lies in creating robust algorithmic solutions and harnessing data analytics, thanks to my proficiency in languages like Python and Java. I thrive on tackling complex challenges, translating intricate problems into meaningful insights and actionable results. Beyond the classroom, I've honed my skills as a Software Developer for Queen’s Algorithmic Network & Trading Team, enhancing trading algorithms and accuracy with meticulous data analysis. As a Propulsion Design Engineer on the Queen’s Hyperloop Design Team, I've contributed significantly to the development and performance improvement of propulsion systems. I'm also deeply involved in a range of projects, from early cancer detection systems using machine learning to developing a phishing email detection model with an impressive accuracy rate. These projects reflect not only my technical capabilities but also my commitment to applying knowledge for impactful solutions. As I navigate through the final lap of my undergraduate journey, I'm on the lookout for opportunities that resonate with my drive for innovation and collaborative spirit. If you're interested in learning more about my work or delving into the technicalities, feel free to explore my projects on GitHub or reach out through my contact page.</p>
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