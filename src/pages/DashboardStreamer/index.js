import React, {useState, useEffect} from 'react';
import { Container, AreaForm, Form, AreaButton, AreaContent } from './styles';
import ButtonInput from '../../components/ButtonInput';
import CardItemDashboard from '../../components/CardItemDashboard';

const DashboardStreamer = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina','2');

    const [searchInput, setSearchInput] = useState("");
    const [filteredContact, setFilteredContact] = useState([]); 

    




    const content = [
        {
            id: 1,
            name: 'Samuel',
            urlImageCard: 'https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_afterhours_taleofus2_256x256.jpg',
            stars: 201
        },
        {
            id: 2,
            name: 'Rocha',
            urlImageCard: 'https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_casino_heist2_256x256.jpg',
            stars: 400
        },
        {
            id: 3,
            name: 'Ferreira',
            urlImageCard: 'https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_gunrunning_guy_256x256.jpg',
            stars: 300
        },
        {
            id: 4,
            name: 'Teco do Teco',
            urlImageCard: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbpkS9Eh_hqXwNhzl0YeMEd9AT-YyxfNtGoGY8ocFWs9mV973-3vuaX2zzn6n-Ifjv-Q&usqp=CAU',
            stars: 100
        },
    ]


    useEffect(() => {
        setFilteredContact(
            content.filter((streamers) =>
                streamers.name.toLowerCase().includes(searchInput.toLowerCase())
            )   
        );
    }, [searchInput]);

    const handleChange = event => {
        setSearchInput(event.target.value)
        console.log(event.target.value)
    }

    return(
        <Container>
            <div className="aux-cont">
                <AreaForm>
                    <Form>
                        <div className="title-input">Nome do  Streamer</div>
                        <input className="input-form" type="text" placeholder="Digite o nome do streamer"/>
                        <div className="title-input">Url imagem 1</div>
                        <input className="input-form" type="text" placeholder="Url da imagem de capa"/>
                        <div className="title-input">Url imagem 2</div>
                        <input className="input-form" type="text" placeholder="Url da imagem para o Card"/>
                        <div className="redeSociais">Redes Sociais</div>
                        <div className="title-input">Instagram</div>
                        <input className="input-form" type="text" placeholder="Url do Instagram"/>
                        <div className="title-input">Discord</div>
                        <input className="input-form" type="text" placeholder="Url do Discord"/>
                        <div className="title-input">Twitter</div>
                        <input className="input-form" type="text" placeholder="Url do Twitter"/>
                    </Form>
                    <AreaButton>
                        <div className="button-register">
                            <ButtonInput type="submit" value="Cadastrar"/>
                        </div>
                        <div className="button-update">
                            <ButtonInput type="submit" value="Atualizar"/>
                        </div>
                    </AreaButton>
                </AreaForm>
                <AreaContent>
                    <div className="search-content">
                        <input 
                            className="input-search" 
                            placeholder="Digite o nome do Streamer"

                            onChange={handleChange}      
                        />
                        <div className="button-search">
                            <input 
                                className="button-input-search" 
                                type="submit" 
                                value="Pesquisar"/>
                        </div>
                    </div>
                    <div className="area-content-cards">
                        <div className="content-cards">
                            {filteredContact.map((item)=>(
                                <div className="cards" key={item.id}>
                                    <CardItemDashboard 
                                        id={item.id} 
                                        name={item.name} 
                                        stars={item.stars} 
                                        urlImg={item.urlImageCard} 
                                        altUrl={item.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </AreaContent>
           </div>
        </Container>
    );
}
export default DashboardStreamer;
