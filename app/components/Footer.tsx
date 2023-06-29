import {FaTwitter, FaYoutube, FaInstagram, FaSpotify, FaPatreon, FaDiscord, } from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"
import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full h-40 md:h-30 bg-msmRed flex flex-col md:flex-row items-center justify-between font-rnf">
            <p className="text-xs m-4 md:mx-8 md:text-lg"><i>Many Sided Media 2023</i> <span className="font-serif">©️</span></p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-8 mx-8 my-2">
                <FaPatreon className="cursor-pointer hover:fill-patreonOrange transition-all duration-500" size={28} />
                <FaDiscord className="cursor-pointer hover:fill-discordPurple transition-all duration-500" size={28} />
                <Link href={'https://twitter.com/myfirstdungeon'}><FaTwitter className="cursor-pointer hover:fill-twitterBlue transition-all duration-500" size={28} /></Link>
                <FaYoutube className="cursor-pointer hover:fill-youtubeRed transition-all duration-500" size={28} />
                <Link href={'https://instagram.com/manysidedmedia?igshid=MzRlODBiNWFlZA=='} target="_blank"><FaInstagram className="cursor-pointer hover:fill-instagramPurple transition-all duration-500" size={28} /></Link>
                <Link href={'https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn'} target="_blank"><FaSpotify className="cursor-pointer hover:fill-spotifyGreen transition-all duration-500" size={28} /></Link>
                <Link href={'https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088'} target="_blank"><SiApplepodcasts className="cursor-pointer hover:fill-applePurple transition-all duration-500" size={28} /></Link>
            </div>
        </div>
    )
}