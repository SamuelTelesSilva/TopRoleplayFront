import React, {useState, useEffect} from 'react';
import { Container } from './styles';
import Slider from "react-slick";
import { getAllSelect } from '../../../service/clipeService';
import useWindowDimensions from '../../useWindowDimensions';


const CarouselHome = (props) => {

    const [clips, setClips] = useState([]);
    const { width } = useWindowDimensions();

    useEffect(()=>{
      getAllSelect().then( response => {
        setClips(response.data.content);
      }).catch(e=>{
        console.log(e);
      });
    }, []);

    //setttings do Slick
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.7,
      slidesToScroll: 1,
      initialSlide: 0,
      className: "carousel",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
            arrows: false,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1.10,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
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
          {
            clips.length === 0 ? '' : (
              <Slider {...settings} >
                {props.children}
              </Slider>
            )
          }
        </div>
      </Container>
    );
}
export default CarouselHome;