import React from 'react';
import Tracery from "./Tracery";
import Title from "./Title";
import Photo from "./Photo";
import InfoBlock from "./InfoBlock";
import Reviews from "./Reviews";
import Bottom from "./Bottom";

const style = {
    background: {
        position: 'relative',
        height: '1600px',
        top: '0',
        right: '0',
        left: '0',
        margin: 'auto',
        background: '#585CC6'
    }
}
const Body = () => {
    return (
        <div style={style.background}>
            <Tracery/>
            <Title/>
            <Photo/>
            <InfoBlock/>
            <Reviews/>
            <Bottom/>

        </div>
    );
};

export default Body;