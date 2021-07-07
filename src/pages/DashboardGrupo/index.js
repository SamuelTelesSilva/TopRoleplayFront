import React from 'react';
import './styles';

const DashboardGrupo = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '4');

    return(
        <div>
            Dashboard Grupo
        </div>
    );
}
export default DashboardGrupo;
