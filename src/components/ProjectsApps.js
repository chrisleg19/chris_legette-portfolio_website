import Carousel from 'react-bootstrap/Carousel';




const ProjectsApps = () =>{
    return(
      <div className="carouselContainer" id='projects'>
        <Carousel fade className="carousel">
          
      <Carousel.Item className='slideContainer'>
       
        <img
          className="projImg picture"
          fluid="true" src= {require("../resources/software-engineering_blog.png")}
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
          className="projImg picture"
          fluid="true" src= {require("../resources/project_manager_app.png")}
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
          className="projImg picture"
          fluid="true" src= {require("../resources/react_movie_app.png")}
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