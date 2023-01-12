import React from "react";
import "./trendingstyles.css";
import { TfiGame} from 'react-icons/tfi';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Marvel from './Images/marvelintro.mp4';

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="total">
      <div className="mainvideo">
            {/* <h1>This is Trailers Page</h1> */}
            <Video autoPlay loop muted
            width="100%"
            height="90%"
             >
               <source src={Marvel} type='video/mp4'/>
             </Video>

        </div><br /><br />

      <div className="Main">
        <h2>&nbsp;<TfiGame/>&nbsp;<TfiGame/>&nbsp;&nbsp;&nbsp; Marvel Game Collection &nbsp;&nbsp;&nbsp;<TfiGame/>&nbsp;<TfiGame/>&nbsp;</h2>
        <br />
        {/* <Slider {...settings}> */}

        <div className="Game-carousel">
          <div className="  game">
            <img src={require("./Images/Games/avengers.jpg")} alt="" />
            <h6>
              Marvel's Avengers
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className=" game">
            <img src={require("./Images/Games/champions.jpg")} alt="" />
            <h6>
              Marvel Contest of Champions
              <br />
              <span>2020</span>
            </h6>
          </div>

          <div className="game">
            <img src={require("./Images/Games/fortnite.jpg")} alt="" />
            <h6>
              Fortnite
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className="game">
            <img src={require("./Images/Games/future.jpg")} alt="" />
            <h6>
              MARVEL Future Revolution
              <br />
              <span>2021</span>
            </h6>
          </div>
        </div>

        {/* </Slider> */}
      </div>

      <div className="Main">
        {/* <Slider {...settings}> */}

        <div className="Game-carousel">
          <div className="  game">
            <img src={require("./Images/Games/futurefight.jpg")} alt="" />
            <h6>
              MARVEL Future Fight
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className=" game">
            <img src={require("./Images/Games/galaxy.jpg")} alt="" />
            <h6>
              Marvel's Guardians of the Galaxy
              <br />
              <span>2021</span>
            </h6>
          </div>

          <div className="game">
            <img src={require("./Images/Games/infinite.jpg")} alt="" />
            <h6>
              Marvel vs. Capcom: Infinite
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className="game">
            <img src={require("./Images/Games/ironman.jpg")} alt="" />
            <h6>
              Marvel's Iron Man VR
              <br />
              <span>2020</span>
            </h6>
          </div>
        </div>

        {/* </Slider> */}
      </div>

      <div className="Main">
        {/* <Slider {...settings}> */}

        <div className="Game-carousel">
          <div className="  game">
            <img src={require("./Images/Games/lego.jpg")} alt="" />
            <h6>
              LEGO® Marvel Collection Bundle
              <br />
              <span>2019</span>
            </h6>
          </div>
          <div className=" game">
            <img src={require("./Images/Games/marvelspider.jpg")} alt="" />
            <h6>
              Marvel's Spider-Man
              <br />
              <span>2018</span>
            </h6>
          </div>

          <div className="game">
            <img src={require("./Images/Games/midnight.jpg")} alt="" />
            <h6>
              Marvel's Midnight Suns
              <br />
              <span>2022</span>
            </h6>
          </div>
          <div className="game">
            <img src={require("./Images/Games/morales.jpg")} alt="" />
            <h6>
              Marvel's Spider-Man: Miles Morales
              <br />
              <span>2020</span>
            </h6>
          </div>
        </div>

        {/* </Slider> */}
      </div>

      <div className="Main">

        {/* <Slider {...settings}> */}

        <div className="Game-carousel">
          <div className="  game">
            <img src={require("./Images/Games/pinball.jpg")} alt="" />
            <h6>
              Marvel Pinball
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className=" game">
            <img src={require("./Images/Games/puzzlequest.jpg")} alt="" />
            <h6>
              MARVEL Puzzle Quest
              <br />
              <span>2020</span>
            </h6>
          </div>

          <div className="game">
            <img src={require("./Images/Games/snap.png")} alt="" />
            <h6>
              MARVEL SNAP
              <br />
              <span>2022</span>
            </h6>
          </div>
          <div className="game">
            <img src={require("./Images/Games/spider.jpg")} alt="" />
            <h6>
              MARVEL Spiderman
              <br />
              <span>2021</span>
            </h6>
          </div>
        </div>

        {/* </Slider> */}
      </div>

      <div className="Main">

        {/* <Slider {...settings}> */}

        <div className="Game-carousel">
          <div className="  game">
            <img src={require("./Images/Games/strikeforce.jpg")} alt="" />
            <h6>
              Marvel Strike Force
              <br />
              <span>2020</span>
            </h6>
          </div>
          <div className=" game">
            <img src={require("./Images/Games/telltale.jpg")} alt="" />
            <h6>
              Marvel's Guardians of the Galaxy: The Telltale Series
              <br />
              <span>2020</span>
            </h6>
          </div>

          <div className="game">
            <img src={require("./Images/Games/theblackorder.jpg")} alt="" />
            <h6>
              Marvel Ultimate Alliance 3: The Black Order
              <br />
              <span>2019</span>
            </h6>
          </div>
          <div className="game">
            <img src={require("./Images/Games/wolvarine.jpg")} alt="" />
            <h6>
              Marvel's Wolverine
              <br />
              <span>2025</span>
            </h6>
          </div>
        </div>

        {/* </Slider> */}
      </div>


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
  );
};

export default Trending;
