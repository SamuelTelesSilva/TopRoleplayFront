import React from 'react';
import './styles';

const DashboardClipe = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '3');

    return(
        <div>
            Dashboard Clipe
        </div>
    );
}
export default DashboardClipe;
