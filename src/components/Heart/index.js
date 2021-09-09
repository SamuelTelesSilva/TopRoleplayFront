import React, { useState } from 'react';
import { HeartEmpty, HeartFull } from './styles';


const Heart = (props) => {
    const [hearts] = useState(props.heartsValue);

    if(hearts <= 100){
        return(
            <>
                <HeartFull />
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
            </>
        );
    }else if(hearts > 100 && hearts <= 200){
        return(
            <>
                <HeartFull />
                <HeartFull />
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
            </>
        );
    }else if(hearts > 200 && hearts <= 300){
        return(
            <>
                <HeartFull />
                <HeartFull />
                <HeartFull />
                <HeartEmpty/>
                <HeartEmpty/>
            </>
        );
    }else if(hearts > 300 && hearts <= 400){
        return(
            <>
                <HeartFull />
                <HeartFull />
                <HeartFull />
                <HeartFull />
                <HeartEmpty/>
            </>
        );
    }else if(hearts > 400){
        return(
            <>
                <HeartFull />
                <HeartFull />
                <HeartFull />
                <HeartFull />
                <HeartFull />
            </>
        );
    }else{
        return(
            <>
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
                <HeartEmpty/>
            </>
        );
    }
}
export default Heart;
/*★☆☆☆☆*/