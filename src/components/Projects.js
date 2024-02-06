import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import Activity from '../assets/img/ML_Activity.jpg';
import pet from '../assets/img/Petlocal.png';
import YOLO from '../assets/img/YOLO.png';
import adain from '../assets/img/adain.png';
import Web from '../assets/img/Web.png';
import Emal from '../assets/img/emal.png';
import Hack from '../assets/img/hack.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('first'); // state to track the active tab
  const [selectedProject, setSelectedProject] = useState(null); 
  const tabsToProjects = {
    first: [
    {
      id: 'engineering-capstone',
      title: 'Computer Engineering Capstone Project',
      description: 'Design & Development',
      explanation: 'This project was a part of my final year capstone project at the University of Queens Univsersity. The main objective of our project is to conceptualize, design, and construct a prototype of an early warning system capable of detecting ovarian cancer at its early stages. A core requirement for this system is that it must be non-invasive and user-friendly, ensuring it is accessible and appealing to the target demographic. We validated the systems accuracy and reliability through comprehensive testing, comparing its performance with existing data. The project used artificial intelligence and machine learning to make our early warning system better at predicting outcomes. The motivation behind the project stems from a deepseated commitment to womens health and the recognition of the current gaps in ovarian cancer diagnosis. This project also presents an opportunity to combine technology and healthcare, showcasing the potential of innovative solutions in addressing medical challenges.',
      imgUrl: projImg1,
      img: projImg1,
    },
    {
      id: 'qhacks2024',
      title: 'Queens University Hackathon 2024',
      description: 'Interactive Learning Platform Enhanced with AI', 
      explanation: 'My group and I wanted to create a tool that not only condenses text into manageable summaries but also aids in active learning by generating quizzes and sourcing credible materials, making study sessions both effective and engaging. We are currently taking a 4th year computer engineering course that is brand new this year. There are no previous quizzes or tests for this course and while we were studying for our first test, we wish we had previous tests to help us prepare. Therefore, we thought it would be neat to create a tool that creates practices tests/quizzes if you give it the class notes or lecture slides. StudyStream leverages cutting-edge AI to transform lengthy articles, papers, and documents into concise summaries and bullet points. It creates quizzes for self-testing and provides links to external resources related to the material inputted. We harnessed the power of OpenAIs API for natural language processing, combined with pdf.js for PDF text extraction. The app is built on a React front end, creating an interactive user experience. StudyStream runs on Node.js, ensuring a robust and scalable back-end architecture.',
      imgUrl: projImg2,
      img: projImg2,
    },
    {
      id: 'ML Activity Classification Model',
      title: 'ML Activity Classification Model',
      description: 'Data Science Accelerometer-based Activity Classification Desktop App',
      explanation: 'In the realm of machine learning and physical activity recognition, I spearheaded the development of an advanced desktop application that leverages accelerometer data to classify user activities. The application, built with Python and integrating TensorFlow and Pytorch, features a noise-reducing data preprocessing pipeline and a logistic regression model honed for high accuracy. Designed with user-friendly interfaces like Tkinter and PyQt5, it processes and labels activity data with ease, transforming complex algorithms into accessible, practical tools. This project not only underscores my expertise in data science but also my commitment to crafting solutions that bridge the gap between technical sophistication and everyday utility.',
      imgUrl: Activity,
      img: Activity,
    }
  ],
    second: [
    {
      id: 'SnoutSpotter: Peto Nose Localization',
      title: 'Computer Vision with Deep Learning Final Project',
      description: 'SnoutSpotter: Deep Learning for Pet Nose Localization', 
      explanation: 'SnoutSpotter represents the pinnacle of applying deep learning to the charming challenge of pet nose localization in computer vision. At its core, the project utilizes advanced convolutional neural networks to accurately detect and pinpoint the unique nasal features of various pets. Developed as part of the ELEC 475 course, this system demonstrates the intersection of affection for our furry companions with cutting-edge AI technology. By training our model on a diverse dataset of pet images, SnoutSpotter achieves remarkable precision, offering potential applications in pet recognition software and enhancing interactive pet toys and apps.',
      imgUrl: pet,
      img: projImg2,
    },
    {
      title: 'YODA: Precision in Motion - ResNet-18 Driven Car Detection',
      description: 'YODA: Precision in Motion - ResNet-18 Driven Car Detection',
      explanation: 'YODA (You Only Detect Anchors) harnesses the analytical prowess of ResNet-18, a formidable model from the PyTorch library, tailored for the intricate task of vehicle detection. This project marks a significant stride in computer vision, meticulously trained over 40 epochs and achieving an impressive 89.85% accuracy in distinguishing between vehicular presence (Car) and absence (NoCar). YODA embodies not just a technological achievement but also a conduit for continuous improvement, spotlighting areas ripe for optimization to refine the synergy between detection and localization.  ',
      imgUrl: YOLO,
    },
    {
      title: 'Artistic Algorithms: Revolutionizing Imagery with Neural Style Transfer',
      description: 'Artistic Algorithms: Revolutionizing Imagery with Neural Style Transfer',
      explanation: 'Embark on a visual odyssey with Artistic Algorithms, a project that stands at the crossroads of art and artificial intelligence. This endeavor showcases the power of Neural Style Transfer with Adaptive Instance Normalization (AdaIN), transforming ordinary images into extraordinary works of art. By leveraging AdaIN, the project transcends traditional boundaries, infusing the essence of iconic art styles into modern visuals. The process redefines the images texture and color palette, achieving a seamless synthesis that resonates with the strokes of historys revered artists. Explore a gallery where each piece is a dialogue between neural networks and the rich tapestry of artistic expression, illuminating the potential of AI as a collaborator in the creative process.',
      imgUrl: adain,
    }
  ],
    third: [
    {
      title: 'Database Dynamics: Crafting a Digital Culinary Experience',
      description: 'Data Management & Web Development Project',
      explanation: 'Delve into the Database Dynamics project, a digital foray into the culinary world, where technology meets taste at Drags Pizzeria. This venture is not just about serving delectable pizzas but also about creating a seamless user experience powered by robust database management systems. As part of the CMPE 332 course, this final website project presents a sophisticated online platform for Drags Pizzeria, designed to handle intricate data with finesse. The website is engineered to offer customers an intuitive interface for placing orders, while on the backend, it manages intricate datasets encompassing menus, ingredients, orders, and customer preferences. The underlying database is a testament to efficient design and query optimization, ensuring that every click leads to real-time, accurate information, from the kitchens inventory to the customers doorstep. Experience the confluence of savory selections and sophisticated software at Drags Pizzeria, where each slice is a byte of excellence.',
      imgUrl: Web,
    },
    {
      title: 'PhishNet: Guarding the Digital Frontier with AI',
      description: ' LSTM Email Phishing Detection Model',
      explanation: 'PhishNet stands as a bastion in the cybersecurity landscape, a project born from the fusion of Neural Networks and Genetic Algorithms to fortify digital communications against phishing attacks. Developed as part of the CMPE 452 curriculum, this final project presents an intelligent system designed to sniff out and prevent email-based frauds with unprecedented accuracy. Leveraging a sophisticated algorithm, PhishNet analyzes patterns and flags anomalies, mimicking the evolutionary efficiency of genetic selection to improve its detection strategies continually. The platform represents a significant leap in preventive digital security, ensuring users can navigate their inboxes with confidence, free from the concern of deceptive emails. Beyond its technical prowess, PhishNet is a testament to the potential of AI in combating cyber threats, underscoring the critical role of innovative technologies in safeguarding our digital future.',
      imgUrl: Emal,
    },
    {
      title: 'SecureOS: Fortifying the Core of Computing',
      description: 'Software Security & Ethical Hacking Project',
      explanation: 'SecureOS is an initiative born from the ELEC 377 Operating Systems course, focusing on the critical aspects of software security within operating systems. This project delves deep into the architecture of OS security, examining the intricate defenses that protect against the myriad of threats in the digital landscape. Implementing firewalls to encrypting data and securing kernel operations, SecureOS offers a comprehensive exploration of strategies that prevent unauthorized access and mitigate vulnerabilities. Lab-5, a cornerstone of this project, showcases the application of these protective measures in real-world scenarios, reinforcing the operating systems role as the guardian of software integrity. SecureOS is not just an academic endeavor; it is a commitment to upholding the sanctity of digital information, ensuring that every layer, from user applications to low-level system operations, is a stronghold against cyber threats.',
      imgUrl: Hack,
    }
  ],
};

const handleSelectTab = (tab) => {
  setActiveTab(tab);
  setSelectedProject(null); // Reset the selected project when changing tabs
};

const handleSelectProject = (project) => {
  setSelectedProject(project);
};


return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <h2>Projects</h2>
                <p className="project-description">Showcased here is a curated portfolio of my technical ventures, encompassing an array of domains from web development to the intricate realms of data science and machine learning. Each project is a beacon of my hands-on experience and dedication to pushing the boundaries of innovation. For a deeper dive into my methodologies or to browse through the codebase, feel free to navigate to my GitHub repository via GitHub Button in the navigation bar.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" onClick={() => handleSelectTab('first')}>School Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onClick={() => handleSelectTab('second')}>CV with Deep learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" onClick={() => handleSelectTab('third')}>Random</Nav.Link>
                    </Nav.Item>  
                  </Nav>
                  <Tab.Content id="slideInUp">
                    {['first', 'second', 'third'].map((tabKey) => (
                      <Tab.Pane eventKey={tabKey} key={tabKey}>
                        <Row>
                          {tabsToProjects[tabKey].map((project, index) => (
                            <ProjectCard
                              key={index}
                              project={project}
                              onSelectProject={() => handleSelectProject(project)}
                            />
                          ))}
                        </Row>
                        {selectedProject && activeTab === tabKey && (
                          <Row className="justify-content-md-center">
                            <div>
                            <h2>{selectedProject.title}</h2>
                              <p>{selectedProject.explanation}</p>
                            </div>
                            {/* <Col md={6} className="d-flex justify-content-center">
                              <img style={{ maxWidth: '100%', height: 'auto', padding: 10 }} src={selectedProject.img} alt={selectedProject.title} />
                            </Col>
                            <Col md={6} className="d-flex justify-content-center">
                              <img style={{ maxWidth: '100%', height: 'auto', padding: 10 }} src={selectedProject.imgUrl} alt={selectedProject.title} />
                            </Col> */}
                          </Row>
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
};

export default Projects;