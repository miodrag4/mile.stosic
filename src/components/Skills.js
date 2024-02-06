import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'; // if using circular progress bars
import 'react-circular-progressbar/dist/styles.css'; // default styling for circular progress bars
import skills from '../assets/img/skills.jpg';
import TrackVisibility from 'react-on-screen';

const skillsData = [
  { skill: "Python", level: 85 },
  { skill: "Java", level: 75 },
  { skill: "SQL", level: 80 },
  { skill: "CSS", level: 75 },
  { skill: "Data Science", level: 90 },
];


export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <section className="about" id="about-me">
                          <div className="container skill-container">
                            <TrackVisibility>
                              {({ isVisible }) =>
                                <div className="skilllls"> 
                                  <img src={skills} alt="Header Img"/>
                                </div>}
                            </TrackVisibility>
                          </div>
                        </section>
                        <h2>Skills</h2>
                        <p> Delve into my repertoire of skills where innovation 
                          meets application, showcasing expertise in programming, data analytics, and system design, 
                          ready to tackle the complex challenges of the tech-driven world.</p>
                          <div className="skills-container">
                            {skillsData.map((data, index) => (
                              <div key={index} className="skill-item">
                                <CircularProgressbar value={data.level} text={`${data.level}%`} />
                                <h3>{data.skill}</h3>
                              </div>
                            ))}
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}