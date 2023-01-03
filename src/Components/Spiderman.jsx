import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import trailer2 from './Images/spiderman.mp4';
import 'react-html5video/dist/styles.css'

const Spiderman = () => {
    return (
        <div>
            {/* <h1>This is Trailers Page</h1> */}
            <Video autoPlay loop
            width="100%"
            height="90%"
             >
               <source src={trailer2} type='video/mp4'/>
             </Video>

        </div>
    );
}

export default Spiderman;
