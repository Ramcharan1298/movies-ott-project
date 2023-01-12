import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import trailer9 from './Images/Ragnarok.mp4';
import 'react-html5video/dist/styles.css'

const Ragnarok = () => {
    return (
        <div>
            {/* <h1>This is Trailers Page</h1> */}
            <Video autoPlay loop muted
            width="100%"
            height="90%"
             >
               <source src={trailer9} type='video/mp4'/>
             </Video>

        </div>
    );
}

export default Ragnarok;