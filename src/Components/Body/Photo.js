import React from 'react';
import photo from "../../img/main-photo.png";

const styles = {
    photo: {
        position: 'absolute',
        width: '519px',
        height: '383px',
        left: '5.55%',
        top: '456px',
        borderRadius: '2px'
    }
}
const Photo = () => {
    return (
        <div>
            <img src={photo} style={styles.photo}/>
        </div>
    );
};

export default Photo;