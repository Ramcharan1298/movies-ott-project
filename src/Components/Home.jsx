import React from 'react';
import './Homestyle.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='Total-Banner'>
            <div>
                <Carousel className='banner'
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={true}
                >

                    <div className='banner-image'>
                        <img style={{ width: '100%', height: '90vh', boxshadow: "400px 0px 100px 20px rgb(6, 4, 4) inset" }} src={require('./Images/thor-love&thunder.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>Thor : Love and Thunder</h1>
                            </div>
                            <div className='banner-time'>
                                <p>1 hr 58 min-2022-Action-U/A--13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>The God of Thunder teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher.</h5>
                            </div>
                            <button className='Play'>Play Now</button><br />
                            <button className='Info'>More Info</button>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Spiderman.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>SPIDER-MAN: No Way Home</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 13 min-2017-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>A young Peter Parker/Spider-Man navigates his newfound identity as the web-slinging superhero.</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Blackpanther.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>BLACK-PANTHER : WAKANDA FOREVER</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 14 min-2018-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>T'Challa, heir to the hidden kingdom of Wakanda, must lead his people into a new future and confront a challenger from his country's past.</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/DoctorStrange.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>Doctor Strange in the Multiverse of Madness</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 16 min-2022-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Endgame.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>AVENGERS : Endgame</h1>
                            </div>
                            <div className='banner-time'>
                                <p>3 hr 1 min-2019-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Infinity.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>AVENGERS: Infinity War</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 29 min-2018-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Eternals.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>ETERNALS</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 35 min-2021-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and civilizations</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img style={{ width: '100%', height: '90vh' }} src={require('./Images/Ragnarok.jpg')} alt="" />
                        <div className='banner-overlay'>
                            <div className='banner-title'>
                                <h1>SPIDER-MAN: No Way Home</h1>
                            </div>
                            <div className='banner-time'>
                                <p>2 hr 13 min-2017-Superhero-U/A 13+</p>
                            </div>
                            <div className='banner-description'>
                                <h5>A young Peter Parker/Spider-Man navigates his newfound identity as the web-slinging superhero.</h5>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


            <Carousel responsive={responsive}
                // showThumbs={false}
                // autoPlay={true}
                // transitionTime={3}
                // infiniteLoop={true}
                // showStatus={false}
                // showIndicators={true}
            >


            </Carousel>;

            {/* <div>
                <div className='carousel'>

                    <h3>New Releases</h3><br /><br /><br />

                    <div className="carousel-slider">
                        <div className='carousel-list'>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/wakanda.jpg')} alt="" />
                                <div className='img-title'><br />
                                    
                                </div>
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/thor-love&thunder.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/doctorstrange.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/spiderman.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/eternals.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/shangchi.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/blackwidow.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/spiderfarfromhome.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/avengersEndgame.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/captainmarvel.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/ragnarok.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/antman.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/Infinity.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/blackpanther.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/spiderHomecoming.jpg')} alt="" />
                            </div>
                            <div id='carousel-item'>
                                <img src={require('./Images/NewReleases/guardians.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    );
}

export default Home;



