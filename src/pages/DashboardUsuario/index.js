import React from 'react';
import {Grid, Main} from './styles';
import NavBar from '../../components/NavBar/Toolbar/index';
import Footer from '../../components/Footer/index';
import { avatarLinks } from '../../service/avatarLinks';
import Slider from "react-slick";
import useWindowDimensions  from '../../components/useWindowDimensions/index';


const Login = () => {
    //Utilizado para pegar o tamanho da tela
    const {width} = useWindowDimensions();

    //setttings do Slick
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "carousel",
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              
            }
          },
          
        ]
      };

    

    return(
        <Grid>
            <NavBar/>
            <Main width={width}>
                <div className="container">
                    <div className="cont-slider">
                        <Slider {...settings} >
                            {avatarLinks.map((item) =>(
                                <div key={item.id}>
                                    <img  src={item.url} alt={item.titulo}/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Main>
            <Footer/>
        </Grid>
    );
}
export default Login;

/*



*/
