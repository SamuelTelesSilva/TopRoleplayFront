import styled from 'styled-components';

export const Container = styled.div`
    grid-area: ML;
    display: block;
    background-color: var(--corSecundaria);
    width: 100%;
    height: 100%;
`;

export const PerfilUsuario = styled.div`
    display: block;
    background-color: var(--corSecundaria);
    padding: 20px 45px 0px 45px; /* O width da barra é 180px,  width do cont-avatar-user é 120, somando os padding da 180px */
    width: 100%;
    height: 150px;

    .cont-avatar-user{
        width: 90px;
        height: 80px;
        border-radius: 50%;

        img{
            border-radius: 50%;
            width: 90px;
            height: 80px;
        }
    }

    .cont-user-name{
        display: flex;
        justify-content: center;
        margin-top: 15px;
        width: 100%;
        color: white;
    }
`;

export const MenuLateral = styled.div`
    display: block;
    padding: 16px 10px 0px 10px;
    background-color: var(--corSecundaria);
    width: 100%;
    height: 400px;

    .cont-button{
        
    }

    

    .normal{
        cursor: pointer;
        background: white;
        color: var(--corSecundaria);

        :hover{
            cursor: pointer;
            background: var(--corTerciaria);
            color: white;
        }
    }

    .ativado{
        cursor: pointer;
        background: var(--corTerciaria);
        color: white;
    }
`;

export const MenuConf = styled.div`
    display: block;
    padding: 10px 10px 0px 10px;
    background-color: var(--corSecundaria);
    width: 100%;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    max-width: 250px;
    height: 50px;
    font-size: 16px;
    margin-bottom: 8px; 
    cursor: pointer;
    background: white;
    color: var(--corSecundaria);

    :hover{
        cursor: pointer;
        background: var(--corTerciaria);
        color: white;
    }

    @media screen and (max-width: 640px){ 
        max-width: 100%;   
    }
`;

export const ButtonToggle = styled(Button)`

  ${props => props.active ? `
        cursor: pointer;
        background: var(--corTerciaria);
        color: white;
    ` : 
  'none'}
`;
