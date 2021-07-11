import React, { useState } from 'react';
import { Container, StarEmpty, StarFull } from './styles';


const Stars = (props) => {

    const [stars] = useState(props.starsValue);

    if(stars <= 100){
        return(
            <>
                <StarFull />
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
            </>
        );
    }else if(stars > 100 && stars <= 200){
        return(
            <>
                <StarFull />
                <StarFull />
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
            </>
        );
    }else if(stars > 200 && stars <= 300){
        return(
            <>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarEmpty/>
                <StarEmpty/>
            </>
        );
    }else if(stars > 300 && stars <= 400){
        return(
            <>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarEmpty/>
            </>
        );
    }else if(stars > 400){
        return(
            <>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
            </>
        );
    }else{
        return(
            <>
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
                <StarEmpty/>
            </>
        );
    }
}
export default Stars;
/*★☆☆☆☆*/