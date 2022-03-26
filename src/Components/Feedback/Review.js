import React from 'react';
import './window.css'

const Review = (props) => {
    let date = new Date()
    let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    return (
        <div>
        <div style={props.style} className={'review'}>

            <div><img src={props.reviewPhoto} className={'review-photo'}/></div>
            <div><p className={'review-name'}>{props.reviewName}</p></div>
            <div><p className={'review-date'}>{output}</p></div>

        </div>
            <div>
                <div className={'review-text'}>{props.reviewText}</div>
            </div>
        </div>
    );
};

export default Review;