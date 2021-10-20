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
    imgCapa: 'https://pbs.twimg.com/profile_banners/212362291/1617404059/1500x500',
    link: '/streamer/2/LOUD%20Coringa'
  },

  {
    id: 2,
    streamer: 'Gabepeixe',
    isTwitch: true,
    imgCapa: 'https://pbs.twimg.com/profile_banners/2885549001/1565001664/1500x500',
    link: '/streamer/1/Gabepeixe'
  },
  
  {
    id: 3,
    streamer: 'Piuzinho',
    isTwitch: false,
    imgCapa: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/131342495_209382564013594_5246409661660566257_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=c7hkEtfgmRsAX8S9Pct&_nc_ht=scontent-gru2-2.xx&oh=0be57475dae37112dedc2ca90c1797af&oe=618B5C6B',
    link: '/streamer/4/Piuzinho'
  },
  {
    id: 4,
    nome: 'Luquet4',
    imgCapa: 'https://i.postimg.cc/G3j166qB/luqueta.jpg',
    link: '/streamer/5/Luquet4'
  },
];


export const CidadeDestaque = [
  
  {
    id: 1,
    nome: 'Cidade Alta',
    imgCapa: 'https://i.postimg.cc/FKYqRByx/cidade-alta.png',
    link: '/cidade/1/Cidade%20Alta'
  },
  {
    id: 2,
    nome: 'Complexo',
    imgCapa: 'https://pbs.twimg.com/profile_banners/1426649381000949760/1629475654/1500x500',
    link: '/cidade/3/Complexo'
  }
];


export const GrupoDestaque = [
  
  {
    id: 1,
    nome: 'Laranjas',
    imgCapa: 'https://pbs.twimg.com/profile_banners/1422605305922428929/1633309841/1500x500',
    link: '/grupo/2/Laranjas'
  },

  {
    id: 2,
    nome: 'Grota',
    imgCapa: 'https://i.postimg.cc/G3j166qB/luqueta.jpg',
    link: '/grupo/3/GROTA'
  },
  {
    id: 3,
    nome: 'Elements',
    imgCapa: 'https://i.ytimg.com/vi/pBobysZQiBk/maxresdefault.jpg',
    link: '/grupo/4/Elements'
  },
];


const CarouselMain = (props) => {

  const { width } = useWindowDimensions();


  //setttings do Slick
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.0,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "carousel",
    

    responsive: [
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 1.0,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
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

          />
        </Link>
      ))
    );
  }

  if(props.page === "evento"){
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
