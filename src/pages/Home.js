import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Chatboticon from '../components/Chatboticon';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/Home.css';

const Home = () => {
  const galleryItems = [
    {
      image: '/images/IMG-20250528-WA0026.jpg',
      title: 'Exquisite Cuisine',
      description: 'Experience our carefully crafted dishes',
    },
    {
      image: '/images/IMG-20250528-WA0028.jpg',
      title: 'Perfect Ambiance',
      description: 'Dine in our elegant atmosphere',
    },
    {
      image: '/images/IMG-20250528-WA0030.jpg',
      title: 'Memorable Experience',
      description: 'Create lasting memories with us',
    },
  ];

  return (
    <div>
      <section className="logo-section">
        <Fade>
          <div className="logo-container">
            <div className="logo-background" />
            <img 
              src="/images/4789379-removebg-preview.png" 
              alt="Restaurant Logo" 
              className="logo-image"
            />
          </div>
          <div className="title-container">
            <h1 className="restaurant-title">Discover A New </h1>
            <h1 className="restaurant-title">Level of Taste</h1>
          </div>
        </Fade>
      </section>

      <section className="gallery-section">
        <Container fluid="xl">
          <Row className="g-4">
            {galleryItems.map((item, index) => (
              <Col key={index} lg={4} md={6} sm={12}>
                <Zoom delay={index * 200}>
                  <div className="image-card">
                    <img src={item.image} alt={item.title} className="card-image" />
                    <div className="card-overlay" />
                    <div className="card-content">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                </Zoom>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <ScrollToTop />
      <Chatboticon />
    </div>
  );
};

export default Home; 