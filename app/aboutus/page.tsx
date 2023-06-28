'use client'

import Link from "next/link"
import Image from "next/image"
import elliot from "../../public/elliotHeadshot.jpg"
import brian from "../../public/brianHeadshot.png"
import abby from "../../public/natashaHeadshot.jpg"
import aiya from "../../public/aiyaHeadshot.jpg"

export default function AboutUs(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <div className="flex flex-col m-8 w-full 2xl:w-3/4">
                <h1 className="m-4 text-xl">Many Sided Media is a podcasting company that aims to build and grow a community of TTRPG players, creators, and fans through a variety of game-themed content.</h1>
                <h1 className="m-4 text-xl">Our flagship podcast, My First Dungeon, features host Brian Flaherty guiding game masters and players through games new and old as we learn together to make them as fun as possible for all 
                    involved. Each season features an interview between Brian and our GM (often with a special appearance from the creator of the game themselves), an actual play of the game with our core cast 
                    plus lots of exciting special guests, and a talkback where we discuss what went right, what went wrong and how we can make the next game even better than the last.
                </h1>
                <h1 className="m-4 text-xl">Many Sided Media plans to build on the fun times we’ve had on My First Dungeon with a variety of tabletop shows, the Twenty Sided Newsletter, TKTK</h1>
                <h1 className="m-4 text-xl">We are an NYC-based group but love to collaborate with players, GMs, and designers all over the world. If you’re interested in working or playing with us, reach out!</h1>
            </div>

            <h1 className="my-8 mx-4 text-9xl hover:text-msmRed transition-all duration-500 text-center">The Team</h1>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={brian} alt="Headshot of Brian Flaherty" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed my-4">Brian Flaherty <h3 className="text-sm">(he/him)</h3></h1>
                    <p className="my-8 mx-2 2xl:mx-8 text-3xl">
                        Producer, sound designer, assistant director, and lover of all things tabletop. Most days he can be found spending hours at a West Village cafe making games and ordering the same exact 
                        thing in the same exact seat. You can hear him on My First Dungeon, Talk of the Table, The Twenty Sided Podcast, and Sounds Funny Radio.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={elliot} alt="Headshot of Elliot Davis" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmBlue my-4">Elliot Davis <h3 className="text-sm">(he/him)</h3></h1>
                    <p className="my-8 mx-2 2xl:mx-8 text-2xl">
                        AKA “moreblueberries,” is an artist, producer, game designer and all-around fan of making things. He loves games that emphasize collaborative character creation and worldbuilding, 
                        stories where the monsters are real, and media of all stripes that can make him laugh, cry, or get lost in a new world. You can hear him on My First Dungeon and Talk of the Table 
                        and you can find his art and games at moreblueberries.com.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={aiya} alt="Headshot of Shenuque Tissera" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmYellow my-4">Shenuque Tissera</h1>
                    <p className="my-8 mx-2 2xl:mx-8 text-lg">
                        is an actor, writer, and stand-up comedian born and raised in Staten Island, New York. He plays 'Jaylen' in the theatrical production of The Art of Killin It! and has previously written 
                        and performed for Max's Human by Orientation platform. Shenuque is currently a writer for Someecards.com. Shenuque is also a recurring cast member for Many Sided Media's My First Dungeon 
                        podcast series. Shenuque has been performing standup for five years. Throughout that time, he's hosted and produced successful stand-up shows at QED and Caroline's on Broadway and 
                        Littlefield, even headlining the Madison Theater. Shenuque has performed in festivals such as NY Sketchfest, YAAASFest, 5th Borough Comedy Festival, Very Big Very Asian Comedy Festival, 
                        Burbank Comedy Festival, and was a Quarterfinalist at the San Diego Comedy Festival.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={abby} alt="Headshot of Abby Hepworth" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed my-4">Abby Hepworth <h3 className="text-sm">(she/her)</h3></h1>
                    <p className="my-8 mx-2 2xl:mx-8 text-xl">
                        Didn’t even know what a TTRPG was until the pandemic forced her indoors and left her to the mercy of her D&D-loving partner, Brian Flaherty, but boy howdy did she take to the fun like a 
                        bard to lute playing. You can find her in most seasons of My First Dungeon, as well as on the improvised comedy podcast Sounds Funny Radio. By day she is a fashion editor for the women’s 
                        lifestyle website PureWow, and if you can’t seem to track her down at any of the usual places, she’s probably out for a run or hike in the great wide wilderness of NYC.
                    </p>
                </div>
            </div>
        </div>
    )
}