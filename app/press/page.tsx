'use client'

import Link from "next/link"
import Image from "next/image"
import gizmodo from "../../public/gizmodoLogo.jpg"
import fandomentals from "../../public/fandomentalsLogo.jpg"
import njWebfestNom from '../../public/NJwebfestNomLogo.png'
import njWebfestWinner from '../../public/NJwebfestWinnerLogo.png'
// import elliot from "../../public/elliot_border.jpg"
// import brian from "../../public/brian_border.jpg"
// import abby from "../../public/abby_border.jpg"
// import aiya from "../../public/shenuque_border.jpg"

export default function Press(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <h1 className="my-8 mx-4 text-6xl md:text-9xl text-center">PRESS</h1>
            <div className="text-lg flex flex-col my-2 mx-8 w-full md:w-3/4 m-auto border-t border-t-msmBlue">
                {/* <div className="w-3/4 m-auto border-t border-b border-t-msmBlue border-b-msmRed"> */}
                    <h1 className="m-4 text-center">Do you want to write about Many Sided Media and our wonderful shows?</h1>
                    <h1 className="m-4 text-center">You can contact us <Link className="text-msmRed hover:text-msmBlue transition-all duration-500" href={'https://www.manysidedmedia.com/contactus'}>here</Link>.</h1>
                    <div className="m-auto p-4 flex flex-col w-3/4">
                        {/* NJ Webfest Winner */}
                            <div className="flex flex-col lg:flex-row m-4">
                                <div className="lg:w-2/5 m-auto">
                                    <Link href={'https://www.newjerseywebfest.com/2023-award-winners-audio-fiction'} target="_blank">
                                        <Image src={njWebfestWinner} width={400} height={400} alt="NJ Webfest" />
                                    </Link> 
                                </div>                               
                                <div className="flex flex-col justify-center m-1 lg:w-3/5">
                                    <h1 className="flex justify-center items-center text-5xl lg:text-6xl p-4 text-center font-bold">New Jersey Webfest 2023 Winner</h1>
                                    <p className="flex justify-center items-center text-2xl p-4 text-center font-bold">Best Sound Design of an Actual Play</p>
                                </div>
                            </div>
                        {/* NJ Webfest Winner */}

                        {/* NJ Webfest Nominee */}
                            <div className="flex flex-col lg:flex-row m-4">
                                <div className="lg:w-2/5 m-auto">
                                    <Link href={'https://www.newjerseywebfest.com/'} target="_blank">
                                        <Image src={njWebfestNom} width={400} height={400} alt="NJ Webfest" />
                                    </Link>
                                </div>                                                                
                                <div className="flex flex-col justify-center m-1 lg:w-3/5">
                                    <h1 className="flex justify-center items-center text-5xl lg:text-6xl p-4 text-center font-bold">New Jersey Webfest 2023 Nominees</h1>
                                    <p className="flex justify-center items-center text-2xl p-4 text-center font-bold">Best Player Character for an Actual Play - Shenuque Tissera</p>
                                    <p className="flex justify-center items-center text-2xl p-4 text-center font-bold">Outstanding Actual Play (Non-D&D)</p>
                                    <p className="flex justify-center items-center text-2xl p-4 text-center font-bold">Best Editing of an Actual Play</p>
                                </div>
                            </div>
                        {/* NJ Webfest Nominee */}

                        {/* Fandomentals Article */}
                        <div className="flex flex-col lg:flex-row m-4">
                            <div className="lg:w-2/5 m-auto">
                                <Link href={'https://www.thefandomentals.com/my-first-dungeon-yazebas-bb-interview/'} target="_blank">
                                    <Image src={fandomentals} width={400} height={400} alt="Fandomentals" />
                                </Link> 
                            </div>                                                      
                            <div className="flex flex-col justify-center m-1 lg:w-3/5">
                                <h1 className="flex justify-center items-center text-5xl lg:text-6xl p-4 font-bold">FANDOMENTALS</h1>
                                <p className="flex justify-center items-center text-2xl p-4 font-bold">My First Dungeon’s New Season Is A Yazeba’s Bed & Breakfast Audio Cartoon</p>
                            </div>
                        </div>
                        <div className="border-l border-l-msmRed mx-2">
                            <h1 className="m-2 text-sm">
                                It’s rare to consume a piece of art and realize something new has been created. Especially when that something new feels so welcoming and familiar. The newest season of narrative 
                                actual play My First Dungeon does exactly that...
                            </h1>
                        </div>
                        <p className="text-msmRed hover:text-msmBlue transition-all duration-500 text-center lg:text-left m-2"><Link target="_blank" href={'https://www.thefandomentals.com/my-first-dungeon-yazebas-bb-interview/'}>(full article)</Link></p>
                        {/* Fandomentals Article */}

                        {/* Gizmodo Article */}
                        <div className="flex flex-col lg:flex-row m-4">
                            <div className="lg:w-2/5 m-auto">
                                <Link href={'https://gizmodo.com/the-gaming-shelf-gubat-banwa-kickstarter-ttrpg-news-1850940756/slides/4'} target="_blank">
                                    <Image src={gizmodo} width={400} height={400} alt="Gizmodo" />
                                </Link>
                            </div>                           
                            <div className="flex flex-col justify-center m-1 lg:w-3/5">
                                <h1 className="flex justify-center items-center text-5xl lg:text-6xl p-4 font-bold">GIZMODO</h1>
                                <p className="flex justify-center items-center text-2xl p-4 font-bold">New Actual Plays: My First Dungeon, Seriously, Let’s Play, Tales of Initiative, Milf Manor, Hobbled Goblin, What’s in the Rift</p>
                            </div>
                        </div>
                        <div className="border-l border-l-msmRed mx-2">
                            <h1 className="m-2 text-sm">
                                My First Dungeon’s first sponsored season will take listeners to the frontier galaxy for a story of camaraderie, revenge, and, of course, sadness. This is a celebration of 
                                Orbital Blues and a call for fans new and old to support the brand new...
                            </h1>
                        </div>
                        <p className="text-msmRed hover:text-msmBlue transition-all duration-500 text-center lg:text-left m-2"><Link target="_blank" href={'https://gizmodo.com/the-gaming-shelf-gubat-banwa-kickstarter-ttrpg-news-1850940756/slides/4'}>(full article)</Link></p>
                        {/* Gizmodo Article */}

                        {/* Gizmodo Article */}
                        <div className="flex flex-col lg:flex-row m-4">
                            <div className="lg:w-2/5 m-auto">
                                <Link href={'https://gizmodo.com/gaming-shelf-outsourced-planet-fist-my-first-dungeon-1850848324/slides/4'} target="_blank">
                                    <Image src={gizmodo} width={400} height={400} alt="Gizmodo" />
                                </Link> 
                            </div>               
                            <div className="flex flex-col justify-center m-1 lg:w-3/5">
                                <h1 className="flex justify-center items-center text-5xl lg:text-6xl p-4 font-bold">GIZMODO</h1>
                                <p className="flex justify-center items-center text-2xl p-4 font-bold">Actual Plays and Streams: Worlds Away; My First Dungeon: Gertrude’s Birthday Surprise; Dice Company; Wait, Roll That Again; Severed Sons</p>
                            </div>
                        </div>
                        <div className="border-l border-l-msmRed mx-2">
                            <h1 className="m-2 text-sm">
                                “My First Dungeon Presents: Gertrude’s Birthday Surprise is an 8-part Yazeba’s Bed & Breakfast actual play limited series featuring a full cast from across the TTRPG community and 
                                beyond, bespoke sound design, and original music. This season is our...
                            </h1>
                        </div>
                        <p className="text-msmRed hover:text-msmBlue transition-all duration-500 text-center lg:text-left m-2"><Link target="_blank" href={'https://gizmodo.com/gaming-shelf-outsourced-planet-fist-my-first-dungeon-1850848324/slides/4'}>(full article)</Link></p>
                        {/* Gizmodo Article */}
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}