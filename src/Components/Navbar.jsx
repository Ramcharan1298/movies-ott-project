import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaGlobe, FaSearch, FaTimes } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react';
import './Navbarstyle.css';

const Navbar = () => {
    //    let menu = document.querySelector(".togglebutton");
    //    let navbar = document.querySelector(".nav");

    //    menu.onclick=()=>{
    //     menu.classList.toggle('bx-x');
    //     navbar.classList.toggle('open');
    //    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            <Link to={'/'}><img className='logo' src={require('./Images/Marvel.png')} alt="" /></Link>

            <ul className={click ? "nav open" : "nav"} >
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Movies'}>Movies</Link></li>
                <li><Link to={'/Series'}>TV Shows</Link></li>
                <li><Link to={'/Comics'}>Comics</Link></li>
                <li><Link to={'/Trending'}>Trending</Link></li>
            </ul>

            <ul className='nav-slp'>
                <ul className='search' style={{ color: "white" }}>
                    <Link to={"/Languages"}><FaSearch size={30} /></Link>
                </ul>

                <ul className='language' style={{ color: "white" }}>
                    <Link to={"/Languages"}><FaGlobe size={30} /></Link>
                </ul>

                <ul>
                    <li className='profile'><Link to={'/Profile'} ><IoMdContact size={37} style={{ color: "white" }} /></Link></li>
                </ul>
                {/* <ul>
                    <li><FaBars className='togglebutton' size={30} style={{ color: "white" }}/></li>
                </ul> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='togglebutton' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "white" }} />)
                        :
                        (<FaBars size={30} style={{ color: "white" }} />)}
                </div>
            </ul>


        </div>
    );
}

export default Navbar;
