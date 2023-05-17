'use client'

import Image from "next/image"
import Link from "next/link"
import myFirstDungeon from "../../public/myFirstDungeon/firstDungeon.jpg"
import myFirstDungeonCardImg from "../../public/myFirstDungeon/myFirstDungeonTwo.png"
import {FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function MyFirstDungeon(){
    return(
        <div className="z-10 w-full flex flex-col">
            <Image src={myFirstDungeon} alt="My First Dungeon Logo" className="w-11/12 lg:w-3/6 h-4/5 m-auto" />
            <p className="text-2xl m-auto text-center my-8">Listen to My First Dungeon here</p>
            <div className="flex flex-row gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div>
            <p className="m-auto mt-8">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto mb-8">[INSERT BLURB EXPLAINING WHAT MY FIRST DUNGEON IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <div className="flex flex-row flex-wrap items-center justify-center">
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">DIE: Episode 5 - "The Master"
                            <div className="badge mx-2 bg-twitterBlue">NEW</div>
                        </h2> 
                        <h6>May 12th, 2023</h6>
                        <p>The Master makes his pitch, the Players make their choice...</p> 
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-5-the-master/id1601290088?i=1000612755243"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">DIE: Episode 4 - "Brothers"</h2> 
                        <h6>May 5th, 2023</h6>
                        <p>You can't find your Voice if you don't use it...</p> 
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-4-brothers/id1601290088?i=1000611863339"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">DIE: Episode 3 - "Nightmare's Rest"</h2> 
                        <h6>April 28th, 2023</h6>
                        <p>Foes are revealed and old friends return...</p> 
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-3-nightmares-rest/id1601290088?i=1000611000067"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">DIE: Episode 2 - "The Fallen"</h2>
                        <h6>April 21st, 2023</h6> 
                        <p>The battle begins and the danger is real...</p>
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-2-the-fallen/id1601290088?i=1000610070981"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body max-w-full-card">
                        <h2 className="card-title">DIE: Episode 1 - "Welcome to Glorthalion"</h2> 
                        <h6>April 14th, 2023</h6>
                        <p className="text-xs">Six friends sit down to play a game after 25 years apart. Only one of them knows that this time it's more than just a game...</p>
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-1-welcome-to-glorthalion/id1601290088?i=1000608930059"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
                <div className="card card-bordered m-4">
                    <figure className="bg-youtubeRed">
                        <Image src={myFirstDungeonCardImg} alt="My First Dungeon Logo" className="w-1/3" />
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">DIE: Episode Zero - "Personas & Paragons"</h2> 
                        <h6>April 7th, 2023</h6>
                        <p>The ritual begins...</p>
                        <div className="justify-center card-actions">
                            <Link href={"https://podcasts.apple.com/us/podcast/die-episode-zero-personas-paragons/id1601290088?i=1000607836872"} target="_blank">
                                <button className="btn btn-secondary m-4">More info</button>
                            </Link>                            
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}