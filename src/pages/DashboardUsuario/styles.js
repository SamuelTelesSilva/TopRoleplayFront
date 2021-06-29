import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Grid = styled.div`
    display: grid;
    grid-template-rows: 70px auto 87px;
    grid-template-areas: 
        'H'
        'M'
        'F'
    ;
    height: 100%;

    /* Mobile de 0 até 640px*/
    @media screen and (max-width: 640px){ 
        grid-template-rows: 70px auto 87px;
    }
`;

export const Main = styled.div`
    grid-area: M;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;

    .container{
        display: block;
        width: 650px;
        height: 100%;
    }

    .cont-slider{
        display: none;  
    }

    @media screen and (max-width: 700px){
        .container{
            width: 100%;
            margin: 0px 1% 0px 1%;
        }
        .carousel{
            width: ${props => props.width-50}px;
        }

        .cont-slider{
            display: flex;
            width: 100%;
            justify-content: center;

            img{
                width: 100%;
                height: auto;
                padding: 10px;
                border-radius: 25px;
            }
        }
    }
`;

export const ImageGallery = styled.div`
    display: block;
    margin-bottom: 25px;
    

    .title-gallery{
        display: flex;
        justify-content: center;
        color: white;
        margin-bottom: 10px;
    }

    .imgGallery{
        display: flex;
        flex-wrap: wrap;
    }

    .cont-img{
        margin-left: 7.5px;
        margin-top: 5px;
        border: 1px solid white;
        border-radius: 50% 255% 50% 255%;
    }

    img{
        width: 150px;
        height: 150px;
        padding: 10px;
        border-radius: 50%;

        :hover{
            cursor: pointer;
            border: 1px solid whitesmoke;
        }
    }

    @media screen and (max-width: 700px){
        display: none;
    }

`;

export const ImagePerfil = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;

    .img-perfil{
        width: 100%;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        
        img{
            width: 100%;
            max-width: 250px;
            max-height: 250px;
            border-radius: 50%;
        }
    }
`;


export const FormEditarPerfil = styled.div`


    margin: 50px 0px 10px 0px; 
    
    .aux-cont{
        width: 650px;
        height: 100%;

    }

    .area-form{
        display: flex;
        width: 100%;
        
        form{
            width: 100%;
        }

        div label{
            display: flex;
            justify-content: center;
            color: white;
            margin-bottom: 5px;
        }

        input{
            width: 100%;
            height: 35px;
            border-radius: 15px;
            padding-left: 13px;
            background-color: var(--corFundoPrincipal);
            margin-bottom: 25px;
            border: 2px solid white;
            color: white;
        }

    }

    .area-button{
        display: flex; 
        width: 100%;
        justify-content: center;
        margin-top: 20px;
    }

    .button-entrar, .button-cadastrar{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .button-entrar{
        a{
            width: 100%;
        }
    }

    .button-cadastrar{
        margin-left: 5px;
    }

    .input-button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--corTerciaria);
        border-radius: 5px;
        color: white;
        width: 100%;
        max-width: 250px;
        height: 50px;
        font-size: 16px;
        :hover{
            cursor: pointer;
        }
    }

    .msgError{
        color: var(--corTerciaria);
        font-size: 14px;
        word-break: break-all;
    }
    
    @media screen and (max-width: 640px){
        

        .aux-cont{
            display: block;
            width: 100%;
            margin: 0px 1% 0px 1%;
        }

        .area-button{
            display: block; 
            margin-top: 10px;
        }

        .button-cadastrar{
            margin-bottom: 10px;
            margin-left: 0px;
        }

        .area-form{
            input{
                margin-bottom: 15px;
            }
        }

        .input-button{
            max-width: 100%;
        }
    }

`;



