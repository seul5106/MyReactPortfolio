import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dessert40RM = () => {
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
                    <p>회원가입 시 다음 카카오 주소API를 가져와 사용하였습니다</p>
                    <p>회원가입 시 유효성검사를 각 input태그의 값마다 넣어주었으며 모두 통과하면 회원가입이 됩니다.</p>
                </div>
                <div className="ProjectRMContent">
                    <h3>💡&nbsp; 개발비화</h3>

                    <p>풀스택 교육 과정 중 진행한 프로젝트이며 비대면 수업이었지만, 팀원들과 주 3회 정도 만나며 코드 리뷰나 추가되었으면 하는 기능들을 구상하였습니다. 사정이 있더라도 꼭 화상으로라도 회의를 진행하였고, 기획부터 배포까지 목표를 세우고 카카오 오븐으로 폼을 만들어 해당 문서를 보며 코딩을 진행했습니다. </p>
                    <p>폭포수 개발모델로 개발하는것 보다 초보자들이다 보니 애자일 모델로 필요한 기능이 있을때마다 추가하는 형식으로 진행하였습니다.</p>
                    <p> 폭포수 개발모델로 개발하는 것보다 초보자들이다 보니 애자일 형식으로 필요한 기능이 있을 때마다 추가했고, </p>
                    <p>이 과정에서 의견이 어긋날 때면 팀원들과 대화를 통해 해결해 나갔습니다.</p>
                    <p>의견 조율이 쉽지 않았지만, 서로 코드 리뷰를 하고 그날그날 팀원들이 깃에 푸시한 내용을 보고 자극을 받아 밤을 지새우며 코딩해보는 좋은 경험이었습니다.</p>
                </div>
                <div className="ProjectRMContent">
                    <h3>🚧 개선해야하는 점</h3>
                    <p>첫 프로젝트이다 보니 세 번째 프로젝트까지 진행한 현재 판단해 보면 디자인적으로 아쉬운 부분이 많았습니다.</p>
                    <p>이미지 비율이나 클래스 이름도 제각각이라 이를 보완해야 될 것으로 보이며
                        종합적으로 기능은 괜찮지만 보이는 부분에 대한 것들에 대한 수정이 필요해 보입니다.</p>
                </div>
            </div>
            <div className="ProjectRMFooter">

            </div>
        </div>
    );
};

export default Dessert40RM;