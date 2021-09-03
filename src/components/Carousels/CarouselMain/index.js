import React from 'react';
import { Container } from './styles';
import Slider from "react-slick";
import useWindowDimensions from '../../useWindowDimensions';
import CardCarousel from '../CardCarousel';


export const streamersDestaque = [
  
  {
    id: 1,
    streamer: 'Coringa',
    isTwitch: true,
    imgCapa: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/36852b101728679.5f259b7eed03d.png'
  },

  {
    id: 2,
    streamer: 'Gaules',
    isTwitch: true,
    imgCapa: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d5c84a103630841.5f510d0e75811.jpg'
  },
  
  {
    id: 3,
    streamer: 'GabePeixe',
    isTwitch: false,
    imgCapa: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/211403535_342050333950310_1350648798444546705_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=2J4SLAUvQoIAX9F7HxJ&_nc_ht=scontent-gru2-2.xx&oh=af876de1b0ea225894edbd5ccec569c2&oe=61561D50'
  },
];

const CarouselMain = () => {

  const { width } = useWindowDimensions();

  //setttings do Slick
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "carousel",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        }
      },
      
    ]
  };

  return(
    <Container width={ width }>
      <div className="cont-slider"> 
        <Slider {...settings} >
          {streamersDestaque.map((streamer) =>(
            <CardCarousel 
              urlImgCard={streamer.imgCapa} 
              imgAlt={streamer.streamer}
              key={streamer.id}
              onclick={() => console.log("adsdasdasdasd")}
            />
          ))}
        </Slider>
      </div>
    </Container>
  );
}
export default CarouselMain;