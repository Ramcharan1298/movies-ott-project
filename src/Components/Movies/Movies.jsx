import React from "react";
import "./Moviestyles.css";
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
]
}
  return (
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
    </div>
  );
};

export default Movies;
