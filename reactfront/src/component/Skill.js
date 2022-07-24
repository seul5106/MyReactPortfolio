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
    const [data, setData] = useState(false);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        if (scrollPosition < 450 || scrollPosition > 2200) {
            setData(true)
        } else {
            setData(false)
        }
        
    }, [scrollPosition, data]);

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