import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SidebarCarousel.css'; // Import your own CSS for styling if needed

const SidebarCarousel = () => {
  return (
    <div className="sidebar-carousel">
      <Carousel>
        <Carousel.Item>
          <img
          
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/7212213.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Slide 1 Title</h3>
            <p>Slide 1 Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/7212213.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2 Title</h3>
            <p>Slide 2 Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/7212213.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 3 Title</h3>
            <p>Slide 3 Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}

export default SidebarCarousel;
