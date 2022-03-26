import './carousel.css'
import {useState, useEffect, Children,cloneElement} from "react";
import rightDark from '../../img/arrow-right-dark.svg'
import leftDark from '../../img/arrow-left-dark.svg'
import leftHigh from '../../img/arrow-left-high.svg'
import rightHigh from '../../img/arrow-right-high.svg'
import blueLine from '../../img/blueLine.svg'
import grayLine from '../../img/grayLine.svg'

const Carousel = ({children}) => {


    const REVIEW_WIDTH = 1054
    const [reviews, setReviews] = useState([])
    const [offset, setOffset] = useState(0)
    const handleLeftArrowClick = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset + REVIEW_WIDTH
            console.log(newOffset)
            return Math.min(newOffset,0)
        })
    }
    const handleRightArrowClick = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset - REVIEW_WIDTH
            console.log(newOffset)

            return Math.max(newOffset,-2108)
        })
    }
    const arrowTypeLeft = (offset) => {
        if(offset === 0){
            return leftHigh
        } else return leftDark

    }
    const arrowTypeRight = (offset) => {
        if(offset === -2108){
            return rightHigh
        } else return rightDark

    }
    const lineTypeLeft = (offset) => {
      if(offset === 0) {
          return blueLine
      }else return grayLine
    }
    const lineTypeMid = (offset) => {
        if((offset !== 0) && (offset !== -2108)) {
            return blueLine
        } else return grayLine

    }
    const lineTypeRight = (offset) => {
        if(offset === -2108) {
            return blueLine
        }else return grayLine
    }
    useEffect(() => {
            setReviews(
                Children.map(children, (child) => {
                    return cloneElement(child, {

                    })
                } )
            )
        }, []
    )


    return (
        <div className={'mainContainer'}>
            <div ><button className={'button-left'} onClick={handleLeftArrowClick}><img  src={arrowTypeLeft(offset)}/></button></div>
            <div><button className={'button-right'} onClick={handleRightArrowClick}><img className={'arrow'} src={arrowTypeRight(offset)}/> </button></div>
            <div className={'reviewWindow'}>
                <div className={'allItems'} style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {reviews}
                </div>
                <div className={'scroll'} >
                    <div className={'line'}><img src={lineTypeLeft(offset)}/></div>
                    <div className={'line'}><img src={lineTypeMid(offset)}/></div>
                    <div className={'line'}><img src={lineTypeRight(offset)}/></div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;