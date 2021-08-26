import React from 'react';
import './styles';

const DashboardNoticia = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '6');

    return(
        <div>
            Dashboard Noticia
        </div>
    );
}
export default DashboardNoticia;
