import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade'

import frontendImg from "../assets/img/SkillImg/frontend.png";
import serverImg from "../assets/img/SkillImg/server.png";
import databasesImg from "../assets/img/SkillImg/databases.png";
import linuxImg from "../assets/img/SkillImg/linux.jpg";
import gitImg from "../assets/img/SkillImg/git.png";
import naverCloudImg from "../assets/img/SkillImg/cloud.png-down.jpg";

import '../assets/css/Skill.min.css'

const Skill = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [divheight1, setDivheight1] = useState(0);
    const [divheight2, setDivheight2] = useState(0);
    const [data, setData] = useState(false);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        
        //pathname을 조건문에 강제로 넣어 ReadMe버튼을 눌러 pathname이 바뀌었을 경우 실행이 안되게한다.
        if (window.location.pathname === "/") {
            let elHeight1 = document.getElementById('1').clientHeight
            let elHeight2 = document.getElementById('2').clientHeight
            let elHeight3 = document.getElementById('3').clientHeight
            setDivheight1(elHeight1 + elHeight2 + elHeight3)
            setDivheight2(elHeight1 + elHeight2)
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        if (scrollPosition < 500 || scrollPosition > divheight1 - 70) {
            setData(true)
        } else {
            setData(false)
        }
    }, [scrollPosition, data, divheight1, divheight2]);

    return (
        <div id="3" className="SkillContainer">
            <div className='SkillTitleContainer'>
                <Link to="3" spy={true} smooth={true} duration={500} className="SkillClip"></Link>
                <p className='SkillTitle'>SKILLS</p>
            </div>


            <div className="SkillItemsContainer">
                <Fade spy={data}>
                    <div className="SkillContent frontend">
                        <p>Frontend</p>
                        <hr />
                        <img src={frontendImg} alt="프론트엔드" />
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent server">
                        <p>Server</p>
                        <hr />
                        <img src={serverImg} alt="서버" />
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent database">
                        <p>Database</p>
                        <hr />
                        <img src={databasesImg} alt="프론트엔드" />
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent linux">
                        <p>Linux</p>
                        <hr />
                        <img src={linuxImg} alt="프론트엔드" />
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent git">
                        <p>SCM</p>
                        <hr />
                        <img src={gitImg} alt="프론트엔드" />
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent cloud">
                        <p>Cloud Server</p>
                        <hr />
                        <img src={naverCloudImg} alt="프론트엔드" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skill;