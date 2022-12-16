import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';



const ProjectsApps = () =>{
    return(
      <div className="carouselContainer" id='projects'>
        <Carousel fade className="carousel">
      <Carousel.Item className='slideContainer'>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/clblogapp_screenshot.jpg")}
          alt="First slide"
        />
        <div className='captionBlock1'>
        <Carousel.Caption>
          <h3>Intro to Software Engineering</h3>
          <p>A blog where developers can write about their start to software engineering.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className='slideContainer'>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/project_manager_app_screenshot.jpg")}
          alt="Second slide"
        />
        <div className='captionBlock2'>
        <Carousel.Caption>
          <h3>Project Manager App</h3>
          <p>An application to help Project Managers manage projects!</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      
      <Carousel.Item className='slideContainer'>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/reactmovieapp_screenshot.jpg")}
          alt="Third slide"
        />

      <div className='captionBlock3'>
        <Carousel.Caption>
          <h3>Movie Search App</h3>
          <p>
            An application to find and read more information about your favorite movie!
          </p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default ProjectsApps