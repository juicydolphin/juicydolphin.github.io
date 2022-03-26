import React from 'react';
import Logo from "./Logo";
import Button from "./Button";
import Profile from "./Profile";

const styles = {
    header: {
        position: 'relative',
        height: '116px',
        top: '0',
        right: '0',
        left: '0',
        margin: 'auto',
        background: '#ffffff',

    }
}
const Header = () => {
    return (
        <div style={styles.header}>
            <Logo/>
            <Button/>
            <Profile/>
        </div>
    );
};

export default Header;