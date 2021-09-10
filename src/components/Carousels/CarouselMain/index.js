import React from 'react';
import { Container } from './styles';
import Slider from "react-slick";
import useWindowDimensions from '../../useWindowDimensions';
import CardCarousel from '../CardCarousel';
import {Link} from 'react-router-dom';

export const streamersDestaque = [
  
  {
    id: 1,
    streamer: 'Coringa',
    isTwitch: true,
    imgCapa: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/36852b101728679.5f259b7eed03d.png',
    link: '/streamer-detail/128'
  },

  {
    id: 2,
    streamer: 'Gaules',
    isTwitch: true,
    imgCapa: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d5c84a103630841.5f510d0e75811.jpg',
    link: '/streamer-detail/124'
  },
  
  {
    id: 3,
    streamer: 'GabePeixe',
    isTwitch: false,
    imgCapa: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/211403535_342050333950310_1350648798444546705_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=2J4SLAUvQoIAX9F7HxJ&_nc_ht=scontent-gru2-2.xx&oh=af876de1b0ea225894edbd5ccec569c2&oe=61561D50',
    link: '/streamer-detail/123'
  },
];


export const CidadeDestaque = [
  
  {
    id: 1,
    nome: 'Cidade Alta',
    imgCapa: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/159958443_268427684735114_1575449350818617925_n.png?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=PY0_Y7_4OuQAX-YBG3D&_nc_ht=scontent-gru1-2.xx&oh=b1e0a7942a5d61d08123be630293bc26&oe=615FFB60',
    link: '/cidade-detail/28'
  },

  {
    id: 2,
    nome: 'Complexo',
    imgCapa: 'https://gkpb.com.br/wp-content/uploads/2021/08/gkpb-fluxo-gta-rp.jpg',
    link: '/cidade-detail/27'
  },
  
  {
    id: 3,
    nome: 'Hype',
    imgCapa: 'https://i.ytimg.com/vi/KaL5v-iI35Q/maxresdefault.jpg',
    link: '/cidade-detail/22'
  },
];


export const GrupoDestaque = [
  
  {
    id: 1,
    nome: 'Laranjas',
    imgCapa: 'https://i.ytimg.com/vi/eo_n_-fhOek/maxresdefault.jpg',
    link: '/grupo-detail/4'
  },

  {
    id: 2,
    nome: 'Grota',
    imgCapa: 'https://gkpb.com.br/wp-content/uploads/2021/08/gkpb-fluxo-gta-rp-696x392.jpg',
    link: '/grupo-detail/4'
  },
  {
    id: 3,
    nome: 'Elements',
    imgCapa: 'https://i.ytimg.com/vi/pBobysZQiBk/maxresdefault.jpg',
    link: '/grupo-detail/4'
  },
];


const CarouselMain = (props) => {

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

  let element = (
    <div>
      Carregando...
    </div>
  )

  if(props.page === "streamer"){
    element = (
      streamersDestaque.map((streamer) =>(
        <Link
          to={streamer.link}
          key={streamer.id}
        >
          <CardCarousel 
            urlImgCard={streamer.imgCapa} 
            imgAlt={streamer.streamer}
            key={streamer.id}
            onclick={() => console.log("adsdasdasdasd")}
          />
        </Link>
      ))
    );
  }
  if(props.page === "cidade"){
    element = (
      CidadeDestaque.map((city) =>(
        <Link
          to={city.link}
          key={city.id}
        >
          <CardCarousel 
            urlImgCard={city.imgCapa} 
            imgAlt={city.nome}
            key={city.id}
            onclick={() => console.log("adsdasdasdasd")}
          />
        </Link>
      ))
    );
  }
  if(props.page === "grupo"){
    element = (
      GrupoDestaque.map((grupo) =>(
        <Link
          to={grupo.link}
          key={grupo.id}
        >
          <CardCarousel 
            urlImgCard={grupo.imgCapa} 
            imgAlt={grupo.nome}
            key={grupo.id}
            onclick={() => console.log("adsdasdasdasd")}
          />
        </Link>
      ))
    );
  }

  return(
    <Container width={ width }>
      <div className="cont-slider"> 
        <Slider {...settings} >
          {element}
        </Slider>
      </div>
    </Container>
  );
}
export default CarouselMain;
