import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Link to={'/'}><img src="./Marvel.png" alt="" /></Link>
        </div>
    );
}

export default Header;
