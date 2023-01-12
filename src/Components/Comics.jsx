import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const settingsnew = {
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
            dots: false,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner1.jpg")}
              alt=""
            />
          </div>

          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner2.jpg")}
              alt=""
            />
          </div>

          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner3.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner4.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner6.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner7.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner8.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner9.jpg")}
              alt=""
            />
          </div>
          <div className="banner2">
            <img
              style={{ width: "100%", height: "95vh" }}
              src={require("./Images/Comicsbanner/banner11.jpg")}
              alt=""
            />
          </div>
        </Slider>

        <div className="carousel">
          <h4>New Releases</h4>
          <Slider {...settingsnew}>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/avengers.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/captainmarvel.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/fantsticfour.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/goblin.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/joefixit.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/legends.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/marauders.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/shangchi.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/spiderman.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/starwars.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/xforce.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/NewReleases/starwars.jpg")}
                alt=""
              />
            </div>
          </Slider>
        </div>

        <div className="top">
          <h4>New Releases</h4>
          <Slider {...settingsnew}>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/age.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/amazingspider.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/antivenom.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/antman.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/deadpool.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/ghost.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/house.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/original.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/secretwars.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/spider.jpg")}
                alt=""
              />
            </div>
            <div id="top-item">
              <img
                src={require("./Images/Comicsbanner/Bestselling/wolvarine.jpg")}
                alt=""
              />
            </div>
          </Slider>
        </div>

        <div className="carousel">
          <h4>New Releases</h4>
          <Slider {...settingsnew}>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/amazingspider.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/blackpanther.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/daredevil.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/doctorstrange.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/fourfives.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/freexmen.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/godofthunder.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/hulk.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/legion.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/mightythor.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/shuri.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/thanos.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/thor.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/truestories.jpg")}
                alt=""
              />
            </div>
            <div id="carousel-item">
              <img
                src={require("./Images/Comicsbanner/Readfree/uncanny.jpg")}
                alt=""
              />
            </div>
          </Slider>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <img
                style={{ width: "600px", height: "50px" }}
                src={require("./Images/Finalpart/marvel-logo.png")}
              />
            </div>
            <div className="col-7 marvel">
              <h5>Marvel Cinematic Universe</h5>
            </div>
          </div>
        </div>
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-7 bg-black">
              <img
                src={require("./Images/Finalpart/marvelinsider.jpg")}
                alt=""
              />
            </div>
            <div className="col-5 bg-black">
              <h5>Marvel's Insider</h5>
              <h3>Watch ,Earn , Redeem !</h3>
              <p>Get rewarded for doing what you already do as a fan.</p>
              <a href="#"> JOIN NOW</a>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
