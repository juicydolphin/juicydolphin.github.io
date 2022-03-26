import React from 'react';
import photo from '../../img/photo.png'

const styles = {
    text: {
        position: 'absolute',
        right: '80.56%',
        left: '10.56%',
        top: '42.24%',
        bottom: '42.24%',
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '18px',
        color: '#333333',
        width: '250px'

    },
    photo: {
        position: 'absolute',
        width: '52px',
        height: '52px',
        left: '80px',
        top: '32px',
        borderRadius: '2px'
    }
}
const Profile = () => {
    return (
        <div>
            <div style={styles.photo}><img src={photo}  alt="ilink Logo"/></div>
            <div style={styles.text}>Кирилл Криницкий</div>
        </div>
    );
};

export default Profile;