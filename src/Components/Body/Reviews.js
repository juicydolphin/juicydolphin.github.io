import React, {useState} from 'react';
import Window from "../Feedback/Window";
import Review from "../Feedback/Review";
import Carousel from "../Feedback/Carousel";
import noPhoto from '../../img/no-photo.svg'

const styles = {
    reviewBlock: {
        position: 'relative',
        width: '1198px',
        height: '525px',
        left: '0px',
        top: '576px',
        background: '#FFFFFF',
        borderRadius: '2px'
    },
    title: {
        height: '32px',
        left: '639px',
        top: '633px',
        fontFamily: '"Factor A"',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '68px',
        lineHeight: '32px',
        color: '#333333',
        paddingTop: '40px',
        paddingLeft: '40px',
        paddingBottom: '20px',
        paddingRight: '40px',
        margin: '0'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '17px 28px',
        position: 'absolute',
        background: '#585CC6',
        borderRadius: '2px',
        border: 'none',
        output: 'none',
        marginLeft: '867px',
        marginTop: '-42px',
        cursor: 'pointer'

    },
    text: {
        display: 'contents',
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
        flexGrow: '0'
    },
    mainContainer: {
        position: 'relative',
        width: '1062px',
        height: '311px',
        left: '80px',
        top: '171px',
        background: '#FFFFFF',
        borderRadius: '2px'
    },
    window: {
        width: '100%',
        height: '100%',
        background: 'red',
        borderRadius: '2px',
        overflow: 'scroll'
    },
    allItems: {
        height: '100%',
        display: 'flex',
    },


}
const Reviews = () => {
    const [windowActive, setWindowActive] = useState(false)
    return (

        <div>
            <div style={styles.reviewBlock}>
                <p style={styles.title}>Отзывы <button style={styles.button} onClick={() => setWindowActive(true)}>
                    <span style={styles.text}>+ Добавить отзыв</span>
                </button></p>
            </div>
            <Carousel>
                <Review reviewPhoto={noPhoto} reviewName={'Джеки Чан'} reviewText={'Круто, классно!!! Ставлю лайк!!!'}/>
                <Review reviewPhoto={noPhoto} reviewName={'Сергей Пахомов'} reviewText={'Братишка, все классно, я принес тебе покушать.'}/>
                <Review reviewPhoto={noPhoto} reviewName={'Владимир Епифанцев'} reviewText={'Отличная история у тебя, ставлю лайк!'}/>
                <Review reviewPhoto={noPhoto} reviewName={'Вэн Даркхолм'} reviewText={'Do you like what you see?'}/>
                <Review reviewPhoto={noPhoto} reviewName={'Алексей Панин'} reviewText={'Ноги моей здесь больше не будет!'}/>
                <Review reviewPhoto={noPhoto} reviewName={'Олег Нечипоренко'} reviewText={'Ребят, не лезьте в хип-хоп, пожалуйста!'}/>
            </Carousel>

            <Window active={windowActive} setActive={setWindowActive}/>
        </div>
    );
};

export default Reviews;