import React from 'react';
// import ReactPlayer from 'react-player';
import {DefaultPlayer as Video} from 'react-html5video';
import trailer from './Images/thorlove.mp4';
import 'react-html5video/dist/styles.css'

const Trailer1 = () => {
    return (
        <div>
            <Video autoPlay loop
            width="90%"
            height="87%"
             >
               <source src={trailer} type='video/mp4'/>
             </Video>

        </div>
    );
}

export default Trailer1;
