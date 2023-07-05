'use client'
import Image from "next/image"
import Link from "next/link"
import {FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function TwentySidedPodcast(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <Image src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1687987968/samples/msm/tspLogo.png'} alt="Twenty Sided Podcast Logo" className="w-11/12 lg:w-2/5 m-auto mt-8" width={400} height={400} />
            <p className="text-2xl m-auto text-center my-8">Listen to Twenty Sided Podcast here:</p>
            <div className="flex flex-row gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/twenty-sided-podcast/id1578469041"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/1FEqdHtVxJqn8rKBZfxCKG"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div>

            {/* ESCAPE FROM THE R.M.S. TITANFALL */}
            <div className="collapse w-11/12 lg:w-4/6 border rounded-box border-base-300 collapse-arrow bg-titanfallColor text-neutral-50">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    ESCAPE from the R.M.S. TITANFALL
                </div> 
                <div className="collapse-content">
                    <div className="flex flex-col items-center justify-center my-8">
                        <div>
                            <h1 className="text-center text-msmRedAnalagYellow text-5xl my-4">CAST</h1>
                            <h2 className="text-base my-2">Blythe Roberson as Meadhbh Snailbaby</h2>
                            <h2 className="text-base my-2">Jenny Gustafson as Karis Thornbrow</h2>
                            <h2 className="text-basexs my-2">Kevin Bauer as Cleave Beefchief</h2>
                            <h2 className="text-base my-2">Brian Flaherty as The DM (aka everybody else)</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">
                        <div className="card-body">
                            <iframe src="https://open.spotify.com/embed/playlist/1dqyqoI8utYzaKDJ0huXsE?utm_source=generator" width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div> 
            {/* ESCAPE FROM THE R.M.S. TITANFALL */}

            {/* Prisoners of the Static */}
            {/* https://res.cloudinary.com/djr5bxwfk/image/upload/v1688108230/samples/msm/prisonerStatic.png */}
            <div className="collapse w-11/12 lg:w-4/6 border rounded-box border-base-300 collapse-arrow mb-8 bg-prisonersColor text-neutral-50">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    Prisoners of the Static
                </div> 
                <div className="collapse-content"> 
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-center text-msmBlueTriYellow text-5xl my-4">CAST</h1>
                            <h2 className="text-base my-2">Abby Hepworth as Natasha Bol'shoy-Kot</h2>
                            <h2 className="text-base my-2">Shenuque Tissera as Yaksha Rah</h2>
                            <h2 className="text-base my-2">Noah Gebstadt as Sienni Saari</h2>
                            <h2 className="text-base my-2">Brian Flaherty as The DM (aka everybody else)</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">
                        <div className="card-body">
                            <iframe src="https://open.spotify.com/embed/playlist/3rZ3qRfyHOYYsHTo5mvhfn?utm_source=generator" width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Prisoners of the Static */}
        </div>
    )
}