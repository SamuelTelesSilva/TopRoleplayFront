import React from 'react';
import { Container } from './styles';
import Slider from "react-slick";
import useWindowDimensions from '../../useWindowDimensions';
import ReactPlayer from 'react-player';

/**
 *  Esse componente não esta completo, tem nmuitos  bugs para resolver 
*/

export const streamersVideoPlayer = [
  {
    id: 1,
    streamer: 'GabePeixe',
    isTwitch: false,
    playerVideo: 'https://www.twitch.tv/harcknes'
  },

  {
    id: 2,
    streamer: 'Gaules',
    isTwitch: true,
    playerVideo: 'https://www.twitch.tv/gaules'
  },
  {
    id: 3,
    streamer: 'Coringa',
    isTwitch: true,
    playerVideo: 'https://www.twitch.tv/chockytv'
  }
];




const CarouselVideoPlayer = () => {

  const { width } = useWindowDimensions();

  //setttings do Slick
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.20,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "carousel",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1.30,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.55,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.55,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        }
      },
      
    ]
  };

  console.log()
  return(
    <Container width={ width }>
      <div className="cont-slider">
        <Slider {...settings} >
          
          {
            streamersVideoPlayer.map((item) => (
              <div className="player-react" key={item.id}>
                <ReactPlayer 
                  url={item.playerVideo}
                  height="100%"
                  width="100%"
                />
              </div>
            ))
          }
         
        </Slider> 
      </div>
    </Container>
  );
}
export default CarouselVideoPlayer;


/**
 * {
            streamersVideoPlayer.map((item) => (
              <div className="player-react" key={item.id}>
                <ReactPlayer 
                  url={item.playerVideo}
                  height="100%"
                  width="100%"
                />
              </div>
            ))
          }


          // iframe para ver videos do facebook
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F" width="700" height="100%"/>
 */