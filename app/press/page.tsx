'use client'

import Link from "next/link"
import Image from "next/image"
import gizmodo from "../../public/gizmodoLogo.jpg"
// import elliot from "../../public/elliot_border.jpg"
// import brian from "../../public/brian_border.jpg"
// import abby from "../../public/abby_border.jpg"
// import aiya from "../../public/shenuque_border.jpg"

export default function Press(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <h1 className="my-8 mx-4 text-9xl md:text-6xl text-center">PRESS</h1>
            <div className="text-lg flex flex-col my-2 mx-8 w-full md:w-3/4 m-auto border-t border-b border-t-msmBlue border-b-msmRed">
                {/* <div className="w-3/4 m-auto border-t border-b border-t-msmBlue border-b-msmRed"> */}
                    <h1 className="m-4 text-center">Do you want to write about Many Sided Media and our wonderful shows?</h1>
                    <h1 className="m-4 text-center">You can contact us <Link href={'https://www.manysidedmedia.com/contactus'}>here</Link>.</h1>
                    <div className="m-auto p-4 flex flex-col w-3/4">
                        {/* Gizmodo Article */}
                        <div className="flex flex-col md:flex-row m-4">
                            <Image src={gizmodo} width={400} height={400} alt="Gizmodo" />
                            <div className="flex flex-col justify-center m-1">
                                <h1 className="flex justify-center items-center text-6xl p-4 font-bold">GIZMODO</h1>
                                <p className="flex justify-center items-center text-2xl p-4 font-bold">New Actual Plays: My First Dungeon, Seriously, Let’s Play, Tales of Initiative, Milf Manor, Hobbled Goblin, What’s in the Rift</p>
                            </div>
                        </div>
                        <div className="border-l border-l-msmRed mx-2">
                            <h1 className="m-2 text-sm">
                                My First Dungeon’s first sponsored season will take listeners to the frontier galaxy for a story of camaraderie, revenge, and, of course, sadness. This is a celebration of 
                                Orbital Blues and a call for fans new and old to support the brand new...
                            </h1>
                        </div>
                        <p className="text-msmRed hover:text-msmBlue m-2"><Link href={'https://gizmodo.com/the-gaming-shelf-gubat-banwa-kickstarter-ttrpg-news-1850940756/slides/4'}>(full article)</Link></p>
                        {/* Gizmodo Article */}

                        {/* Gizmodo Article */}
                        <div className="flex flex-col md:flex-row m-4">
                            <Image src={gizmodo} width={400} height={400} alt="Gizmodo" />
                            <div className="flex flex-col justify-center m-1">
                                <h1 className="flex justify-center items-center text-6xl p-4 font-bold">GIZMODO</h1>
                                <p className="flex justify-center items-center text-2xl p-4 font-bold">Actual Plays and Streams: Worlds Away; My First Dungeon: Gertrude’s Birthday Surprise; Dice Company; Wait, Roll That Again; Severed Sons</p>
                            </div>
                        </div>
                        <div className="border-l border-l-msmBlue mx-2">
                            <h1 className="m-2 text-sm">
                                Worlds Away—a new independent actual-play podcast—has just released its first episodes. The show’s first season, titled Convergence, takes place 250 years in our future. After 
                                the end of humanity’s first interstellar civil war, the distant planets...
                            </h1>
                        </div>
                        <p className="text-msmBlue hover:text-msmRed m-2"><Link href={'https://gizmodo.com/gaming-shelf-outsourced-planet-fist-my-first-dungeon-1850848324/slides/4'}>(full article)</Link></p>
                        {/* Gizmodo Article */}
                    </div>
                {/* </div> */}
            </div>

            {/* <div className="flex flex-col w-full md:w-3/4 2xl:flex-row p-8 border-b border-b-msmBlue">
                <Image src={brian} alt="Headshot of Brian Flaherty" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed mt-4 mb-2">Brian Flaherty</h1>
                    <h3 className="text-lg text-center text-msmRed">(he/him)</h3>
                    <p className="my-8 mx-2 2xl:mx-8 text-lg hover:text-msmRed transition-all duration-500">
                        is a producer, sound designer, assistant director, and lover of all things tabletop. Most days he can be found spending hours at a West Village cafe making games and ordering the same exact 
                        thing in the same exact seat. You can hear him on My First Dungeon, Talk of the Table, The Twenty Sided Podcast, and Sounds Funny Radio.
                    </p>                   
                </div>
            </div>
            <div className="flex flex-col w-full md:w-3/4 2xl:flex-row p-8 border-b border-b-msmYellow">
                <Image src={elliot} alt="Headshot of Elliot Davis" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmBlue mt-4 mb-2">Elliot Davis</h1>
                    <h3 className="text-lg text-center text-msmBlue">(he/him)</h3>
                    <p className="my-8 mx-2 2xl:mx-8 text-lg hover:text-msmBlue transition-all duration-500">
                        AKA “moreblueberries,” is an artist, producer, game designer and all-around fan of making things. He loves games that emphasize collaborative character creation and worldbuilding, 
                        stories where the monsters are real, and media of all stripes that can make him laugh, cry, or get lost in a new world. You can hear him on My First Dungeon and Talk of the Table 
                        and you can find his art and games at moreblueberries.com.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full md:w-3/4 p-8 border-b border-b-msmRed">
                <Image src={aiya} alt="Headshot of Shenuque Tissera" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmYellow mt-4 mb-2">Shenuque Tissera</h1>
                    <h3 className="text-lg text-center text-msmYellow">(he/him)</h3>
                    <p className="my-8 mx-2 2xl:mx-8 text-lg hover:text-msmYellow transition-all duration-500">
                        is an actor, writer, and stand-up comedian born and raised in Staten Island, New York. He plays 'Jaylen' in the theatrical production of The Art of Killin It! and has previously written 
                        and performed for Max's Human by Orientation platform. Shenuque is currently a writer for Someecards.com. Shenuque is also a recurring cast member for Many Sided Media's My First Dungeon 
                        podcast series. Shenuque has been performing standup for five years. Throughout that time, he's hosted and produced successful stand-up shows at QED and Caroline's on Broadway and 
                        Littlefield, even headlining the Madison Theater. Shenuque has performed in festivals such as NY Sketchfest, YAAASFest, 5th Borough Comedy Festival, Very Big Very Asian Comedy Festival, 
                        Burbank Comedy Festival, and was a Quarterfinalist at the San Diego Comedy Festival.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full md:w-3/4 p-8 border-b-[1px]">
                <Image src={abby} alt="Headshot of Abby Hepworth" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed mt-4 mb-2">Abby Hepworth</h1>
                    <h3 className="text-lg text-center text-msmRed">(she/her)</h3>
                    <p className="my-8 mx-2 2xl:mx-8 text-lg hover:text-msmRed transition-all duration-500">
                        didn’t even know what a TTRPG was until the pandemic forced her indoors and left her to the mercy of her D&D-loving partner, Brian Flaherty, but boy howdy did she take to the fun like a 
                        bard to lute playing. You can find her in most seasons of My First Dungeon, as well as on the improvised comedy podcast Sounds Funny Radio. By day she is a fashion editor for the women’s 
                        lifestyle website PureWow, and if you can’t seem to track her down at any of the usual places, she’s probably out for a run or hike in the great wide wilderness of NYC.
                    </p>
                </div>
            </div> */}
        </div>
    )
}