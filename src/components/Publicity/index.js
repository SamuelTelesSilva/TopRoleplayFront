import React from 'react';
import { Container } from './styles';

const Publicity = (props) => {
    return(
        <Container width={props.width} height={props.height}>
           <div className="cont-publicity">
            {
                props.quantidade === 2 ? (
                    <div className="cont-adsense">
                        <div className="publicity">
                            <script 
                                async 
                                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3644361366402429"
                                crossorigin="anonymous"    
                            /> 
                        </div>
                        <div className="publicity">
                            <script 
                                async 
                                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3644361366402429"
                                crossorigin="anonymous"    
                            /> 
                        </div>
                    </div>
                ):(
                    <div className="publicity">
                        <script 
                            async 
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3644361366402429"
                            crossorigin="anonymous"    
                        /> 
                    </div>
                )
            }
            </div>
        </Container>
    );
}
export default Publicity;