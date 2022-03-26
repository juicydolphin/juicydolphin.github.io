import React from 'react';

const styles = {
    title: {
        position: 'absolute',
        width: '80.35%',
        height: '296px',
        left: '5.55%',
        top: '8%',
        fontFamily: 'Factor A',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '124px',
        lineHeight: '148px',
        letterSpacing: '-0.0124em',
        color: '#FFFFFF'

    }
}
const Title = () => {
    return (
        <div>
            <span style={styles.title}>Добро пожаловать в академию!</span>
        </div>
    );
};

export default Title;