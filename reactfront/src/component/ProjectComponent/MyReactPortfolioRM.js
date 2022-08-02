import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyReactPortfolioRM = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="ProjectRMContainer">
            <div className="ProjectRMTab">
                <Link to="/MyReactPortfolio">Home</Link>
            </div>
            <div className='ProjectRMContentContainer'>
                <div className="ProjectRMContent">
                    <h1>🚀Dessert40</h1>
                    <hr />
                </div>
                <div className="ProjectRMContent">
                    <h3 className="semititle">📌 프로젝트 소개</h3>
                    <p><strong>Dessert39사이트의 물건들을 살 수있는 모바일용 웹페이지</strong> 입니다</p>
                    <h3>* 사용자 페이지 주요기능</h3>
                    <ul>
                        <li>회원가입, 로그인</li>
                        <li>장바구니</li>
                        <li>구매 및 실 결제</li>
                    </ul>

                    <h3>* 관리자 페이지 주요기능</h3>
                    <ul>
                        <li>로그인</li>
                        <li>회원관리 (회원탈퇴 및 이름으로 회원검색)</li>
                        <li>결제관리 (결제취소)</li>
                        <li>상품관리 (사용자 페이지에 보여질 물품 추가(상품설명, 가격, 수량등), 삭제)</li>
                        <li>이벤트관리 (사용자 페이지에서 보여지는 이벤트 배너 추가, 삭제)</li>
                        <li>QnA관리 (사용자가 작성한 질문에 대한 답변 추가 및 삭제)</li>
                    </ul>
                </div>
                <div className="ProjectRMContent">
                    <h3>📝&nbsp; 프로젝트에서 맡은부분</h3>
                    <p>Node서버구축</p>
                    <p>결제 페이지 부분과 상품 페이지</p>
                    <p>회원가입 및 로그인 페이지</p>
                    <p>MySQL 테이블 구조 디자인</p>
                    <br />
                    <p>html의 DOM트리 구조를 잘 이해하게 되었고 실결제 시 고려해야할 사항
                        (아임포트서버와 프로젝트의 서버에서의 인증절차 방식)을 공부하였습니다.
                    </p>
                    <p>원래는 결제시스템을 API가 아닌 직접 구현하려고 했었습니다 하지만 개발하다보니 카드 또는 무통장 입금, 네이버 페이등 고려해야할 부분이 너무나도 많아 아임포트를 사용하였습니다.</p>
                    <p>로그인 부분에서는 express세션을 사용하여 사용자 인증을 하였습니다. 유효기간도 설정해두어서 시간이 지나면 자동으로 로그아웃 되게 구성하였습니다.</p>
                    <p></p>
                </div>
                <div className="ProjectRMContent">
                    <h3>💡&nbsp; 개발비화</h3>

                    <p>팀원들이랑 주3회정도는 만나서 코드리뷰나 추가되었으면 하는 기능들을 구상하였습니다. 사정이 있는 경우에는 화상회의로라도 꼭 진행하였습니다.</p>
                    <p>또한 팀원들간 기획부터 배포까지 목표를 잡아놓다 보니 문서작업이 필요해서 테이블 명세서나 카카오 오븐으로 대략적인 폼을 만들고 문서를 보며 코딩하였습니다.</p>
                    <p>폭포수 개발모델로 개발하는것 보다 초보자들이다 보니 애자일 모델로 필요한 기능이 있을때마다 추가하는 형식으로 진행하였습니다.</p>
                    <p>팀프로젝트다 보니 우여곡절도 정말로 많았습니다.</p>
                    <p>같이 진행했던 팀원중 한명이 테이블 구조를 멋대로 바꿔놔서 다른팀원이랑 대판 싸운적이 있었습니다</p>
                    <p>프로젝트를 리딩하는 입장이라 둘을 화해시키는대 정말로 애먹었습니다..</p>
                    <p>물론 우여곡절이 많다해도 서로 코드 리뷰를 하고 그날그날 팀원들이 깃에 푸시한 내용을 보고 자극을 받아 밤을 지새워서 코딩한 경험이 저한테는 너무나도 소중합니다</p>
                </div>
                <div className="ProjectRMContent">
                    <h3>🚧 개선해야하는 점</h3>
                    <p>세번째 프로젝트까지 진행하고 나서 지금 프로젝트를 보니 프론트 엔드인대 디자인이 정말로 별로 입니다..</p>
                    <p>첫 웹 프로젝트다 보니 이미지의 비율은 죄다 깨져있고 클래스 이름이 제각각 이었습니다.</p>
                    <p>또한 보여지는 상품의 이미지가 너무 큰 것도 있습니다.</p>
                    <p>종합적으로 볼때 기능적인 면을 추구하다보니 보이는 부분들에 대한 전반적인 수정이 필요해보입니다.</p>
                </div>
            </div>
            <div className="ProjectRMFooter">

            </div>
        </div>
    );
};

export default MyReactPortfolioRM;