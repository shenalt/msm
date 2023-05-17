import {FaTwitter, FaYoutube, FaInstagram, FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function Footer(){
    return(
        <div className="w-full h-20 bg-msmRed flex flex-row items-center justify-between">
            <p className="text-xs mx-4 md:mx-8 md:text-lg"><i>Many Sided Media 2023</i> ©️</p>
            <div className="flex flex-row items-center gap-8 mr-8 ml-2">
                <FaTwitter className="cursor-pointer hover:fill-twitterBlue" />
                <FaYoutube className="cursor-pointer hover:fill-youtubeRed" />
                <FaInstagram className="cursor-pointer hover:fill-instagramPurple" />
                <FaSpotify className="cursor-pointer hover:fill-spotifyGreen" />
                <SiApplepodcasts className="cursor-pointer hover:fill-applePurple" />
            </div>
        </div>
    )
}