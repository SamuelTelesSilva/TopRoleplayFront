import React from 'react';
import './styles';

const DashboardStreamer = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina','2');

    return(
        <div>
            Dashboard Streamer
        </div>
    );
}
export default DashboardStreamer;
