import React from 'react';
import {Link} from "react-scroll"

import '../../assets/css/About.min.css'

const Home = () => {

    return (
        <>
            <div className='HomeContainer'>
                <div id="1" className='img'>

                </div>
                <div className='HomeIntroduce'>
                    <p className='Name'>- 정한슬 -</p>
                    <p className="NamePortfolio">웹 개발자 포트폴리오</p>
                    <p className='Nameintro1'>모르는것이 있으면 알때까지</p>
                    <p className='Nameintro2'>항상 노력하는 개발자입니다</p>
                    <button className='NameBtn'><Link to="2" spy={true} smooth={true}>더 알아보기</Link></button>
                </div>
            </div>
            <div className='AboutContent'>
                
            </div>
        </>
    );
};

export default Home;