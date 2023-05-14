'use client'

import Image from "next/image"
import logo from "../../public/Logo_Large.png"
import {FaTwitter, FaYoutube, FaInstagram, FaSpotify,} from "react-icons/fa"
import Link from "next/link"
import { useEffect, useState } from "react"
import Hamburger from "./Hamburger"
import Menu from "./Menu"
import { motion, AnimatePresence } from "framer-motion"

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

export default function Nav(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        
    }, [])

    const setScroll = (isOpen: boolean) => {
        if(!isOpen){
            disableScroll()
        } else {
            enableScroll()
        }
    }

    return(
        // LOGO
        <nav className="flex-row flex items-center justify-between">

            <div className="flex items-center gap-8 p-3">
                <Link href={"/"}>
                    <Image 
                        src={logo} 
                        alt="Logo for Multi Sided Media" 
                        className="rounded-sm cursor-pointer"  
                    />
                </Link>
            </div>

        {/* HAMBURGER MENU */}
            <motion.div>   
                {/* 3 LINES */}
                <motion.button 
                    className={`${isOpen ? "hidden" : "flex"} absolute top-[5%] right-8 flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setScroll(isOpen);
                    }}
                > 
                    <div className={`w-8 h-1 bg-msmRed rounded-lg relative origin-top-right first:${isOpen ? "rotate-45" : "rotate-0"}`}></div>
                    <div className={`w-8 h-1 bg-msmBlue rounded-lg relative origin-top-right even::${isOpen ? "translate-x-20" : "translate-x-0"}`}></div>
                    <div className={`w-8 h-1 bg-msmYellow rounded-lg relative origin-top-right odd:${isOpen ? "-rotate-45" : "rotate-0"}`}></div>
                </motion.button>

                {/* X LINES */}
                <motion.button 
                    className={`${isOpen ? "flex" : "hidden"} absolute top-[5%] right-8 flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setScroll(isOpen);
                    }}
                > 
                    <div className={`w-8 h-1 bg-msmRed rounded-lg relative origin-transform-4px rotate-45`}></div>
                    <div className={`w-8 h-1 bg-msmYellow rounded-lg relative origin-transform-4px -rotate-45`}></div>
                </motion.button>

                {/* MENU */}
                
                    <div 
                        className='fixed w-full h-screen left-0 top-0 bg-black/25'
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        
                    >
                        <AnimatePresence>
                            <motion.div 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                className={`w-full ${isOpen ? "translate-x-0" : "translate-x-[100%]"} lg:w-2/6 flex flex-col justify-center bg-neutral h-screen text-left p-8 absolute top-0 right-0 ease-in-out`}
                                onClick={(e) => e.stopPropagation()}
                            >

                                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
                                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
                                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
                            </motion.div>
                        </AnimatePresence>
                    </div>
                

            </motion.div>
        </nav>
    )
}