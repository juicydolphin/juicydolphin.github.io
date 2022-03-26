import React from 'react';
import tracery from "../../img/tracery.svg";

const styles = {
    tracery: {
        width: "57.5%",
        display: "block",
        position: "absolute",
        top: "18.47%",
        left: "57.6%",
        transform: "translate(0,-40%)",

    }
}

const Tracery = () => {
    return (
        <div>
            <img src={tracery} style={styles.tracery}/>
        </div>
    );
};

export default Tracery;