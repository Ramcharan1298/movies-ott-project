import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import trailer9 from './Images/Ragnarok.mp4';
import 'react-html5video/dist/styles.css';
import './Moviestyle.css';
import { FaPlay, FaShareAlt } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Movies = () => {

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
    return (
        <div>
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
                    <h5>Deprived of his mighty hammer Mjolnir, Thor must escape<br /> the other side of the universe to save his home, Asgard,<br /> from Hela, the goddess of death.</h5>
                    <br /><br /><br /><div className='icons'>
                        <ul>
                            <li className='play'><a href=""><FaPlay />&nbsp;&nbsp;Play</a></li>
                            <li><a href=""><AiOutlinePlus />&nbsp;&nbsp;Add to Watchlist</a></li>
                            <li><a href=""><FaShareAlt />&nbsp;&nbsp;Share</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="carousel">
                    <h4>Top Rated</h4>
                    <Slider {...settings}>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/wakanda.jpg")} alt="" />
                            <div>
                                <h6>
                                    Wakanda-Forever
                                    <br />
                                    <span>2022</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/thor-love&thunder.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Thor : Love&thunder
                                    <br />
                                    <span>2022</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/doctorstrange.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Multi Verse of Madness
                                    <br />
                                    <span>2022</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/spiderman.jpg")} alt="" />
                            <div>
                                <h6>
                                    Spiderman : No Way Home
                                    <br />
                                    <span>2021</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/eternals.jpg")} alt="" />
                            <div>
                                <h6>
                                    Eternals
                                    <br />
                                    <span>2021</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/shangchi.jpg")} alt="" />
                            <div>
                                <h6>
                                    Shang Chi : The Legend of Ten Rings
                                    <br />
                                    <span>2021</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/blackwidow.jpg")} alt="" />
                            <div>
                                <h6>
                                    Black Widow
                                    <br />
                                    <span>2021</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/spiderfarfromhome.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Spiderman : Far From Home
                                    <br />
                                    <span>2019</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/avengersEndgame.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Avengers : Endgame
                                    <br />
                                    <span>2019</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/captainmarvel.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Captain Marvel
                                    <br />
                                    <span>2019</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/ragnarok.jpg")} alt="" />
                            <div>
                                <h6>
                                    Ant-Man and The Wasp
                                    <br />
                                    <span>2018</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/antman.jpg")} alt="" />
                            <div>
                                <h6>
                                    Avengers : Infinity War
                                    <br />
                                    <span>2018</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/Infinity.jpg")} alt="" />
                            <div>
                                <h6>
                                    Black Panther
                                    <br />
                                    <span>2018</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/blackpanther.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Thor : Rangnarok
                                    <br />
                                    <span>2017</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img
                                src={require("./Images/NewReleases/spiderHomecoming.jpg")}
                                alt=""
                            />
                            <div>
                                <h6>
                                    Spider-Man : Homecoming
                                    <br />
                                    <span>2017</span>
                                </h6>
                            </div>
                        </div>
                        <div id="carousel-item">
                            <img src={require("./Images/NewReleases/guardians.jpg")} alt="" />
                            <div>
                                <h6>
                                    Guardians of the Galaxy Vol . 2<br />
                                    <span>2017</span>
                                </h6>
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
                </div>
                <br />


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
                </div>
                <br /><br />
            </div>
        </div>
    );
}

export default Movies;
