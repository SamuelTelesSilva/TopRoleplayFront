import styled from 'styled-components';

export const AreaAssociation = styled.div`
    display: block;
    margin: 16px 0px 16px 0px;
    width: 100%;
    border: 1px dashed var(--corTerciaria);
    padding: 10px 10px 0px 10px;

    .title-association{
        display: flex;
        justify-content: center;
        width: 100%;
        color: var(--corTerciaria);
        font-size: 18px;
        margin-bottom: 15px;
    }

    .content-association{
        display: flex;
        justify-content: space-between;
    }

    .area-select-streamer, .area-select-city{
        display: block;
        width: 250px;
    }

    .area-select-streamer select, .area-select-city select{
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding-left: 5px;
    }

    .title-update{
        margin-top: 10px;
    }


    @media screen and (max-width: 1200px){ 
        .content-association{
            display: block;
        }
    }
    
`;