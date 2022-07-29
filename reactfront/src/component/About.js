import React from 'react';
import { Link } from "react-scroll";

import userImg from "../assets/img/AboutIcon/user.png";
import pencilImg from "../assets/img/AboutIcon/pencil.png";
import locationImg from "../assets/img/AboutIcon/pin.png";
import mailImg from "../assets/img/AboutIcon/mail.png";
import phoneImg from "../assets/img/AboutIcon/premium-icon-telephone-5037686.png";
import calendarImg from "../assets/img/AboutIcon/calendar.png";


const About = () => {
    return (
        <div id='2' className="AboutContainer">
            <div className='AboutTitleContainer'>
                <Link to="2" spy={true} smooth={true} duration={500} className="AboutClip"></Link>
                <p className='AboutTitle'>ABOUT</p>
            </div>

            <div className="AboutContentContainer">
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={userImg} alt="이름" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">이름</p>
                            <p className="AboutContentP2">정한슬</p>
                        </div>
                    </div>
                </div>
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={pencilImg} alt="생년월일" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">생년월일</p>
                            <p className="AboutContentP2">95.02.04</p>
                        </div>
                    </div>
                </div>
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={locationImg} alt="주소지" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">주소지</p>
                            <p className="AboutContentP2">안양시 동안구</p>
                        </div>
                    </div>
                </div>
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={phoneImg} alt="연락처" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">연락처</p>
                            <p className="AboutContentP2">010-9057-0451</p>
                        </div>
                    </div>
                </div>
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={mailImg} alt="이메일" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">이메일</p>
                            <p className="AboutContentP2">seul510@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="AboutContentWrapper">
                    <div className="AboutContent">
                        <img src={calendarImg} alt="학력" />
                        <div className="AboutContentPContainer">
                            <p className="AboutContentP1">학력</p>
                            <p className="AboutContentP2">성결대학교</p>
                            <p className="AboutContentP2">(컴퓨터공학부)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;