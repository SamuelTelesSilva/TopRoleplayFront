import React from 'react';
import {Grid, Main, ImageGrid} from './styles';
import NavBar from '../../components/NavBar/Toolbar/index';
import Footer from '../../components/Footer/index';
import { avatarLinks } from '../../service/avatarLinks';
import Slider from "react-slick";
import useWindowDimensions  from '../../components/useWindowDimensions/index';


const DashboardUsuario = () => {

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

      //Tambem posso colocar todos os dados no state, e mandar pelo auth para qualquer componente
      const [selectValue, setSelectValue] = React.useState({});
      console.log(selectValue);
      

      //Função que esta recebendo todos os itens que foi enviado
      const pegarDados = (item) =>{
        console.log('id: '+ item.id);
        console.log('titulo: '+ item.titulo);
      }
    
      
    return(
        <Grid>
            <NavBar/>
            <Main width={width}>
                <div className="container">
                    <div>
                        asdasdasdadasdasdasdasdasdasd
                        asdasdadad
                        adsadadsadasdadasdasdasdadsasdads
                        adasdad
                    </div>
                    <ImageGrid>
                        {avatarLinks.map((item) =>(
                            <div key={item.id} className="cont-img" onClick={() => setSelectValue(item)}>
                                <img  src={item.url} alt={item.titulo}/>
                            </div>
                        ))}
                    </ImageGrid>
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
export default DashboardUsuario;
