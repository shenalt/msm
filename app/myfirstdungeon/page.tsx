import Image from "next/image"
import React from 'react'
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import myFirstDungeon from "../../public/myFirstDungeon/myFirstDungeonTwo.png"
import { PrismaClient } from "@prisma/client"
import {FaSpotify, FaAmazon, } from "react-icons/fa"
import { SiApplepodcasts, SiCastbox, SiGooglepodcasts, SiPocketcasts, SiRadiopublic, } from "react-icons/si"
import { Cast } from "../types/CastType"

const fetchShows = async () => {
    const prisma = new PrismaClient()
    // Get shows
    const theShows = await prisma.show.findMany({
        orderBy: {
            order: 'asc',
        },
        include: {
            castMembers: true,
        },
    })
    return theShows 
}

export default async function MyFirstDungeon(){

    const data: {
        showId: string; 
        title: string; 
        description: string; 
        picture: string; 
        spotifyLink: string; 
        podcast: string;
        color: string;
        order: number;
        castMembers: Cast[];
    }[] = await fetchShows()

    return(
        <div className="z-10 w-full flex flex-col items-center">
            <Image src={myFirstDungeon} alt="My First Dungeon Logo" className="w-11/12 lg:w-1/3 h-4/5 m-auto my-6" />
            <div className="w-full md:w-4/6 mx-4 my-6">
                <p className="m-auto p-2 text-lg">
                    My First Dungeon is the tabletop role-playing podcast where we help players learn new games and make each one better than the last. Each season we choose a new game and a different 
                    GM to run it. Then we circle back around to discuss what went right, what went wrong, and how we can make our next game even better.
                </p>
            </div> 
            <p className="text-2xl m-auto text-center my-8">Listen to My First Dungeon here:</p>
            <div className="flex flex-row flex-wrap gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://music.amazon.com/podcasts/1e6e32ed-00ba-45c8-bab4-a79afc00a2cc/my-first-dungeon"} target="_blank">
                    <FaAmazon className="cursor-pointer hover:fill-amazonOrange hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://castbox.fm/channel/id4717958?country=us"} target="_blank">
                    <SiCastbox className="cursor-pointer hover:fill-castboxOrange hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83OWNhN2U4OC9wb2RjYXN0L3Jzcw"} target="_blank">
                    <SiGooglepodcasts className="cursor-pointer hover:fill-googleBlue hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://pca.st/m5ccnk2i"} target="_blank">
                    <SiPocketcasts className="cursor-pointer hover:fill-pocketCastRed hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://radiopublic.com/my-first-dungeon-GZvaRE"} target="_blank">
                    <SiRadiopublic className="cursor-pointer hover:fill-radioPublicRed hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div> 

            {data.map((show, index) => (
                <div className={`collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow 
                    ${
                        show.showId === "1" ? "bg-dieColor" : 
                        show.showId === "2" ? "bg-anamnesisColor" : 
                        show.showId === "3" ? "bg-tenCandlesColor" :
                        show.showId === "4" ? "bg-honeyHeistColor" :
                        show.showId === "5" ? "bg-wanderhomeColor" :
                        show.showId === "6" ? "bg-schroedingerColor" :
                        show.showId === "7" ? "bg-chickensColor" :
                        show.showId === "8" ? "bg-societyColor" :
                        "bg-deplorableColor" 
                    }
                    text-neutral-50`} key={show.title}
                >
                    <input type="checkbox" />
                    <div className={`collapse-title text-2xl font-semibold border-b ${show.showId === "8" ? "text-blackColor" : ""}`}>
                        {show.title}
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col md:flex-row items-center justify-around my-8">
                            <Image src={show.picture} alt={show.title} className="w-7/12 lg:w-5/12 h-auto m-auto" width={300} height={300} />
                            <div className="p-2 m-8 w-full">
                                {/* ****** TEMPORARY FIX for having cast/crew for DIE ****** */}
                                <h1 className={`${index === 1 ? "" : "hidden"} text-center text-msmRedAnalagYellow text-5xl my-4`}>CAST/CREW</h1>
                                <h1 className={`${index === 1 ? "hidden" : ""} text-center ${show.showId === "8" ? "text-msmRed" : "text-msmRedAnalagYellow"} text-5xl my-4`}>CAST</h1>
                                {show.castMembers.map((cast) => (    
                                    <>                           
                                        <h2 className={`${cast.name === "OST" || cast.name === "Produced" ? "" : "hidden"} text-base text-center my-2`} key={cast.castId}>{cast.name} by {cast.role}</h2>
                                        <h2 className={`${cast.name === "OST" || cast.name === "Produced" ? "hidden" : ""} ${show.showId === "8" ? "text-blackColor" : ""} text-base text-center my-2`} key={cast.castId}>{cast.name} as {cast.role}</h2>
                                    </>
                                ))}
                                {/* ****** TEMPORARY FIX for having cast/crew for DIE ****** */}
                            </div>
                            <p className={`m-4 text-2xl ${show.showId === "8" ? "text-blackColor" : ""}`}>{show.description}</p>
                        </div>
                        {/* <div className="flex flex-col md:flex-row items-center justify-around my-8">
                            
                        </div> */}
                        <div className="card lg:card-side card-bordered my-4">
                            <div className="card-body">
                            <iframe src={`${show.spotifyLink}`} width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>                     
                </div>
            ))}   
            <div className={`collapse w-11/12 mb-8 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmRed text-neutral-50`}>
                <input type="checkbox" />
                <div className="collapse-title text-2xl font-semibold border-b">
                    Interviews
                </div>
                <div className="collapse-content">
                    <div className="flex items-center justify-around m-8">
                        <p className="m-4 text-2xl">
                            Join host Brian Flaherty as he interviews TTRPG experts of all stripes, like Taylor Moore of Worlds Beyond Number and Keith Ammann of The Monsters Know What They’re Doing, to learn 
                            more about game creation, tips for improving your play experience and what goes on behind the scenes of some of your favorite actual play podcasts.
                        </p>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">
                        <div className="card-body">
                        <iframe src="https://open.spotify.com/embed/playlist/0Cd6IQjdGIX1iaWABXB9I4?utm_source=generator" width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>                     
            </div>  

        </div>
    )
}