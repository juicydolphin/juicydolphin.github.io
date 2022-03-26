import React from 'react';
import '../Body/bottom.css'
import tg from '../../img/tg.svg'
import vk from '../../img/vk.svg'
import instagram from '../../img/instagram.svg'
const Bottom = () => {
    return (
        <div className={'bottom'}>
            <div className={'text'}>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
            <div className={'socials'}>
            <div className={'tg'}><a href={'https://vk.com/juicy.dolphin'}><img src={tg}/></a></div>
            <div className={'instagram'}><a href={'https://instagram.com/juicy.dolphin'}><img src={instagram}/></a></div>
            <div className={'vk'}><a href={'https://vk.com/juicy.dolphin'}><img src={vk}/></a></div>
            </div>
        </div>
    );
};

export default Bottom;