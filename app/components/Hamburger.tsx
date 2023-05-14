'use client'

import Link from 'next/link'
import { NavbarType } from '../types/NavbarType'

const disableScroll = () => {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

const enableScroll = () => {
    window.onscroll = function() {};
}

export default function Hamburger({
    isOpen, 
    setIsOpen
}: NavbarType) {
    const setScroll = (isOpen: boolean) => {
        if(!isOpen){
            disableScroll()
        } else {
            enableScroll()
        }
    }

    return(
        <button 
            className='absolute top-[5%] right-8 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none'
            onClick={() => {
                setIsOpen(!isOpen);
                setScroll(isOpen);
            }}
        > 
            <div className='w-8 h-1 bg-msmRed rounded-lg ease-linear relative origin-top-right'></div>
            <div className='w-8 h-1 bg-msmBlue rounded-lg ease-linear relative origin-top-right'></div>
            <div className='w-8 h-1 bg-msmYellow rounded-lg ease-linear relative origin-top-right'></div>
        </button>
    )
}