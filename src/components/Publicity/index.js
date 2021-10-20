import React from 'react';
import { Container } from './styles';
import AdSense from 'react-adsense';

const Publicity = (props) => {
    return(
        <Container>
           
            <AdSense.Google
                className="publicidade"
                client='ca-pub-3644361366402429'
                slot='7676240737'
                style={{ display: 'block'}}
                format='auto'
                responsive='true'
            />
          
        </Container>
    );
}
export default Publicity;
