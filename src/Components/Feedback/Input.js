import React, {useState} from 'react';
import './window.css'

const Input = (props) => {

    const [text, setText] = useState('')
    const [textTouched, setTextTouched] = useState(false)
    const [textError, setTextError] = useState('Поле не должно быть пустым')

    const blurHandler = (e) => {
        if (e.target.name === 'text') {
            setTextTouched(true)
            if(!e.target.value){
                setTextError('Поле не должно быть пустым')
            }

        }
    }
    const textHandler = (e) => {
        setText(e.target.value)
        const regular = /[^a-zA-Zа-яА-Я\s]/g
        if (regular.test(String(e.target.value))) {
            setTextError('Для ввода допустимы только буквы')
        }
        else{
            setTextError('')
        }
    }

    return (
        <div>
            <input onChange={e => textHandler(e)} onBlur={e => blurHandler(e)} name={'text'} autoComplete={'off'} type={'text'}
                   maxLength={props.max} className={text ? props.filled : props.regular}
                   placeholder={props.defaultText}/>
            {(textTouched && textError) && <div className={props.errorText}>{textError}</div>}
        </div>
    );
};

export default Input;