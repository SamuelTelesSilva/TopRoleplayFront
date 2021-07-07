import React from 'react';
import './styles';

const DashboardEvento = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '5');

    return(
        <div>
            Dashboard Evento
        </div>
    );
}
export default DashboardEvento;
