import React from 'react';
import { Link } from "react-router-dom";
import './Landingstyle.css'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Marvel from './Images/marvelintro.mp4';

const LandingPage = () => {


    return (
        <div>
            <div className="mainvideo2">
            {/* <h1>This is Trailers Page</h1> */}
            <Video autoPlay loop muted
            width="100%"
            height="90%"
             >
               <source src={Marvel} type='video/mp4'/>
             </Video>

        </div><br /><br />

            <div className="Title" >
                <Link to={'/LoginPage'}><h4>Get Into The Marvel Universe</h4></Link>
            </div>
        </div>
    );
}

export default LandingPage;
