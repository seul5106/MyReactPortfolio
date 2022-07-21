import React, {useState, useEffect} from 'react';
import {Link} from "react-scroll"
import Home from './Home';


import "../../assets/css/Tab.min.css"



const Tab = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    const calscroll = () => {
        if(scrollPosition < 70){
            return "TabContainer"
        }else{
            return "transTabContainer"
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
                    <Link to="3" spy={true} smooth={true}>Project</Link>
                </ul>
                
            </div>
            <Home/>
        </>
    );
};

export default Tab;