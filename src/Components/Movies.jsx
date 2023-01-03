import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import trailer9 from './Images/Ragnarok.mp4';
import 'react-html5video/dist/styles.css'
import './Moviestyle.css'
import {FaPlay ,FaShareAlt} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'

const Movies = () => {
    return (
        <div className='banner-video'>
            <Video
                autoPlay
                loop
                muted
                width="100%"
                height="90%"
            >
                <source src={trailer9} type='video/mp4' />
            </Video>
            <div className='title'>
                <h6>Marvel's Studios</h6>
                <p>2 hr 10 min &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;2017 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Superhero &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;U/A 13+</p>
                <h1>THOR : Ragnarok</h1>
                <h5>Deprived of his mighty hammer Mjolnir, Thor must escape<br/> the other side of the universe to save his home, Asgard,<br/> from Hela, the goddess of death.</h5>
                <br /><br /><br /><div className='icons'>
                <ul>
                    <li className='play'><a href=""><FaPlay />&nbsp;&nbsp;Play</a></li>
                    <li><a href=""><AiOutlinePlus/>&nbsp;&nbsp;Add to Watchlist</a></li>
                    <li><a href=""><FaShareAlt/>&nbsp;&nbsp;Share</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Movies;
