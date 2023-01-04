import Carousel from 'react-bootstrap/Carousel';

const ProjectsGames = () =>{
    return(
      <div className="carouselContainer" id='games'>
      <Carousel fade className="carousel">
      <Carousel.Item className='slideContainer'>
        <img
          className="projImg picture"
          fluid="true" src= {require("../resources/jeopardy_game.png")}
          alt="First slide"
        />
        <div className='captionBlock1'>
        <Carousel.Caption>
          <h3>Jeopardy</h3>
          <p>A classic trivia game to test your all around knowledge.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className='slideContainer'>
        <img
          className="projImg picture"
          fluid="true" src= {require("../resources/profit-margin-simulation_game.png")}
          alt="Second slide"
        />
        <div className='captionBlock2'>
        <Carousel.Caption>
          <h3>Simulation Game</h3>
          <p>An operations simulation game to test your decision making and financial acumen.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      
      <Carousel.Item className='slideContainer'>
        <img
          className="projImg picture"
          fluid="true" src= {require("../resources/tic-tac-toe_game.png")}
          alt="Third slide"
        />

      <div className='captionBlock3'>
        <Carousel.Caption>
          <h3>Tic Tac Toe</h3>
          <p>
            A simple, but classic game!
          </p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default ProjectsGames