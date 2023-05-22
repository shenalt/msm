import {FaTwitter, FaYoutube, FaInstagram, FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function Footer(){
    return(
        <div className="w-full h-20 bg-msmRed flex flex-row items-center justify-between">
            <p className="text-xs mx-4 md:mx-8 md:text-lg"><i>Many Sided Media 2023</i> <span className="font-serif">©️</span></p>
            <div className="flex flex-row items-center gap-8 mr-8 ml-2">
                <FaTwitter className="cursor-pointer hover:fill-twitterBlue transition-all duration-500" />
                <FaYoutube className="cursor-pointer hover:fill-youtubeRed transition-all duration-500" />
                <FaInstagram className="cursor-pointer hover:fill-instagramPurple transition-all duration-500" />
                <FaSpotify className="cursor-pointer hover:fill-spotifyGreen transition-all duration-500" />
                <SiApplepodcasts className="cursor-pointer hover:fill-applePurple transition-all duration-500" />
            </div>
        </div>
    )
}