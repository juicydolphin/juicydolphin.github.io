import React from 'react';
import logo from '../../img/logo.svg'

const styles = {
    logo: {
        width: "85px",
        height: "52px",
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }
}
const Logo = () => {
    return (
        <div><img src={logo} style={styles.logo} alt="ilink Logo"/></div>
    )
};

export default Logo;