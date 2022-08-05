import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from "react-scroll"
import { throttle } from 'lodash';

import "../../assets/css/Tab.min.css"

import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import Project from '../ProjectComponent/Project';

const Tab = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const beforeScrollY = useRef(0)
    const scrollEvent = useMemo(
        () =>
            throttle(() => {
                beforeScrollY.current = window.scrollY
                setScrollPosition(beforeScrollY.current || document.documentElement.scrollTop);
            }, 200),
        [beforeScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
    });

    const calscroll = () => {
        if (scrollPosition < 70) {
            return "TabContainer TabSizing"
        } else {
            return "transTabContainer TabSizing"
        }
    }



    return (
        <>
            <div className={calscroll()}>
                <ul className="TabLeft">
                    <Link to="1" spy={true} smooth={true}>Home</Link>
                </ul>
                <ul className="TabRight">
                    <Link to="2" spy={true} smooth={true}>About</Link>
                    <Link to="3" spy={true} smooth={true}>Skill</Link>
                    <Link to="4" spy={true} smooth={true}>Project</Link>
                </ul>
            </div>
            <div className="TabChange">
                <Link to="1" spy={true} smooth={true}>Home</Link>
                <Link to="2" spy={true} smooth={true}>About</Link>
                <Link to="3" spy={true} smooth={true}>Skill</Link>
                <Link to="4" spy={true} smooth={true}>Project</Link>
            </div>
            <Home />
            <About />
            <Skill />
            <Project />
        </>
    );
};

export default Tab;