import React, {useState} from 'react';

const TextArea = (props) => {
    const [paragraph, setParagraph] = useState('')
    const [paragraphTouched, setParagraphTouched] = useState(false)
    const [paragraphError, setParagraphError] = useState('')

    const blurHandler = (e) => {
        if (e.target.name === 'paragraph') {
            setParagraphTouched(true)
            if(!e.target.value){
                setParagraphError('Поле не должно быть пустым')
            }

        }
    }
    const paragraphHandler = (e) => {
        setParagraph(e.target.value)
        if(paragraphTouched === true && e.target.value === ''){
            setParagraphError('Поле не должно быть пустым')
        }
        else{
            setParagraphError('')
        }
    }


    return (
        <div>
            <textarea value={paragraph} onChange={e => paragraphHandler(e)} onBlur={blurHandler} name={'paragraph'} type={'text'}
                   maxLength={props.max} className={paragraph ? props.filled : props.regular}
                   placeholder={props.defaultText}/>
            {(paragraphError) && <div className={props.errorText}>{paragraphError}</div>}
            <label className={'counter'}>{paragraph.length}/200</label>
        </div>
    );
};

export default TextArea;