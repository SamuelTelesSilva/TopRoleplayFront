import React from 'react';
import {Grid, Main, Footer} from './styles';
import NavBar from '../../components/NavBar/Toolbar/index';
import Button from '../../components/Button/index';

const Cadastro = () =>{
    
    return(
        <Grid>
            <NavBar/>
            <Main>
                <div className="aux-cont">
                    <div className="area-form"> 
                        <form>
                            <div>
                                <label>Nome</label> 
                            </div> 
                            <input type="email" placeholder="E-mail"/>
                            <div>
                                <label>Idade</label> 
                            </div>
                            <input type="password" placeholder="Senha"/>
                            <div>
                                <label>E-mail</label> 
                            </div> 
                            <input type="email" placeholder="E-mail"/>
                            <div>
                                <label>Senha</label> 
                            </div>
                            <input type="password" placeholder="Senha"/>
                            <div>
                                <label>Senha</label> 
                            </div>
                            <input type="password" placeholder="Confirme a sua senha"/>
                        </form> 
                    </div>

                    <div className="area-button">
                        <div className="button-cadastrar">
                            <Button title="Criar conta"/>
                        </div>
                        <div className="button-entrar">
                            <Button title="Entrar"/>
                        </div>
                    </div>
                </div>     
            </Main>
            <Footer/>
        </Grid>
    );
}
export default Cadastro;