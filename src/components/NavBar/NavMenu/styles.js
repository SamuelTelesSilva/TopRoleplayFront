import styled from 'styled-components';


export const Container = styled.div`
    .nav{

        ul{
            display: block;
        }

        li{
            list-style: none;
            
        }

        a{
            text-decoration: none;
            color: white;
        }
    }


    @media screen and (min-width: 640px){
        .nav{
            border: 1px solid white;
            ul{
                display: flex;
            }

            li{
                margin-right: 15px;
            }
        }
    }
`;
  