import React from 'react';
import gender from "../../img/male.svg";

const styles = {
    infoBlock: {
        position: 'relative',
        width: '761px',
        height: '383px',
        left: '598px',
        top: '424px',
        background: '#FFFFFF',

    },
    name: {
        height: '32px',
        left: '639px',
        top: '633px',
        fontFamily: 'Factor A Bold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '32px',
        lineHeight: '32px',
        color: '#585CC6',
        paddingTop: '40px',
        paddingLeft: '40px',
        paddingBottom: '20px',
        paddingRight: '40px',
        margin: '0'
    },
    birthDay: {
        height: '24px',
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '0.01em',
        color: '#8A8A8A',
        marginLeft: '285px'

    },
    fistInfo: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        margin: '0',
        paddingLeft: '40px',
        paddingBottom: '20px'
    },
    gender: {
        width: '10px',
        height: '20px',
        marginBottom: '-5px'
    },
    description: {
        margin: '0',
        paddingLeft: '40px',
        paddingRight: '40px',
        fontFamily: 'Gilroy Medium'
    }
}
const InfoBlock = () => {
    return (

        <div style={styles.infoBlock}>
            <p style={styles.name}>Кирилл Криницкий <span style={styles.birthDay}>28.03.2001</span></p>
            <p style={styles.fistInfo}><span style={{fontFamily: 'Gilroy Bold'}}>Город:</span> Томск
                <span style={styles.fistInfo}><span style={{fontFamily: 'Gilroy Bold'}}>Пол:</span> мужчина <img
                    src={gender} style={styles.gender}/> </span> <span style={styles.fistInfo}><span
                    style={{fontFamily: 'Gilroy Bold'}}>Возраст:</span> 20 </span></p>
            <p style={styles.description}><span style={{fontFamily: 'Gilroy Bold'}}>О себе: </span>
                <span>Привет! Меня зовут Кирилл, я студент третьего курса, учусь на программиста. Приехал учиться в Томск из города Красноярска, хочу стать Frontend разработчкиом. Помимо IT увлекаюсь музыкой, изучаю звукорежессуру и занимаюсь репетиторством для школьников.</span>
            </p>


        </div>
    );
};

export default InfoBlock;