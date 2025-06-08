import React, { useState, useEffect, memo } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/Menu.css';

// Memoized MenuItem component for better performance
const MenuItem = memo(({ image, title, description, price }) => (
  <Zoom>
    <div className="menu-item">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        width="300"
        height="200"
      />
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="price">{price}</span>
    </div>
  </Zoom>
));

const Menu = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselItems = [
    {
      image: '/images/fulldish.jpg',
      title: 'Popular Dishes',
      description: 'Discover our most loved Indian delicacies'
    },
    {
      image: '/images/vegetarian.avif',
      title: 'Vegetarian Specials',
      description: 'Pure vegetarian dishes made with love'
    },
    {
      image: '/images/chef Vaibhav with dishes.JPG',
      title: "Chef's Specials",
      description: 'Handcrafted dishes by our expert chefs'
    }
  ];

  const appetizers = [
    {
      image: './images/samosa-7180078_1280.jpg',
      title: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: '₹80'
    },
    {
      image: '/images/paneer-7043097_1280.jpg',
      title: 'Paneer Tikka',
      description: 'Grilled cottage cheese with spices and vegetables',
      price: '₹250'
    },
    {
      image: '/images/Dahi-Vada-H1.webp',
      title: 'Dahi Bhalla',
      description: 'Lentil dumplings in spiced yogurt sauce',
      price: '₹150'
    }
  ];

  const mainCourse = [
    {
      image: '/images/Kaju-Masala.jpg',
      title: 'Butter Kaju',
      description: 'Tender  in rich tomato-butter gravy',
      price: '₹350'
    },
    {
      image: '/images/dal-makhani7.webp',
      title: 'Dal Makhani',
      description: 'Black lentils cooked overnight with cream',
      price: '₹280'
    },
    {
      image: '/images/paneer-7043097_1280.jpg',
      title: 'Palak Paneer',
      description: 'Cottage cheese cubes in spinach gravy',
      price: '₹300'
    }
  ];

  const breadsAndRice = [
    {
      image: '/images/naan.jpg',
      title: 'Assorted Naan',
      description: 'Butter, Garlic, or Plain Naan bread baked in tandoor',
      price: '₹60'
    },
    {
      image: '/images/biryani.jpg',
      title: 'Hyderabadi Biryani',
      description: 'Fragrant basmati rice cooked with aromatic spices',
      price: '₹380'
    },
    {
      image: '/images/amritsari-kulcha-1.jpg',
      title: 'Amritsari Kulcha',
      description: 'Stuffed bread with spiced potatoes or paneer',
      price: '₹90'
    }
  ];

  const desserts = [
    {
      image: '/images/gulab-jamun.jpg',
      title: 'Gulab Jamun',
      description: 'Soft milk dumplings in sweet rose-flavored syrup',
      price: '₹150'
    },
    {
      image: '/images/Rasmalai.jpg',
      title: 'Rasmalai',
      description: 'Soft cottage cheese patties in creamy saffron milk',
      price: '₹180'
    },
    {
      image: '/images/Gajar-Halwa-Indian.webp',
      title: 'Gajar Ka Halwa',
      description: 'Traditional carrot pudding with nuts and cardamom',
      price: '₹200'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="menu-container">
      <Fade bottom>
        <h2 className="section-title">Our Menu</h2>
      </Fade>
      
      <Fade>
        <div className="menu-carousel">
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div 
                key={index} 
                className={`carousel-item ${index === activeSlide ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                style={{
                  transform: `translateX(${(index - activeSlide) * 100}%)`
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  width="800"
                  height="400"
                />
                <div className="carousel-caption">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-prev" onClick={prevSlide}>&lt;</button>
          <button className="carousel-next" onClick={nextSlide}>&gt;</button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu-category">
          <h3>Appetizers</h3>
          <div className="menu-items">
            {appetizers.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu-category">
          <h3>Main Course</h3>
          <div className="menu-items">
            {mainCourse.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu-category">
          <h3>Breads & Rice</h3>
          <div className="menu-items">
            {breadsAndRice.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu-category">
          <h3>Desserts</h3>
          <div className="menu-items">
            {desserts.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Menu; 