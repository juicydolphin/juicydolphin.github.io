import React from 'react'

const styles = {
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '17px 28px',
        position: 'absolute',
        left:  '80.69%',
        right: '5.56%',
        top: '27.59%',
        bottom: '27.59%',
        background: '#585CC6',
        borderRadius: '2px',
        border: 'none',
        output: 'none',
    },
    text: {
        position: 'static',
        width: '142px',
        height: '18px;',
        left: '28px',
        top: '17px',
        fontFamily: 'Gilroy Semi-Bold',
        fontStyle: 'normal',
        fonWeight: '600',
        fontSize: '18px',
        lineHeight: '18px',
        letterSpacing: '0.01em',
        color: '#FFFFFF',
        flex: 'none',
        order: '0',
        flexGrow:'0'
    }
}
const Button = () => {
    return (
        <button style={styles.button}>
            <span style={styles.text}>Личный кабинет</span>
        </button>
    );
};

export default Button;