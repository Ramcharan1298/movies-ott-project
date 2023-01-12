import React from 'react';
import './Seriesstyles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Series = () => {
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

    const settingsani = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
    return (
        <div>
            <div className='banner--2'>
                <img src={require("./Images/Bannerimages/series.jpg")} alt="" />
            </div>
            <div className='Logo'>
                <img src={require("./Images/Marvel.png")} alt="" />
            </div>

            <div className='tv-shows'><br />
                <h4>TV Shows For You</h4>
                <Slider {...settings}>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/falcon.jpg')} alt="" />
                        <div>
                            <h6>The Falcon and The Winter Soldier<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/legends.jpg')} alt="" />
                        <div>
                            <h6>Marvel Studios: Legends<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/wandavision.jpg')} alt="" />
                        <div>
                            <h6>Wanda Vision<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/loki.jpg')} alt="" />
                        <div>
                            <h6>Loki | Season-1<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/whatif.jpg')} alt="" />
                        <div>
                            <h6>What If...? | Season 1<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/hawkeye.jpg')} alt="" />
                        <div>
                            <h6>Hawkeye<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/moonknight.jpg')} alt="" />
                        <div>
                            <h6>Moon Knight<br /><span>2022</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/msmarvel.jpg')} alt="" />
                        <div>
                            <h6>Ms. Marvel<br /><span>2022</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/shehulk.jpg')} alt="" />
                        <div>
                            <h6>She-Hulk: Attorney-at-Law<br /><span>2022</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/werewolfbynight.jpg')} alt="" />
                        <div>
                            <h6>Werewolf By Night<br /><span>2022</span></h6>
                        </div>
                    </div>
                    <div className='carouseltv'>
                        <img src={require('./Images/TVshows/theguardians.jpg')} alt="" />
                        <div>
                            <h6>The Guardians of the Galaxy Holiday Special<br /><span>2022</span></h6>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='smallbanner'>
                <img src={require("./Images/Bannerimages/seriesin.jpg")} alt="" />
            </div>

            <div className='upcomingtvshows'><br />
                <h4>Upcoming TV Shows</h4>
                <Slider {...settings}>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/agatha.jpg')} alt="" />
                        <div>
                            <h6>Agatha: Coven of Chaos<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/armorwars.jpg')} alt="" />
                        <div>
                            <h6>Armor Wars<br /><span></span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/daredevil.jpg')} alt="" />
                        <div>
                            <h6>Daredevil: Born Again<br /><span>2024</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/echo.jpg')} alt="" />
                        <div>
                            <h6>ECHO<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/ironheart.jpg')} alt="" />
                        <div>
                            <h6>Iron Heart<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/lokis2.jpg')} alt="" />
                        <div>
                            <h6>LOKI-2<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/marvelzombies.jpg')} alt="" />
                        <div>
                            <h6>Marvel Zombies<br /><span></span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/secret.jpg')} alt="" />
                        <div>
                            <h6>Secret Invasion<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/spider.jpg')} alt="" />
                        <div>
                            <h6>Spider-Man: Freshman Year<br /><span></span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/whatif2.jpg')} alt="" />
                        <div>
                            <h6>What If...? | Season 2<br /><span></span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/comingtvshows/xmen97.jpg')} alt="" />
                        <div>
                            <h6>X-MEN '97<br /><span></span></h6>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='carousel-non'>
                <br /><h4>NON-FICTION DISNEY+</h4>
                <Slider {...settings3}>
                    <div id='carouselitem'>
                        <img src={require('./Images/Nonfictiondisney/assembled.jpg')} alt="" />
                        <div>
                            <h6>Marvel Studios Assembled<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div id='carouselitem'>
                        <img src={require('./Images/Nonfictiondisney/behindthemask.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Behind the Mask<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div id='carouselitem'>
                        <img src={require('./Images/Nonfictiondisney/marvel6.jpg')} alt="" />
                        <div>
                            <h6>Marvel's 616<br /><span>2020</span></h6>
                        </div>
                    </div>
                    <div id='carouselitem'>
                        <img src={require('./Images/Nonfictiondisney/marvelshero.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Hero Project | Season 1<br /><span>2019</span></h6>
                        </div>
                    </div>

                </Slider>
            </div>

            <div className='upcomingtvshows'><br />
                <h4>MARVEL SERIES ON D+</h4>
                <Slider {...settings}>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/agentcarters.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Agent Carter<br /><span>2016</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/agentsofshields.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Agents of S.H.I.E.L.D.<br /><span>2020</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/daredevils.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Daredevil<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/defenders.jpg')} alt="" />
                        <div>
                            <h6>Marvel's The Defenders<br /><span>2017</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/ironfist.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Iron Fist<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/jessicajoness.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Jessica Jones<br /><span>2019</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/lukecages.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Luke Cage<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div className='upcomingtv'>
                        <img src={require('./Images/Seriesond+/thepunishers.jpg')} alt="" />
                        <div>
                            <h6>SMarvel's The Punisher<br /><span>2019</span></h6>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='Animations'>
                <br /><h4>MARVEL ON HULU</h4>
                <Slider {...settingsani}>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/cloakanddagger.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Cloak and Dagger<br /><span>2019</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/hitmonkey.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Hit-Monkey<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/legion.jpg')} alt="" />
                        <div>
                            <h6>Legion<br /><span>2019</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/runaways.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Runaways<br /><span>2019</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/thegifteds.jpg')} alt="" />
                        <div>
                            <h6>The Gifted<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Onhulu/modok.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Cloak and Dagger<br /><span>2019</span></h6>
                        </div>
                    </div>

                </Slider>
            </div>

            <div className='Animations'>
                <br /><h4>ANIMATION</h4>
                <Slider {...settingsani}>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/moongirl.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Moon Girl and Devil Dinosaur<br /><span>2023</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/animatedspider-man.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Spidey and his Amazing Friends<br /><span>2021</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/animated.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Avengers<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/animatedmarvel.jpg')} alt="" />
                        <div>
                            <h6>Marvel Rising<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/animatedgot.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Guardians of the Galaxy<br /><span>2018</span></h6>
                        </div>
                    </div>
                    <div id='Animations-tv'>
                        <img src={require('./Images/Animation/animatedspider-man.jpg')} alt="" />
                        <div>
                            <h6>Marvel's Spider-Man<br /><span>2018</span></h6>
                        </div>
                    </div>

                </Slider>
            </div>         
        </div>
    );
}

export default Series;
