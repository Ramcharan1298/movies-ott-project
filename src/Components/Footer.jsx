import React from "react";
import "./Footerstyles.css";
import {AiFillFacebook ,AiFillInstagram ,AiFillYoutube} from 'react-icons/ai';
import {BsTwitter , BsSnapchat , BsPinterest} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-3 child">
                            <div className="img-1">
                                <img src="https://www.marvel.com/static/images/favicon/android-chrome-icon-194.png" alt="marvel" style={{ width: 80, height: 120 }}></img>
                            </div>
                        
                            <ul>
                                <li><a href="">ABOUT MARVEL</a></li>
                                <li><a href="">HELP/FAQS</a></li>
                                <li><a href="">CAREERS</a></li>
                                <li><a href="">INTERSHIPS</a></li>
                            </ul>
                        </div>


                        <div className="col-2 child2">
                            <ul>
                                <li><a href="">ADVERSTISING</a></li>
                                <li><a href="">DISNEY</a></li>
                                <li><a href="">MARVELHQ.COM</a></li>
                                <li><a href="">REDEEM DIGITAL</a></li>
                                <li><a href="">COMICS</a></li>
                            </ul>

                        </div>
                        <div className="col-5 child3">
                                <img src="https://i0.wp.com/chipandco.com/wp-content/uploads/2016/07/Marvel_Insider_LOGO.jpg" alt="marvel insider" style={{ width: 20, height: 30 }}/><a href="">MARVEL INSIDER</a><br /><br />


                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Marvel-Unlimited-Logo.png" alt="marvel unlimited" style={{ width: 27, height: 40 }}/><a href="#">MARVEL UNLIMITED</a>
                        </div>

                        <div className="col-2 Icons">
                            <p>FOLLOW MARVEL</p>
                            <AiFillFacebook className="media"/>
                            <BsTwitter className="media"/>
                            <AiFillInstagram className="media"/><br />
                            <AiFillYoutube className="media"/>
                            <BsSnapchat className="media"/>
                            <BsPinterest className="media"/>
                        </div><br /><br /><hr style={{color:"white"}} />

                        <div className="edge">
                            <p>Terms of use&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                            <p>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
                            <p>US Privacy Rights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
                            <p>Site Map.@2022 Marvel Group India&nbsp;&nbsp;&nbsp;&nbsp; |</p>
                            <p>License Agreement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                            <p>Interested Based Ads&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                            <p>Marvel Insider Terms&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;