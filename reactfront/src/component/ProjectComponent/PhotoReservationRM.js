import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PhotoReservationRM = () => {
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
                    <h1>🚀PhotoReservation</h1>
                    <hr />
                </div>
                <div className="ProjectRMContent">
                    <h3 className="semititle">📌 프로젝트 소개</h3>
                    <p><strong>지인의 포토스튜디오 설립으로 만들어본 페이지</strong>입니다.</p>
                    <h3>* 주요기능</h3>
                    <ul>
                        <li>회원가입, 로그인</li>
                        <li>예약기능</li>
                    </ul>
                    <p>JWT토큰을 사용한 사용자 인증</p>
                    <p>슬라이더 기능을 위한 Swiper사용</p>
                    <p>전역 상태값 관리를 위한 redux</p>
                    <p>페이지 새로고침 시 상태값 유지를 위한 redux-persist</p>
                    <p>페이지 이동 구현을 위한 react-router-dom</p>
                    <p>프론트 서버는 NGINX에 리액트에서 빌드한 파일을 올려서 가동하였습니다.</p>
                    <p>백엔드 서버는 Node로 구성하였습니다.</p>
                </div>

                <div className="ProjectRMContent">
                    <h3>💡&nbsp; 개발비화</h3>
                    <p> 리액트를 사용하여 개발하였으며 전반적인 상태값 관리에 대한 역량을 쌓을 수 있었습니다.</p>
                    <p>클라이언트 서버와 노드 서버를 따로 분리하는 것에 중점을 두었는데, 소개·예약사이트라 서버가 다운된다 하더라도 클라이언트는 보여주는 것이 맞다고 판단해 해당 방식으로 진행했습니다.</p>
                    <p>그래서 크로스도메인 이슈(CORS)에 대한 대책이 필요했고, 프록시 설정을 통해 해결했습니다.</p>
                    <p>NGINX에 리액트 빌드 파일을 올려두니 페이지 이동 시 NGINX는 /뒤에 있는 파일을 찾으려 해 404 오류가 생겨났습니다.</p>
                    <p>리액트는 router를 사용하여 페이지 이동을 하다 보니 파일을 찾지 못하는 이슈였습니다.</p>
                    <p> 이를 해결하기 위해 CentOS에서 NGINX의 설정 파일을 찾아 404페이지일 경우 내가 빌드한 파일을 찾게 수정하며 잘 마무리할 수 있었습니다.</p>
                </div>
                <div className="ProjectRMContent">
                    <h3>🚧 개선해야하는 점</h3>
                    <p>개발자 커뮤니티에 피드백을 요청한 결과 대부분 기능적인 면은 됐지만, 리소스 절감 조치가 필요해 보인다는 지적을 받았습니다.</p>
                    <p>
                        Gallery탭의 백그라운드 동영상을 부담이 덜 되게 YouTube 동영상으로 바꾸고,
                        사진들의 용량이 너무 커서 페이지 로딩시간이 길어지다 보니 이미지의 크기와 사이즈에 대한 전반적인 수정이 필요해 보입니다.
                    </p>
                    <p> redux-persist를 사용하여 페이지 새로고침 시 자신이 현재 있는 탭에 대한 상태 값을 유지하게 했었으나,
                        현재 URL의 path 값을 받아와 상태 값을 유지 시키는 것이 좋다고 판단됩니다.</p>
                </div>
            </div>
            <div className="ProjectRMFooter">

            </div>
        </div>
    );
};

export default PhotoReservationRM;