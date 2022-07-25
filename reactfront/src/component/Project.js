import React from 'react';
import { Link } from "react-scroll"

import "../assets/css/Project.min.css";
import PhotoReservationImg from  "../assets/img/ProjectImg/사진예약.PNG"

const Project = () => {
    return (
        <div id="4" className="ProjectContainer">
            <div className='ProjectTitleContainer'>
                <Link to="4" spy={true} smooth={true} duration={500} className="ProjectClip"></Link>
                <p className='ProjectTitle'>PROJECT</p>
            </div>
            <div className="ProjectItemsContainer">
                <div className='ProjectContent'>
                    <p className='ProjectName'>Dessert40</p>
                    <hr />
                    <div className='InfoContainer'>
                        <div className='InfoImg1'></div>
                        <div className='InfoContentContainer'>
                            <div className='Info'>
                                <p><strong>Dessert39 사이트를 밴치마킹하여 디저트를 구매할 수 있는 모바일 사이트를 구축했습니다.</strong>
                                &nbsp;바닐라 자바스크립트를 사용하였으며 Node서버를 활용하여 RestFull API를 구축하였습니다. 관리자 페이지 또한 BootStrap을 사용하여 만들었고 
                                    아임포트를 연동하여 실 결제가 이루어지도록 하였습니다.
                                </p>
                                <p>(테스트 단계라 결제 시도 시 12:00AM에 전액환불됩니다.)</p>
                            </div>
                            <div className="InfoDevelopment">
                                <p><strong>개발인원:</strong>&nbsp;3</p>
                                <p><strong>Frontend:</strong>&nbsp;JavaScript, Html, Css</p>
                                <p><strong>Backend:</strong>&nbsp; Node.js</p>
                                <p><strong>Database:</strong>&nbsp; MySQL</p>
                                <p><strong>사용자 페이지 주요기능:</strong>&nbsp;로그인, 회원가입, 장바구니, 결제, 결제취소</p>
                                <p><strong>관리자 페이지 주요기능:</strong>&nbsp;회원관리, 상품관리, 주문관리, 이벤트관리, QnA관리</p>
                                <p><strong>사용자 페이지 URL:</strong>&nbsp;<a href='http://118.67.129.217:3217/html/signin.html'>dessert40</a> </p>
                                <p><strong>관리자 페이지 URL:</strong>&nbsp;<a href='http://118.67.129.217:3217/html/admin/admin_login.html'>dessert40/Admin</a></p>
                                <p><strong>Github:</strong>&nbsp;<a href='https://github.com/seul5106/ezenproject_final'>GithubURL</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ProjectContent'>
                    <p className='ProjectName'>PhotoReservation</p>
                    <hr />
                    <div className='InfoContainer'>
                        <div className='InfoImg2'><img src={PhotoReservationImg} alt="PhotoReservation"/></div>
                        <div className='InfoContentContainer'>
                            <div className='Info'>
                                <p><strong>친한 형이 사진스튜디오를 설립한다해서 이런 페이지가 있으면 어떨까 해서 개발하였습니다.</strong>
                                &nbsp; React를 사용한 첫 프로젝트며 router-dom, redux, redux-toolkit, redux-persist에 대해 공부가 되었습니다.
                                </p>
                                <p>로그인 인증방식에 대해서 끊임없이 생각했으며 jwt토큰을 사용한 인증방식을 채택하였습니다.</p>
                                <p>클라이언트와 서버를 분리시키려 노력했으며 서버는 Node.js, 클라이언트는 linux환경에서 NGINX를 사용하여 가동시켰습니다.</p>
                            </div>
                            <div className="InfoDevelopment">
                                <p><strong>개발인원:</strong>&nbsp;1</p>
                                <p><strong>Frontend:</strong>&nbsp;React Sass</p>
                                <p><strong>Backend:</strong>&nbsp; Node.js</p>
                                <p><strong>Database:</strong>&nbsp; MySQL</p>
                                <p><strong>사용자 페이지 주요기능:</strong>&nbsp;로그인, 회원가입, 예약하기, 예약취소</p>
                                <p><strong>관리자 페이지 주요기능:</strong>&nbsp;회원확인, 예약확인</p>
                                <p><strong>사용자 페이지 URL:</strong>&nbsp;<a href='http://118.67.129.217:9908/'>PhotoReservation</a> </p>
                                <p><strong>관리자 페이지 URL:</strong>&nbsp;관리자사이트는 관리자 아이디로 로그인 후 Profile탭을 확인</p>
                                <p><strong>Github:</strong>&nbsp;<a href='https://github.com/seul5106/photoreservation'>GithubURL</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ProjectContent'>
                    <p className='ProjectName'>MyReactPortfolio</p>
                    <hr />
                    <div className='InfoContainer'>
                        <div className='InfoImg3'></div>
                        <div className='InfoContentContainer'>
                            <div className='Info'>
                                <p><strong>구글 탐색도중 많은 웹개발자들이 개인 웹 포트폴리오 사이트를 가지고 있어 나도 하나 가지고 있으면 좋을것 같아서 개발하였습니다</strong>
                                &nbsp; 모바일과 PC에서 볼 수 있게 최대한 반응형을 고려하여 작업하였습니다.
                                </p>
                                <p>미디어 쿼리를 활용할까도 생각했지만 display:flex를 사용하여 공간 설정만 해주니 손쉽게 반응형을 만들 수 있었습니다.</p>
                            </div>
                            <div className="InfoDevelopment">
                                <p><strong>개발인원:</strong>&nbsp;1</p>
                                <p><strong>Frontend:</strong>&nbsp;React, Sass</p>
                                <p><strong>Backend:</strong>&nbsp; github.io를 활용</p>
                                <p><strong>사용자 사이트 URL:</strong>&nbsp;<a href='https://seul5106.github.io/MyReactPortfolio/'>MyReactPortfolio</a> </p>
                                <p><strong>Github:</strong>&nbsp;<a href='https://github.com/seul5106/MyReactPortfolio'>GithubURL</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;