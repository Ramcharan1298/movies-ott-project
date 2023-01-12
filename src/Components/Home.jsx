import React from 'react';
import Comics from './Comics';
import './Homestyle.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import {FaPlay} from 'react-icons/fa';
import {BsThreeDotsVertical} from 'react-icons/bs';

const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        showArrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        showArrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 0,
        autoplay: false,
        // speed: 2000,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        showArrows: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const settings4 = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 0,
        autoplay: false,
        // speed: 2000,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        showArrows: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const settings5 = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        showArrows: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
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

                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>Thor : Love and Thunder</h1>
                                </div>
                                <div className='duration'>
                                    <p>1 hr 58 min-2022-Action-U/A--13+</p>
                                </div>
                                <div className='description'>
                                    <h5>The God of Thunder teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Trailer1'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/thor-love&thunder.jpeg')} alt="" /></div><br /><br /><br />
                            
                            <div className='extra'>
                                <h1>Thor : Love and Thunder</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Trailer1'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>

                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>SPIDER-MAN: No Way Home</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 13 min-2017-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>A young Peter Parker/Spider-Man navigates his newfound identity as the web-slinging superhero.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Spiderman'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/spiderman.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>SPIDER-MAN: No Way Home</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Spiderman'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>

                        </div>
                    </div>

                    
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>BLACK-PANTHER : WAKANDA FOREVER</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 14 min-2018-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>T'Challa, heir to the hidden kingdom of Wakanda, must lead his people into a new future and confront a challenger from his country's past.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./WakandaTrailer'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/Blackpanther.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>BLACK-PANTHER : WAKANDA FOREVER</h1><br /><br />
                                <li><Link className='extrabutton' to={'./WakandaTrailer'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>Doctor Strange in the Multiverse of Madness</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 16 min-2022-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./DoctorTrailer'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/Doctorstrange.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>Doctor Strange in the Multiverse of Madness</h1><br /><br />
                                <li><Link className='extrabutton' to={'./DoctorTrailer'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>AVENGERS : Endgame</h1>
                                </div>
                                <div className='duration'>
                                    <p>3 hr 1 min-2019-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Endgame'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/endgame.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>AVENGERS : Endgame</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Endgame'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>AVENGERS: Infinity War</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 29 min-2018-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Infinity'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/infinity.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>AVENGERS: Infinity Wars</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Infinity'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>ETERNALS</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 35 min-2021-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and civilizations</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Eternals'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/Eternals.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>ETERNALS</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Eternals'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>Dead Pool-2</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 26 min-2017-Superhero - A</p>
                                </div>
                                <div className='description'>
                                    <h5>Mutant mercenary Wade Wilson aka. Deadpool brings together a team of rogue mercenaries to protect a young boy from the brutal time-travelling cyborg, Cable.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Deadpool2'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/deadpool.jpg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>Dead Pool-2</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Deadpool2'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 bg-black">
                                <div className='name'>
                                    <h1>Thor : Ragnarok</h1>
                                </div>
                                <div className='duration'>
                                    <p>2 hr 10 min-2017-Superhero-U/A 13+</p>
                                </div>
                                <div className='description'>
                                    <h5>Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.</h5>
                                </div><br /><br />
                                <ul>
                                    <li><Link to={'./Ragnarok'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                                    <li><a href=""><BsThreeDotsVertical/>&nbsp;&nbsp;More Info</a></li>
                                </ul>
                            </div>
                            <div class="col-7"><img style={{ width: '100%', height: '90vh' }} src={require('./Images/Bannerimages/Ragnarok.jpeg')} alt="" /></div><br /><br />
                            
                            <div className='extra'>
                                <h1>Thor : Ragnarok</h1><br /><br />
                                <li><Link className='extrabutton' to={'./Ragnarok'}><FaPlay/>&nbsp;&nbsp;Play Trailer</Link></li>
                            </div>
                        </div>
                    </div>

                </Carousel><br />


                <div className='carousel'>
                    <h4>New Releases</h4>
                    <Slider {...settings}>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/wakanda.jpg')} alt="" />
                            <div>
                                <h6>Wakanda-Forever<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/thor-love&thunder.jpg')} alt="" />
                            <div>
                                <h6>Thor : Love&thunder<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/doctorstrange.jpg')} alt="" />
                            <div>
                                <h6>Multi Verse of Madness<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/spiderman.jpg')} alt="" />
                            <div>
                                <h6>Spiderman : No Way Home<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/eternals.jpg')} alt="" />
                            <div>
                                <h6>Eternals<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/shangchi.jpg')} alt="" />
                            <div>
                                <h6>Shang Chi : The Legend of Ten Rings<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/blackwidow.jpg')} alt="" />
                            <div>
                                <h6>Black Widow<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/spiderfarfromhome.jpg')} alt="" />
                            <div>
                                <h6>Spiderman : Far From Home<br /><span>2019</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/avengersEndgame.jpg')} alt="" />
                            <div>
                                <h6>Avengers : Endgame<br /><span>2019</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/captainmarvel.jpg')} alt="" />
                            <div>
                                <h6>Captain Marvel<br /><span>2019</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/ragnarok.jpg')} alt="" />
                            <div>
                                <h6>Ant-Man and The Wasp<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/antman.jpg')} alt="" />
                            <div>
                                <h6>Avengers : Infinity War<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/Infinity.jpg')} alt="" />
                            <div>
                                <h6>Black Panther<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/blackpanther.jpg')} alt="" />
                            <div>
                                <h6>Thor : Rangnarok<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/spiderHomecoming.jpg')} alt="" />
                            <div>
                                <h6>Spider-Man : Homecoming<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/NewReleases/guardians.jpg')} alt="" />
                            <div>
                                <h6>Guardians of the Galaxy Vol . 2<br /><span>2017</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className='top'>
                    <h4>Top Picks For You</h4>
                    <Slider {...settings1}>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/blackpanther.jpg')} alt="" />
                            <div>
                                <h6>Black Panther<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/avengersEndgame.jpg')} alt="" />
                            <div>
                                <h6>Avengers : Endgame<br /><span>2019</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/ragnarok.jpg')} alt="" />
                            <div>
                                <h6>Thor : Ragnarok<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/Guardians1.jpg')} alt="" />
                            <div>
                                <h6>Guardians of Galaxy<br /><span>2014</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/wintersoldier.jpg')} alt="" />
                            <div>
                                <h6>Captain America<br /><span>2014</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/Doctorstrange.jpg')} alt="" />
                            <div>
                                <h6>Doctor Strange<br /><span>2016</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/widow.jpg')} alt="" />
                            <div>
                                <h6>Black Widow<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/Civilwar.jpg')} alt="" />
                            <div>
                                <h6>Captain America : Civil War<br /><span>2016</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/Infinity.jpg')} alt="" />
                            <div>
                                <h6>Avengers : Infinity War<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/antman1.jpg')} alt="" />
                            <div>
                                <h6>Ant Man<br /><span>2014</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/antman.jpg')} alt="" />
                            <div>
                                <h6>Ant-Man and The Wasp<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/thor.jpg')} alt="" />
                            <div>
                                <h6>Thor<br /><span>2011</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/Toppicks/darkworld.jpg')} alt="" />
                            <div>
                                <h6>Thor : Dark World<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/NewReleases/wakanda.jpg')} alt="" />
                            <div>
                                <h6>Thor : Rangnarok<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/NewReleases/spiderHomecoming.jpg')} alt="" />
                            <div>
                                <h6>Spider-Man : Homecoming<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='top-item'>
                            <img src={require('./Images/NewReleases/guardians.jpg')} alt="" />
                            <div>
                                <h6>Guardians of the Galaxy Vol . 2<br /><span>2017</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className='carousel'>
                    <h4>Other Movies For You</h4>
                    <Slider {...settings2}>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/darkphoenix.jpg')} alt="" />
                            <div>
                                <h6>X-Men : Dark Phoenix<br /><span>2019</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/deadpool2.jpg')} alt="" />
                            <div>
                                <h6>Deadpool 2<br /><span>2018</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/logan.jpg')} alt="" />
                            <div>
                                <h6>Logan<br /><span>2017</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/x-men.jpg')} alt="" />
                            <div>
                                <h6>X-Men : Apocalypse<br /><span>2016</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/deadpool.jpg')} alt="" />
                            <div>
                                <h6>deadpool<br /><span>2016</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Othermovies/x-mendaysoff.jpg')} alt="" />
                            <div>
                                <h6>X-Men : Days of Future<br /><span>2014</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br />

                <div className='carousel'>
                    <h4>Upcoming Movies</h4>
                    <Slider {...settings}>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/secretwars.jpg')} alt="" />
                            <div>
                                <h6>Avengers: Secret Wars<br /><span>MAY 1,2026</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/thekangdynasty.jpg')} alt="" />
                            <div>
                                <h6>Avengers: The Kang Dynasty<br /><span>MAY 2,2025</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/fantasticfour.jpg')} alt="" />
                            <div>
                                <h6>Fantastic Four<br /><span>FEB 14,2025</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/deadpool3.jpg')} alt="" />
                            <div>
                                <h6>Untitled Deadpool Movie<br /><span>NOV 8, 2024</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/blade.jpg')} alt="" />
                            <div>
                                <h6>Blade<br /><span>SEP 6, 2024</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/thunderbolts.jpg')} alt="" />
                            <div>
                                <h6>Thunderbolts<br /><span>JUL 26, 2024</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/worldorder.jpg')} alt="" />
                            <div>
                                <h6>Captain America: New World Order<br /><span>MAY 3, 2024</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/themarvels.jpg')} alt="" />
                            <div>
                                <h6>The Marvels<br /><span>JUL 28, 2023</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/galaxyvolume3.jpg')} alt="" />
                            <div>
                                <h6>Guardians of the Galaxy Volume 3<br /><span>MAY 5, 2023</span></h6>
                            </div>
                        </div>
                        <div id='carousel-item'>
                            <img src={require('./Images/Upcomingmovies/quantumania.jpg')} alt="" />
                            <div>
                                <h6>Ant-Man and The Wasp: Quantumania<br /><span>FEB 17, 2023</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br /><br />

                <div className='tvshows'><br />
                    <h4>TV Shows For You</h4>
                    <Slider {...settings3}>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/falcon.jpg')} alt="" />
                            <div>
                                <h6>The Falcon and The Winter Soldier<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/legends.jpg')} alt="" />
                            <div>
                                <h6>Marvel Studios: Legends<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/wandavision.jpg')} alt="" />
                            <div>
                                <h6>Wanda Vision<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/loki.jpg')} alt="" />
                            <div>
                                <h6>Loki | Season-1<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/whatif.jpg')} alt="" />
                            <div>
                                <h6>What If...? | Season 1<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/hawkeye.jpg')} alt="" />
                            <div>
                                <h6>Hawkeye<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/moonknight.jpg')} alt="" />
                            <div>
                                <h6>Moon Knight<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/msmarvel.jpg')} alt="" />
                            <div>
                                <h6>Ms. Marvel<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/shehulk.jpg')} alt="" />
                            <div>
                                <h6>She-Hulk: Attorney-at-Law<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/werewolfbynight.jpg')} alt="" />
                            <div>
                                <h6>Werewolf By Night<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div className='carousel-tv'>
                            <img src={require('./Images/TVshows/theguardians.jpg')} alt="" />
                            <div>
                                <h6>The Guardians of the Galaxy Holiday Special<br /><span>2022</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br /><br />

                <div className='upcoming-tvshows'><br />
                    <h4>Upcoming TV Shows</h4>
                    <Slider {...settings3}>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/agatha.jpg')} alt="" />
                            <div>
                                <h6>Agatha: Coven of Chaos<br /><span>2023</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/armorwars.jpg')} alt="" />
                            <div>
                                <h6>Armor Wars<br /><span></span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/daredevil.jpg')} alt="" />
                            <div>
                                <h6>Daredevil: Born Again<br /><span>2024</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/echo.jpg')} alt="" />
                            <div>
                                <h6>ECHO<br /><span>2023</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/ironheart.jpg')} alt="" />
                            <div>
                                <h6>Iron Heart<br /><span>2023</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/lokis2.jpg')} alt="" />
                            <div>
                                <h6>LOKI-2<br /><span>2023</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/marvelzombies.jpg')} alt="" />
                            <div>
                                <h6>Marvel Zombies<br /><span></span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/secret.jpg')} alt="" />
                            <div>
                                <h6>Secret Invasion<br /><span>2023</span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/spider.jpg')} alt="" />
                            <div>
                                <h6>Spider-Man: Freshman Year<br /><span></span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/whatif2.jpg')} alt="" />
                            <div>
                                <h6>What If...? | Season 2<br /><span></span></h6>
                            </div>
                        </div>
                        <div className='upcoming-tv'>
                            <img src={require('./Images/comingtvshows/xmen97.jpg')} alt="" />
                            <div>
                                <h6>X-MEN '97<br /><span></span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br /><br />

                <div className='games'>
                    <h4>MARVEL Game Collection </h4><br />
                    <Slider {...settings5}>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/midnight.jpg')} alt="" />
                            <div>
                                <h6>Marvel's Midnight Suns<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/marvelsnap.png')} alt="" />
                            <div>
                                <h6>MARVEL SNAP<br /><span>2022</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/Guardians.jpg')} alt="" />
                            <div>
                                <h6>Marvel's Guardians of the Galaxy<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/future.jpg')} alt="" />
                            <div>
                                <h6>MARVEL Future Revolution<br /><span>2021</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/msmmm.jpg')} alt="" />
                            <div>
                                <h6>Marvel's Spider-Man: Miles Morales<br /><span>2020</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/fortnite.jpg')} alt="" />
                            <div>
                                <h6>Fortnite<br /><span>2020</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/ironman.jpg')} alt="" />
                            <div>
                                <h6>Marvel's Iron Man VR<br /><span>2020</span></h6>
                            </div>
                        </div>
                        <div id='games-tv'>
                            <img src={require('./Images/Gamecollection/legomarvel.jpg')} alt="" />
                            <div>
                                <h6>LEGO® Marvel Collection Bundle<br /><span>2019</span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br />

                <div className='characters'>
                    <h4>Trending Characters in The Universe</h4><br />
                    <Slider {...settings4}>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/baku.jpg')} alt="" />
                            <div>
                                <h6>Wakanda Forever<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/ironheart.jpg')} alt="" />
                            <div>
                                <h6>Iron Heart<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/mignightangels.png')} alt="" />
                            <div>
                                <h6>Midnight Angels<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/namor.jpg')} alt="" />
                            <div>
                                <h6>Wakanda-villian<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/okoye.jpg')} alt="" />
                            <div>
                                <h6>Wakanda Forever<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/queen.jpg')} alt="" />
                            <div>
                                <h6>Wakanda Forever<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/shuri.jpg')} alt="" />
                            <div>
                                <h6>Wakanda Forever<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/silk.jpg')} alt="" />
                            <div>
                                <h6>Cindy Moon<br /><span></span></h6>
                            </div>
                        </div>
                        <div id='characters-tv'>
                            <img src={require('./Images/TrendingCharacters/spider.jpg')} alt="" />
                            <div>
                                <h6>MILES MORALES<br /><span></span></h6>
                            </div>
                        </div>
                    </Slider>
                </div><br />


                <div className='container-fluid'>
                     <div className="row">
                         <div className='col-5'><img style={{width:"600px", height:"50px"}} src={require('./Images/Finalpart/marvel-logo.png')}/></div>
                         <div className='col-7 marvel'>
                            <h5>Marvel Cinematic Universe</h5>
                         </div>
                     </div>
                 </div><br />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7 bg-black"><img src={require('./Images/Finalpart/marvelinsider.jpg')} alt="" /></div>
                        <div className="col-5 bg-black">
                            <h5>Marvel's Insider</h5>
                            <h3>Watch ,Earn , Redeem !</h3>
                            <p>Get rewarded for doing what you already do as a fan.</p>
                            <a href="#"> JOIN NOW</a>
                        </div>
                    </div>
                </div><br />
 
                 

            </div>
        </div>

    )
}

export default Home;



