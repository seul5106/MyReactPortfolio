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
    //스크롤 이벤트를 위한 상태값
    const [scrollPosition, setScrollPosition] = useState(0);
    const [divheight1, setDivheight1] = useState(0);
    const [divheight2, setDivheight2] = useState(0);
    const [data, setData] = useState(false);

    //스킬목록 클릭시 저장될 상태값
    const [visible, setVisible] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    })

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);

        //pathname을 조건문에 강제로 넣어 ReadMe버튼을 눌러 pathname이 바뀌었을 경우 실행이 안되게한다.
        if (window.location.pathname === "/MyReactPortfolio") {
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

    }, [scrollPosition, data, divheight1, divheight2, visible]);

    const clickSkill = (props) => {
        const dataset = props
        setVisible({
            ...visible,
            [dataset]: !visible[dataset]
        })
    }

    const updateSkilldiv = (props) => {
        if (visible[props] === false) {
            return "ClickSkillContentContainer"
        } else if (visible[props] === true) {
            return 'ClickSkillContentContainer2'
        }
    }

    return (
        <div id="3" className="SkillContainer">
            <div className='SkillTitleContainer'>
                <Link to="3" spy={true} smooth={true} duration={500} className="SkillClip"></Link>
                <p className='SkillTitle'>SKILLS</p>
            </div>


            <div className="SkillItemsContainer">
                <Fade spy={data}>
                    <div className="SkillContent frontend" onClick={() => { clickSkill(0) }}>
                        <p className="SkillContentTitle">Frontend</p>
                        <hr />
                        <img src={frontendImg} alt="프론트엔드" />
                        <div className={updateSkilldiv(0)}>
                            <div className='ClickSkillContent'>
                                <p className='ContentTitle'>HTML, CSS, JS</p>
                                <p>CSS의 유형별 선언 및 사용</p>
                                <p>CRUD를 준수하여 백엔드 API요청</p>
                                <p>JSON형태를 가지고 있는 데이터 가공 및 활용</p>
                                <p>회원가입, 로그인, 게시판 구축</p>
                                <p>아임포트연동을 통한 결제시스템 구현</p>
                                

                                <p className='ContentTitle'>React</p>
                                <p>함수형 컴포넌트 작성</p>
                                <p>react-router-dom을 사용한 페이지 이동</p>
                                <p>redux를 사용한 전역 상태값 관리</p>
                                <p>axios를 사용한 CRUD 요청</p>
                                <p>Hook을 사용한 생명주기관리</p>
                            </div>
                        </div>
                    </div>

                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent server" onClick={() => { clickSkill(1) }}>
                        <p className="SkillContentTitle">Server</p>
                        <hr />
                        <img src={serverImg} alt="서버" />
                        <div className={updateSkilldiv(1)}>
                            <div className='ClickSkillContent'>
                                <p className='ContentTitle'>Node</p>
                                <p>REST FULL API 구현</p>
                                <p>프론트엔드의 요청에 맞는 데이터 반환</p>
                                <p>winston 라이브러리로 백엔드 로그 관리</p>
                                <p>서버에 이미지 파일 저장</p>
                                <p>구글 SMTP를 사용한 메일링 기능 구현</p>
                                <p>JWT토큰 인증기능 구현</p>
                                
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent database" onClick={() => { clickSkill(2) }}>
                        <p className="SkillContentTitle">Database</p>
                        <hr />
                        <img src={databasesImg} alt="프론트엔드" />
                        <div className={updateSkilldiv(2)}>
                            <div className='ClickSkillContent'>
                                <p className='ContentTitle'>MySQL</p>
                                <p>2424</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent linux" onClick={() => { clickSkill(3) }}>
                        <p className="SkillContentTitle">Linux</p>
                        <hr />
                        <img src={linuxImg} alt="프론트엔드" />
                        <div className={updateSkilldiv(3)}>
                            <div className='ClickSkillContent'>
                                <p>123</p>
                                <p>2424</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent git" onClick={() => { clickSkill(4) }}>
                        <p className="SkillContentTitle">SCM</p>
                        <hr />
                        <img src={gitImg} alt="프론트엔드" />
                        <div className={updateSkilldiv(4)}>
                            <div className='ClickSkillContent'>
                                <p>123</p>
                                <p>2424</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade spy={data}>
                    <div className="SkillContent cloud" onClick={() => { clickSkill(5) }}>
                        <p className="SkillContentTitle">Cloud Server</p>
                        <hr />
                        <img src={naverCloudImg} alt="프론트엔드" />
                        <div className={updateSkilldiv(5)}>
                            <div className='ClickSkillContent'>
                                <p>123</p>
                                <p>2424</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skill;