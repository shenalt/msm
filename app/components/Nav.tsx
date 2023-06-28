'use client'

import Image from "next/image"
import logo from "../../public/Logo_Large.png"
import {FaTwitter, FaYoutube, FaInstagram, FaSpotify, FaPatreon, FaDiscord, } from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"
import Link from "next/link"
import { useState, } from "react"
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

    const setScroll = (isOpen: boolean) => {
        if(!isOpen){
            disableScroll()
        } else {
            enableScroll()
        }
    }

    return(
        // LOGO
        <nav className="font-rnf flex-row flex items-center justify-between bg-bkgColor border-b">
            <div className="flex items-center gap-8 p-4 md:p-5">
                <motion.div
                    whileHover={{
                        scale: 1.25,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ 
                        scale: 0.9, 
                        transition: { duration: 0.5 },
                    }}
                >
                    <Link href={"/"}>
                        <Image 
                            src={logo} 
                            alt="Logo for Many Sided Media" 
                            className="rounded-sm"  
                            width={125}
                            height={125}
                        />
                    </Link>
                </motion.div>
                {/* SOCIAL MEDIA ICONS FOR DESKTOP */}
                <div className="hidden lg:flex flex-row gap-8 ml-8">
                    <Link href={'https://www.patreon.com/MyFirstDungeonPod/creators'} target="_blank"><FaPatreon className="cursor-pointer hover:fill-patreonOrange transition-all duration-500" size={28} /></Link>
                    <Link href={'https://discord.gg/KevdEDMQNa'} target="_blank"><FaDiscord className="cursor-pointer hover:fill-discordPurple transition-all duration-500" size={28} /></Link>
                    <Link href={'https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn'} target="_blank"><FaSpotify className="cursor-pointer hover:fill-spotifyGreen transition-all duration-500" size={28} /></Link>
                    <Link href={'https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088'} target="_blank"><SiApplepodcasts className="cursor-pointer hover:fill-applePurple transition-all duration-500" size={28} /></Link>
                </div>
            </div>

        {/* REGULAR NAV FOR DESKTOP */}
            <div className="hidden lg:block">
                <ul className="flex flex-row">
                    <div className="dropdown mx-8 my-1">
                        <div tabIndex={0} className="cursor-pointer hover:text-msmRed hover:scale-125 transition-all duration-100">
                            <div className="flex flex-row">Our Shows <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="arrow-drop-down"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg></div>
                        </div> 
                        <ul tabIndex={0} className="p-6 shadow menu dropdown-content bg-msmYellow rounded-box w-72 text-center">
                            <Link href={'/myfirstdungeon'}>
                                <li className="hover:text-msmRed hover:scale-125 transition-all duration-500 my-2">My First Dungeon</li>
                            </Link>
                            <Link href={'/twentysidedpodcast'}>
                                <li className="hover:text-msmRed hover:scale-125 transition-all duration-500 my-2">Twenty Sided Podcast</li>
                            </Link>
                        </ul>
                    </div>
                    <Link href={'/aboutus'}><li className="mx-8 my-1 cursor-pointer hover:text-msmBlue hover:scale-125 transition-all duration-100">About Us</li></Link>
                    <Link href={'/contactus'}><li className="mx-8 my-1 cursor-pointer hover:text-msmYellow hover:scale-125 transition-all duration-100">Work With Us</li></Link>
                </ul>
            </div>
        {/* REGULAR NAV FOR DESKTOP */}
        
        {/* HAMBURGER MENU for phones & tablets */}
            <div className="block lg:hidden">   
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
                        className={`w-full ${isOpen ? "translate-x-0" : "translate-x-[100%]"} transition-all duration-300 lg:w-2/6 flex flex-col justify-center bg-msmBlue h-screen text-left p-8 absolute top-0 right-0`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-8 items-center justify-center mb-10">
                            <Link href={'https://www.patreon.com/MyFirstDungeonPod/creators'} target="_blank"><FaPatreon className="cursor-pointer hover:fill-patreonOrange transition-all duration-500" size={28} /></Link>
                            <Link href={'https://discord.gg/KevdEDMQNa'} target="_blank"><FaDiscord className="cursor-pointer hover:fill-discordPurple transition-all duration-500" size={28} /></Link>
                            <Link href={'https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn'} target="_blank"><FaSpotify className="cursor-pointer hover:fill-spotifyGreen transition-all duration-500" size={28} /></Link>
                            <Link href={'https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088'} target="_blank"><SiApplepodcasts className="cursor-pointer hover:fill-applePurple transition-all duration-500" size={28} /></Link>
                        </div>
                        <div className="dropdown dropdown-end cursor-pointer my-10">
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
                                    className={`${isOpen ? "opacity-100" : "opacity-0"} duration-1000 hover:text-msmYellow transition-all text-2xl font-bold tracking-wide no-underline text-center mx-2`}
                                    tabIndex={0}
                                >
                                    OUR SHOWS
                                </p> 
                                <svg tabIndex={0} className="dropdown dropdown-end cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="arrow-drop-down"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                            </motion.div>
                            <ul tabIndex={0} className="dropdown-content menu p-4 space-y-4 shadow rounded-box w-full text-center bg-msmYellow">
                                <Link
                                    href={'/myfirstdungeon'}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setScroll(isOpen);
                                    }}
                                >
                                    <li className="hover:text-msmRed hover:scale-125 transition-all duration-500">My First Dungeon</li>
                                </Link>
                                <Link 
                                    href={'/twentysidedpodcast'}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setScroll(isOpen);
                                    }}
                                >
                                    <li className="hover:text-msmRed hover:scale-125 transition-all duration-500">Twenty Sided Podcast</li>
                                </Link>
                            </ul>
                        </div>
                        <Link 
                            href={'/aboutus'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setScroll(isOpen);
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.5 },
                                }}
                                whileTap={{ 
                                    scale: 0.9, 
                                }}
                            >
                                <p className={`${isOpen ? "opacity-100" : "opacity-0"} hover:text-msmYellow duration-1000 transition-all text-2xl py-4 font-bold tracking-wide no-underline text-center my-10`}>
                                    ABOUT US
                                </p>
                            </motion.div>
                        </Link> 
                        <Link 
                            href={'/contactus'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setScroll(isOpen);
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.5 },
                                }}
                                whileTap={{ 
                                    scale: 0.9, 
                                }}
                            >
                                <p className={`${isOpen ? "opacity-100" : "opacity-0"} hover:text-msmYellow duration-1000 transition-all text-2xl py-4 font-bold tracking-wide no-underline text-center my-6 lg:my-10`}>
                                    WORK WITH US
                                </p>
                            </motion.div>
                        </Link>                        
                    </div>
                </div>
                {/* MENU */}               
            </div>
        </nav>
    )
}