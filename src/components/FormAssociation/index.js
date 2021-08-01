import React from 'react';
import { AreaAssociation } from './styles';

const FormAssociation = (props) => {
    return(
        <AreaAssociation>
            <div className="title-association">
                {props.titleAssociation}
            </div>
            <div className="content-association">
                <div>
                    <div>Streamer Atual</div>
                    <div className="area-select-streamer">
                        {props.areaCurrentStreamer}
                    </div>
                </div>
                <div>
                    <div>Cidade Atual</div>
                    <div className="area-select-city">
                        {props.areaCurrentCity}
                    </div>
                </div>
            </div>
            <div>
                <div className="title-update">Selecione a Cidade para Substituir a Atual</div>
                <div className="area-select-city">
                    {props.areaCity}
                </div>
            </div>
            {props.children}
        </AreaAssociation>
    );
}
export default FormAssociation;