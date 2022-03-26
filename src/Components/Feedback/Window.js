import React from 'react';
import './window.css'
import exit from '../../img/exit.svg'
import info from '../../img/info.svg'
import {useForm} from 'react-hook-form'




const Window = ({active, setActive}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
        setActive(false)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={active ? 'background active' : 'background'}
              onMouseDown={() => setActive(false)}>
            <div className={active ? 'window active' : 'window'} onMouseDown={e => e.stopPropagation()}>
                <div className={'title'}>Отзыв <img className={'exit'} src={exit} onClick={() => setActive(false)}/>
                </div>
                <div className={'name'}>Как вас зовут?</div>
                <div><input autoComplete={'off'} {...register('userName', {
                    required: "Поле обязательно к заполнению",
                    maxLength: {
                        value: 25,
                        message: 'Имя слишком длинное'
                    }
                })} className={'input-name'} placeholder={'Имя Фамилия'}/>
                    {(errors?.userName && <div className={'name-error'}>{errors?.userName?.message || 'Ошибка'}</div>)}
                    <div>
                        <label className={'load-button'}><span
                            className={'load-button-text'}>+ Загрузить фото</span><input type='file'
                                                                                         accept={'image/jpeg'}
                                                                                         size={'10000'}
                                                                                         name={'imageUpload'}
                                                                                         {...register('imageUpload', {
                                                                                             validate: value => {
                                                                                             }

                                                                                         })}/></label>
                        {(errors?.userName &&
                            <div className={'name-error'}>{errors?.userName?.message || 'Ошибка'}</div>)}
                    </div>
                </div>
                <div>
                    <div className={'question'}>Все ли вам понравилось?</div>
                    <div><textarea autoComplete={'off'} {...register('review', {
                        required: "Поле обязательно к заполнению",
                        maxLength: {
                            value: 200,
                            message: 'Отзыв слишком длинный'
                        }
                    })} className={'input-review'} placeholder={'Напишите пару слов о вашем опыте... '}/>
                        {(errors?.review &&
                            <div className={'review-error'}>{errors?.review?.message || 'Ошибка'}</div>)}
                    </div>
                </div>
                <div>
                    <button className={'send-button'}><span className={'load-button-text'}>Отправить отзыв</span>
                    </button>
                    <div><img className={'info'} src={info}/></div>
                    <div className={'info-text'}>Все отзывы проходят модерацию в течение 2 часов</div>
                </div>
            </div>

        </form>
    );
};

export default Window;