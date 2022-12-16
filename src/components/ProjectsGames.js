import Carousel from 'react-bootstrap/Carousel';

const ProjectsGames = () =>{
    return(
      <div className="carouselContainer" id='games'>
      <Carousel fade className="carousel">
      <Carousel.Item className='firstSlideContainer'>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/Jeopardy_screenshot.jpg")}
          alt="First slide"
        />
        <div className='captionBlock1'>
        <Carousel.Caption>
          <h3>Jeopardy</h3>
          <p>A classic trivia game to test your all around knowledge.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className='secondSlideContainer'>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/Profit_margin_game_screenshot.jpg")}
          alt="Second slide"
        />
        <div className='captionBlock2'>
        <Carousel.Caption>
          <h3>Simulation Game</h3>
          <p>An operations simulation game to test your decision making and financial acumen.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100 picture"
          fluid src= {require("../resources/tic-tac-toe_screenshot.jpg")}
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