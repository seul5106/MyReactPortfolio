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
                    <h1>🚀MyReactPorfolio</h1>
                    <hr />
                </div>
                <div className="ProjectRMContent">
                    <h3 className="semititle">📌 프로젝트 소개</h3>
                    <p>저 자신을 소개하는 <strong>포트폴리오 웹 페이지</strong> 입니다</p>
                    <h3>* 페이지 주요기능</h3>
                    <ul>
                        <li>react-reveal을 사용한 Fade효과</li>
                        <li>react-scroll을 사용하여 원하는 위치로 스크롤 이동</li>
                    </ul>
                </div>

                <div className="ProjectRMContent">
                    <h3>💡&nbsp; 개발비화</h3>
                    <p>포트폴리오 웹페이지다 보니 기능보다는 시각적인 효과를 중점에 두고 만들었습니다.</p>
                    <p>스크롤을 내렸을 때 react-reveal이라는 Fade 기능을 넣어줄 수 있는 라이브러리를 활용했습니다.</p>
                    <p>
                        react-reveal에는 스크롤이 어느 위치에 도달했을 경우 다시 나타나게 해주는 파라미터가 없어서 수동으로 코드를 넣어주어야 했습니다.
                        문서를 뒤져서 spy라는 파라미터값을 넣어주면 그 값이 바뀔때 초기화가 된다는 것을 발견하였습니다.
                    </p>
                    <p>
                        window.addEventListener를 사용하여 scroll이벤트를 추가하고 상태값에 할당한뒤, Fade의 spy파라미터에 할당하여
                        Fade 컴포넌트가 초기화 되게 구성하였습니다.
                    </p>
                    <p>
                        페이지를 열어두고 시간이 좀 지나니 react-scroll에 대한 동작이 지나치게 끊기는 현상이 발생하여 추적을 해보니 스크롤 이벤트 등록을 해둔 부분에서 지난 동작에 대한 스크롤 이벤트가 동작하였습니다.
                    </p>
                    <p>이 현상을 막기 위해 throttle을 사용하여 0.1초에 한 번만 실행하게 하니 위에 서술했던 문제가 해결되었습니다.</p>
                </div>
                <div className="ProjectRMContent">
                    <h3>🚧 개선해야하는 점</h3>
                    <p>이미지에 대한 리소스 절감 조치는 하였으나 폰트 파일에 대한 리소스 절감 조치가 필요해 보입니다.</p>
                </div>
            </div>
            <div className="ProjectRMFooter">

            </div>
        </div>
    );
};

export default MyReactPortfolioRM;