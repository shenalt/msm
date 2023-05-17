'use client'

import Image from "next/image"
import logo from "../../public/Logo_Large.png"
import {FaTwitter, FaYoutube, FaInstagram, FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
        <nav className="flex-row flex items-center justify-between bg-bkgColor">
            <div className="flex items-center gap-8 p-3 md:p-5">
                <Link href={"/"}>
                    <Image 
                        src={logo} 
                        alt="Logo for Multi Sided Media" 
                        className="rounded-sm cursor-pointer"  
                        width={125}
                        height={125}
                    />
                </Link>
            </div>
        {/* HAMBURGER MENU */}
            <div>   
                {/* 3 LINES */}
                <button 
                    className={`absolute top-[5%] right-8 flex flex-col justify-around w-8 h-8 border-none cursor-pointer p-0 z-20 transition-all focus:outline-none`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setScroll(isOpen);
                    }}
                > 
                    <div className={`w-8 h-1 bg-msmRed rounded-lg relative origin-transform-1Halfpx duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}></div>
                    <div className={`w-8 h-1 bg-msmBlue rounded-lg relative origin-transform-1Halfpx duration-150 ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
                    <div className={`w-8 h-1 bg-msmYellow rounded-lg relative origin-transform-1Halfpx duration-500 ${isOpen ? "-rotate-45" : "rotate-0"}`}></div>
                </button>
                {/* 3 LINES */}

                {/* MENU */}                
                <div 
                    className={`${isOpen ? "z-10" : "-z-10"} transition-all duration-300 fixed w-full h-screen left-0 top-0`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setScroll(isOpen);
                    }}                    
                >
                    <div
                        className={`w-full ${isOpen ? "translate-x-0" : "translate-x-[100%]"} transition-all duration-300 lg:w-2/6 flex flex-col justify-center bg-navColor h-screen text-left p-8 absolute top-0 right-0`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-8 items-center justify-center my-10">
                            <FaTwitter className="cursor-pointer hover:fill-twitterBlue" />
                            <FaYoutube className="cursor-pointer hover:fill-youtubeRed" />
                            <FaInstagram className="cursor-pointer hover:fill-instagramPurple" />
                            <FaSpotify className="cursor-pointer hover:fill-spotifyGreen" />
                            <SiApplepodcasts className="cursor-pointer hover:fill-applePurple" />
                        </div>
                        <Link 
                            href={'/aboutus'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setScroll(isOpen);
                            }}
                        >
                            <motion.p 
                                className={`${isOpen ? "opacity-100" : "opacity-0"} duration-1000 text-2xl py-4 font-bold tracking-wide no-underline text-center my-6 lg:my-10`}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.1 },
                                }}
                                whileTap={{ 
                                    scale: 0.9, 
                                }}
                            >
                                ABOUT US
                            </motion.p>
                        </Link> 
                        <Link 
                            href={'/contactus'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setScroll(isOpen);
                            }}
                        >
                            <motion.p 
                                className={`${isOpen ? "opacity-100" : "opacity-0"} duration-1000 text-2xl py-4 font-bold tracking-wide no-underline text-center my-6 lg:my-10`}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.25 },
                                }}
                                whileTap={{ 
                                    scale: 0.9, 
                                }}
                            >
                                WORK WITH US
                            </motion.p>
                        </Link>
                         
                        <div className="dropdown dropdown-end cursor-pointer">
                            <motion.div 
                                className="flex flex-row items-center justify-center"
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.5 },
                                }}
                                whileTap={{ 
                                    scale: 0.9, 
                                }}
                            >
                                <p 
                                    className={`${isOpen ? "opacity-100" : "opacity-0"} duration-1000 text-2xl py-4 font-bold tracking-wide no-underline text-center mt-6 lg:mt-10 mx-4`}
                                    tabIndex={0}
                                >
                                    OUR SHOWS
                                </p> 
                                <svg tabIndex={0} className="dropdown dropdown-end cursor-pointer mt-6 lg:mt-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="arrow-drop-down"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                            </motion.div>
                            <ul tabIndex={0} className="dropdown-content menu-compact lg:menu p-4 space-y-4 shadow rounded-box w-full text-center bg-twitterBlue">
                                <Link
                                    href={'/twentysidedpodcast'}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setScroll(isOpen);
                                    }}
                                >
                                    <li>Twenty Sided Podcast</li>
                                </Link>
                                <Link 
                                    href={'/myfirstdungeon'}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setScroll(isOpen);
                                    }}
                                >
                                    <li>My First Dungeon</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* MENU */}
                
            </div>
        </nav>
    )
}