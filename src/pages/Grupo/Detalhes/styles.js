import styled from 'styled-components';
import {Heart, HeartFill} from '@styled-icons/bootstrap';

export const Container = styled.div`
    display: block;
    
    margin: 16px 0px 16px 0px;
    color: white;
    height: auto;
    width: 100%;
    max-width: 1080px;


    .cont-player-react{
        display: flex;
        width: 100%;
        justify-content: center;
        
        margin-top: 8px;
    }


    .player-react{
        display: flex;
        width: 640px;
        height: auto;
        
    }

    .cont-perfil-group{
        display: flex;
        width: 100%;
        border: 1px solid var(--corSecundaria);
        
        margin: 16px 0px 16px 0px; 
        
    }

    .img-perfil-group{
        
        width: 450px;
        height: auto;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .detail-perfil-group{
        display: flex;
        align-items: center;
        margin-left: 10px; 
    }

    .detail-group{
        display: block;
    }


    .cont-redes-sociais{
        display: flex;
        justify-content: center;
        margin: 8px 0px 16px 0px;
        
        a{
            color: white;
            text-decoration: none;
        }
    }

    .rede-social{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: rgb(86,2,204, 0.7);
        border-radius: 5px;
        margin-right: 8px;
        
        :hover{
            cursor: pointer;
            background-color: rgb(86,2,204, 1);
            box-shadow: inset 0 0 1em var(--corSecundaria), 0 0 1em var(--corSecundaria);
        }
    }

    .cont-votar-group{
        display: flex;
        justify-content: center;
        width: 100%;
        
    }

    .area-content-leader, .area-content-member{
        display: flex;
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 460px;
        border: 1px solid red;

        .area-cards-lider, .area-cards-membro{
            border: 1px solid red;
            max-width: 260px;
            margin: 8px 9px 0px 0px;
        }
    }


    @media screen and (max-width: 640px){ 
        width: 100%;

        .player-react{
            display: flex;
            width: 100%;
            max-width: 640px;
        }

        .cont-redes-sociais-aux{
            display: flex;
            justify-content: center;
        }

        .cont-redes-sociais{
            display: block;
            margin: 8px 0px 16px 0px;
        }

        .rede-social{
            margin: 0px 0px 8px 0px;
        }

        .img-perfil-group{
            width: 100%;
            height: auto;

            img{
                width: 100%;
                height: 100%;
            }
        }

        .cont-perfil-group{
            display: block;
            width: 100%;
        }

        .detail-perfil-group{
            display: flex;
            justify-content: center;
            margin-left: 0px; 
        }

        .area-content{
            display: flex;
            width: 100%;
            height: auto;
            flex-wrap: wrap;
        
            .area-cards-lider{
                width: 100%;
                margin: 8px 0px 0px 0px;
            }
        }

    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;


export const HeartFull = styled(HeartFill)`
    width: 80px;
`;

export const HeartEmpty = styled(Heart)`
    width: 80px;
`;
