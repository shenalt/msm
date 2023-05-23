import {FaTwitter, FaYoutube, FaInstagram, FaSpotify, FaPatreon, FaDiscord, } from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function Footer(){
    return(
        <div className="w-full h-full bg-msmRed flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs mx-4 md:mx-8 md:text-lg"><i>Many Sided Media 2023</i> <span className="font-serif">©️</span></p>
            <div className="flex flex-row flex-wrap items-center gap-8 mr-8 ml-2">
                <FaPatreon className="cursor-pointer hover:fill-patreonOrange transition-all duration-500" size={28} />
                <FaDiscord className="cursor-pointer hover:fill-discordPurple transition-all duration-500" size={28} />
                <FaTwitter className="cursor-pointer hover:fill-twitterBlue transition-all duration-500" size={28} />
                <FaYoutube className="cursor-pointer hover:fill-youtubeRed transition-all duration-500" size={28} />
                <FaInstagram className="cursor-pointer hover:fill-instagramPurple transition-all duration-500" size={28} />
                <FaSpotify className="cursor-pointer hover:fill-spotifyGreen transition-all duration-500" size={28} />
                <SiApplepodcasts className="cursor-pointer hover:fill-applePurple transition-all duration-500" size={28} />
            </div>
        </div>
    )
}