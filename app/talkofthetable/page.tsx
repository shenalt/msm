'use client'
import Image from "next/image"
import Link from "next/link"
import {FaSpotify, FaAmazon, FaRssSquare, } from "react-icons/fa"
import { SiApplepodcasts, SiCastbox, SiPocketcasts, SiRadiopublic, SiIheartradio } from "react-icons/si"

export default function TalkOfTheTable(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <Image src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1692815452/samples/msm/tottPic_txpjcw.jpg'} alt="Talk of the Table Logo" className="w-11/12 lg:w-2/5 m-auto mt-8" width={400} height={400} />
            <div className="w-full md:w-4/6 mx-4 my-6">
                <p className="m-auto p-2 text-lg">
                    Talk of the Table is the TTRPG talk show where hosts Elliot Davis and Brian Flaherty talk with game designers, 
                    actual play producers, journalists, academics, artists, and performers about all the coolest things happening 
                    in the TTRPG community in an effort to understand what's on the mind of the tabletop industry.
                </p>
            </div> 
            <p className="text-2xl m-auto text-center my-8">Listen to Talk of the Table here:</p>
            <div className="flex flex-row gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/talk-of-the-table/id1702398014"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/7dp7KyNhiPuHJ8ziczC4Aw"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://music.amazon.com/podcasts/5aa93a67-2ebb-44f3-875a-06654dc8de14/talk-of-the-table"} target="_blank">
                    <FaAmazon className="cursor-pointer hover:fill-amazonOrange hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://castbox.fm/channel/id5552455?country=us"} target="_blank">
                    <SiCastbox className="cursor-pointer hover:fill-castboxOrange hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://www.iheart.com/podcast/269-talk-of-the-table-120959634/"} target="_blank">
                    <SiIheartradio className="cursor-pointer hover:fill-heartRadioRed hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://pca.st/b9senpor"} target="_blank">
                    <SiPocketcasts className="cursor-pointer hover:fill-pocketCastRed hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://radiopublic.com/talk-of-the-table-Wdr40L"} target="_blank">
                    <SiRadiopublic className="cursor-pointer hover:fill-radioPublicRed hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://anchor.fm/s/e6fb2638/podcast/rss"} target="_blank">
                    <FaRssSquare className="cursor-pointer hover:fill-rssOrange hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div>

            <iframe src="https://open.spotify.com/embed/show/7dp7KyNhiPuHJ8ziczC4Aw?utm_source=generator" className="my-8" width="75%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            
        </div>
    )
}