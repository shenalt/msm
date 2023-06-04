import Image from "next/image"
import Link from "next/link"
import myFirstDungeon from "../../public/myFirstDungeon/firstDungeon.jpg"
//import myFirstDungeonCardImg from "../../public/myFirstDungeon/myFirstDungeonTwo.png"
import tencandles from "../../public/myFirstDungeon/Anamnesis.png"
// import schroedinger from "../../public/myFirstDungeon/playtest.JPEG"
import defendLair from "../../public/myFirstDungeon/defendYourLair.jpg"
// import die from "../../public/myFirstDungeon/die.png"
// import anamnesis from "../../public/myFirstDungeon/Anamnesis.png"
import wanderHome from "../../public/myFirstDungeon/Wanderhome.png"

// import chickens from "../../public/myFirstDungeon/chickens.PNG"
import honey from "../../public/myFirstDungeon/honeyHeist.png"
import {FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

// public\myFirstDungeon\Anamnesis.png
// C:\Users\tisse\Desktop\portfolio\msm\public\myFirstDungeon\Anamnesis.png

type Cast = {
    //[x: string]: ReactNode
    castId: string;
    name: string;
    headshot: string;
    podcast: string;
    showId: string;
    //shows: Show;
}

type Show = {
    showId: string; 
    title: string;
    description: string;
    picture: string;
    spotifyLink: string;
    podcast: string;
    color: string;
    castMembers: Cast[]
}

async function getShows(){
    // Update the BASE_URL in env.local to the deployed url
    // BASE_URL=http://localhost:3000
    // 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getShows`, {cache: "no-cache"})
    //const res = await fetch(`${process.env.BASE_URL}/api/getShows`)
    if(!res.ok){
        console.log(res)
    }
    return res.json()
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
        castMembers: Cast[];
    }[] = await getShows()
    console.log("The data")
    console.log(data)

    return(
        <div className="z-10 w-full flex flex-col items-center">
            <Image src={myFirstDungeon} alt="My First Dungeon Logo" className="w-11/12 lg:w-3/6 h-4/5 m-auto mt-8" />
            <p className="text-2xl m-auto text-center my-8">Listen to My First Dungeon here:</p>
            <div className="flex flex-row gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/my-first-dungeon/id1601290088"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/5BpUwGLHOKzuQ8ycOvIedn"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div>
            <div className="w-full md:w-4/6">
                <p className="m-auto mx-4 my-4">
                    My First Dungeon is the tabletop role-playing podcast where we help players learn new games and make each one better than the last. Each season we choose a new game and a different 
                    GM to run it. Then we circle back around to discuss what went right, what went wrong, and how we can make our next game ever better.
                </p>
                <p className="m-auto mb-8">[INSERT ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            </div>

            {data.map((show) => (
                <div className={`collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-instagramPurple text-neutral-50`} key={show.title}>
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium border-b">
                        {show.title}
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col md:flex-row items-center justify-around my-8">
                            <Image src={show.picture} alt={`${show.title} Logo`} width={30} height={30} className="w-full lg:w-1/5 rounded-2xl" />
                            <p className="m-auto mt-8">{show.description}</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-around my-8">
                            <div>
                                <h1 className="text-center text-msmRedAnalagYellow text-5xl my-4">CAST</h1>
                                {show.castMembers.map((item) => (
                                    <h2 className="text-sm my-2">{item.name}</h2>
                                ))}
                            </div>
                            <div>
                                <h1 className="text-center text-msmRedAnalagYellow text-5xl my-4">CREW</h1>
                            </div>
                        </div>
                        <div className="card lg:card-side card-bordered my-4">
                            <div className="card-body">
                            <iframe src={`${show.spotifyLink}`} width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                {/* <div className="card-actions">
                                    <Link href={"https://podcasts.apple.com/us/podcast/die-episode-5-the-master/id1601290088?i=1000612755243"} target="_blank">
                                        <button className="btn btn-primary">More Info</button>
                                    </Link> 
                                </div> */}
                            </div>
                        </div>
                    </div>                     
                </div>
            ))}

            {/* DIE */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmRed text-neutral-50">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    DIE
                </div>
                <div className="collapse-content">
                    <p className="m-auto mt-8">
                        My First Dungeon Presents: DIE is an eight-week podcast event that celebrates one of the best new tabletop roleplaying games with a limited-run narrative play series 
                        featuring immersive sound design, original music, and an absolute rock star cast. DIE was created by Kieron Gillen & Stephanie Hans.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-around my-8">
                        <div>
                            <h1 className="text-center text-msmRedAnalagYellow text-2xl my-4">CAST</h1>
                            <h2 className="text-xs my-2">Drakoniques as Enoch (Dictator)</h2>
                            <h2 className="text-xs my-2">Carolyn Page as Anna (Fool)</h2>
                            <h2 className="text-xs my-2">Abby Hepworth as Kelly (Trust Knight)</h2>
                            <h2 className="text-xs my-2">Shenuque Tissera as Jayamal (Neo)</h2>
                            <h2 className="text-xs my-2">Nathan Yaffe as Ned (Godbinder)</h2>
                            <h2 className="text-xs my-2">Brian Flaherty as GM/Dani/Everyone Else (Master)</h2>
                        </div>
                        <div>
                            <h1 className="text-center text-msmRedAnalagYellow text-2xl my-4">CREW</h1>
                            <h2 className="text-xs my-2">Produced by Brian Flaherty & Elliot Davis</h2>
                            <h2 className="text-xs my-2">Edited and Designed by Brian Flaherty</h2>
                            <h2 className="text-xs my-2">Original Theme and Character Music by BE/HOLD</h2>
                            <h2 className="text-xs my-2">Published by Rowan, Rook, and Decard</h2>
                            <h2 className="text-xs my-2">Artwork by Stephanie Hans</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 5 - "The Master" <div className="badge bg-msmRedAnalagGreen text-neutral-900 p-2 text-xs text-center">NEW</div></h2> 
                            <h6 className="text-xs my-2">May 12th, 2023</h6>
                            <p className="text-lg my-2">The Master makes his pitch, the Players make their choice...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-5-the-master/id1601290088?i=1000612755243"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 4 - "Brothers"</h2> 
                            <h6 className="text-xs my-2">May 5th, 2023</h6>
                            <p className="text-lg my-2">You can't find your Voice if you don't use it...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-4-brothers/id1601290088?i=1000611863339"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 3 - "Nightmare's Rest"</h2> 
                            <h6 className="text-xs my-2">April 28th, 2023</h6>
                            <p className="text-lg my-2">Foes are revealed and old friends return...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-3-nightmares-rest/id1601290088?i=1000611000067"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 2 - "The Fallen"</h2> 
                            <h6 className="text-xs my-2">April 21st, 2023</h6>
                            <p className="text-lg my-2">The battle begins and the danger is real...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-2-the-fallen/id1601290088?i=1000610070981"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 1 - "Welcome to Glorthalion"</h2> 
                            <h6 className="text-xs my-2">April 14th, 2023</h6>
                            <p className="text-lg my-2">Six friends sit down to play a game after 25 years apart. Only one of them knows that this time it's more than just a game...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-1-welcome-to-glorthalion/id1601290088?i=1000608930059"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Episode 0 - "Personas & Paragons"</h2> 
                            <h6 className="text-xs my-2">April 7th, 2023</h6>
                            <p className="text-lg my-2">The ritual begins...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-zero-personas-paragons/id1601290088?i=1000607836872"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Die Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">DIE: Playing a Fantasy Heartbreaker w/ Kieron Gillen & Grant Howitt</h2> 
                            <h6 className="text-xs my-2">April 7th, 2023</h6>
                            <p className="text-lg my-2">
                                Brian is joined by Kieron Gillen (DIE, Immortal X-Men, Star Wars) and Grant Howitt (Heart, Spire, Honey Heist) who teach him the rules of the game and discuss how to make great 
                                stories.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/die-episode-zero-personas-paragons/id1601290088?i=1000607836872"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* DIE */}

            {/* ANAMNESIS */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmBlue">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    ANAMNESIS
                </div>
                <div className="collapse-content">
                    <p className="my-4">
                        Anamnesis was written and designed by ⁠Sam Leigh. You can find all of Sam's games at <Link href={"https://blinkingbirchgames.itch.io/"}><u>Blinking Birch Games</u></Link>.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-around my-4">
                        <div>
                            <h1 className="text-center text-msmBlueTriYellow text-2xl my-4">CAST</h1>
                            <h2 className="text-xs my-2">Brian Flaherty - The Querant</h2>
                            <h2 className="text-xs my-2">Abby Hepworth - The Tarot Reader</h2>
                        </div>
                        <div>
                            <h1 className="text-center text-msmBlueTriYellow text-2xl my-4">CREW</h1>
                            <h2 className="text-xs my-2">Editing and Sound Design by Brian Flaherty</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={anamnesis} alt="Anamnesis Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Talkback w/ Sam Leigh</h2> 
                            <h6 className="text-xs my-2">March 31st, 2023</h6>
                            <p className="text-lg my-2">Sam Leigh, the designer of Anamnesis, returns to discuss our Anamnesis radio play and to dive deeper into solo TTRPGs.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/anamnesis-talkback-w-sam-leigh/id1601290088?i=1000606734098"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={anamnesis} alt="Anamnesis Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">An Improvised Radio Drama</h2> 
                            <h6 className="text-xs my-2">March 24th, 2023</h6>
                            <p className="text-lg my-2">
                                Without his memory, a deck of tarot will reveal all he was, all he is, and all he will become...<br/><br/>
                                The following audio drama is an improvisation.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/amamnesis-an-improvised-radio-drama/id1601290088?i=1000605709515"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={anamnesis} alt="Anamnesis Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Solo TTRPGs w/ Sam Leigh</h2> 
                            <h6 className="text-xs my-2">March 17th, 2023</h6>
                            <p className="text-lg my-2">
                                Sam Leigh, the designer of Anamnesis, teaches Brian about solo TTRPGs and how to play her ENnie-nominated game about amnesia and rediscovering your identity through a 
                                deck of tarot cards.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/anamnesis-solo-ttrpgs-w-sam-leigh/id1601290088?i=1000604626111"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* ANAMNESIS */}

            {/* SCHROEDINGER'S CAT */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmYellow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    SCHROEDINGER'S CATS
                </div>
                <div className="collapse-content">
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={die} alt="Playtest Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Talkback w/ Elliot Davis</h2> 
                            <h6 className="text-xs my-2">February 24th, 2023</h6>
                            <p className="text-lg my-2">
                                Elliot Davis sits down again with Brian Flaherty to review and critique the first ever playtest of the never-before-played TTRPG Schröedinger's Cats while 
                                also responding to player feedback about the game from Kevin Bauer, Abby Hepworth, and Julia Schroeder. Together, they all try to take this game from Playtest 
                                to Version 2.0.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/schr%C3%B6edingers-cats-talkback-w-elliot-davis/id1601290088?i=1000601427881"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={die} alt="Playtest Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Actual Play - Part 2 of 2</h2> 
                            <h6 className="text-xs my-2">February 17th, 2023</h6>
                            <p className="text-lg my-2">
                                In the finale of the Schröedinger's Cats playtest, Brian Flaherty leads Kevin Bauer, Abby Hepworth, and Julia Schroeder deeper into The Liminality to discover the 
                                sinister forces that has been stealing cat's lost lives.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/schr%C3%B6edingers-cats-actual-play-part-2-of-2/id1601290088?i=1000600174244"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={die} alt="Playtest Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Actual Play - Part 1 of 2</h2> 
                            <h6 className="text-xs my-2">February 10th, 2023</h6>
                            <p className="text-lg my-2">
                                It's the first ever playtest of Schroedinger's Cats as Brian Flaherty leads Kevin Bauer, Abby Hepworth, and Julia Schroeder into The Liminality to rescue their lost lives!
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/schroedingers-cats-actual-play-part-1-of-2/id1601290088?i=1000599018612"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={die} alt="Playtest Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Playtest Edition w/ Elliot Davis</h2> 
                            <h6 className="text-xs my-2">February 3rd, 2023</h6>
                            <p className="text-lg my-2">
                                This episode Elliot Davis takes over the host seat from Brian Flaherty to interview him about his brand-new TTRPG Schröedinger's Cats that he will be playtesting for the very 
                                first time on this podcast! We discuss our thoughts on game design, what to look out for when playtesting, and how to incorporate player feedback into future revisions.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/schr%C3%B6edingers-cats-playtest-edition-w-elliot-davis/id1601290088?i=1000597865494"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* SCHROEDINGER'S CAT */}

            {/* 10 CANDLES */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmRed text-neutral-50">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    10 CANDLES
                </div>
                <div className="collapse-content">
                    <p className="my-8">
                        The tragic horror game 10 Candles is not a game about survival, there are no survivors. Our characters will die, without question and without quarrel. Instead, it is a 
                        game about hope, and how it can be found even in the darkest of moments.
                    </p>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="10 Candles Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 3 w/ Elliot Davis</h2> 
                            <h6 className="text-xs my-2">January 1st, 2023</h6>
                            <p className="text-lg my-2">
                                Brian and Elliot discuss their first ever game of 10 Candles and go over what went right, what went wrong, and how to make the next session even better.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/10-candles-part-3-w-elliot-davis/id1601290088?i=1000591806265"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="10 Candles Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 2 - The Black Dahlia</h2> 
                            <h6 className="text-xs my-2">December 25th, 2022</h6>
                            <p className="text-lg my-2">
                                These things are true. The world is dark...and we are alive.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/10-candles-part-2-the-black-dahlia/id1601290088?i=1000591227102"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="10 Candles Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 1 w/ Stephen Dewey</h2> 
                            <h6 className="text-xs my-2">December 18th, 2022</h6>
                            <p className="text-lg my-2">
                                Brian and Elliot are joined by 10 Candles' creator Stephen Dewey who walks them through his innovative game and discusses how to best build a horror narrative and how to keep 
                                your players on the edge of their seats.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/10-candles-part-1-w-stephen-dewey/id1601290088?i=1000590525961"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 10 CANDLES */}

            {/* HOW TO DEFEND YOUR LAIR */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmBlue">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    HOW TO DEFEND YOUR LAIR
                </div>
                <div className="collapse-content">
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={defendLair} alt="How to Defend Your Lair Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">How to Defend Your Lair w/ Keith Ammann</h2> 
                            <h6 className="text-xs my-2">November 29th, 2022</h6>
                            <p className="text-lg my-2">
                                I am joined once again by author Keith Ammann (The Monsters Know What They're Doing) to discuss his latest book How to Defend Your Lair.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/how-to-defend-your-lair-w-keith-ammann/id1601290088?i=1000587920757"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* HOW TO DEFEND YOUR LAIR */}

            {/* WANDERHOME */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmYellow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    WANDERHOME
                </div>
                <div className="collapse-content">
                    <p className="m-4">
                        The land of Hæth is a pastoral fantasy world filled with everything you could ever need from a role-playing game: Moth mailmen, bumblebee shepherds, and a countryside filled with 
                        the quiet knowledge of the small and forgotten gods. But there's one thing this game doesn't need: A Game Master.
                    </p>
                    <div className="flex flex-col items-center justify-around m-4">
                        <div>
                            <h1 className="text-center text-msmYellowCompBlue text-2xl my-4">CAST</h1>
                            <h2 className="text-xs my-2">Michelle Chan-Bennett as Sal Pachinko (Hellbender Veteran)</h2>
                            <h2 className="text-xs my-2">Elliot Davis as Tipper (Vole Moth-Tender)</h2>
                            <h2 className="text-xs my-2">Brian Flaherty as Thelonious Trinket (Elephant Peddler)</h2>
                            <h2 className="text-xs my-2">Abby Hepworth as Gladys (Ram Shepherd)</h2>
                            <h2 className="text-xs my-2">Shenuque Tissera as Nookie, the Goof (Star-nosed Mole Fool)</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={wanderHome} alt="Wanderhome Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 3 w/ Jay Dragon</h2> 
                            <h6 className="text-xs my-2">September 20th, 2022</h6>
                            <p className="text-lg my-2">
                                Jay Dragon joins us once again to discuss Wanderhome, running guide-less sessions, and our very first game of this ENNIE award-winning pastoral fantasy.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/wanderhome-part-3-w-jay-dragon/id1601290088?i=1000581136538"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={wanderHome} alt="Wanderhome Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 2: The Night Market</h2> 
                            <h6 className="text-xs my-2">September 23rd, 2022</h6>
                            <p className="text-lg my-2">
                                Our road-weary travelers arrive in a new metropolis just in time for the annual Night Market, but first they must find the "vibes" of the city.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/wanderhome-part-2-the-night-market/id1601290088?i=1000580417038"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={wanderHome} alt="Wanderhome Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 1 w/ Jay Dragon</h2> 
                            <h6 className="text-xs my-2">September 16th, 2022</h6>
                            <p className="text-lg my-2">
                                This season Jay Dragon introduces us to GM-less systems and gets us ready for a game of Wanderhome. Join us as we prepare for our first session of this ENNIE award-winning 
                                game where each player has equal control of the world.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/wanderhome-part-1-w-jay-dragon/id1601290088?i=1000578937716"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* WANDERHOME */}

            {/* SOMETHING IS WRONG WITH THE CHICKENS */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow text-neutral-50 bg-msmRed">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    SOMETHING IS WRONG WITH THE CHICKENS
                </div>
                <div className="collapse-content">
                    <p className="m-4">
                        Bryson Foods, Inc has taken everything from us.<br/><br/>
                        We are Chickens.<br/><br/>
                        We are Eldritch Horrors.<br/><br/>
                        Make. Bryson. Pay.<br/><br/>
                        Something is Wrong with the Chickens is a one-page TTRPG all about chickens, eldritch powers, and revenge.
                    </p>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Something is Wrong With the Chickens Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 3: Talkback w/ Elliot Davis</h2> 
                            <h6 className="text-xs my-2">July 20th, 2022</h6>
                            <p className="text-lg my-2">
                                Elliot Davis joins Brian to discuss the game they played and how they can make it better from the point of views of both Game Designer and Chicken Master.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/something-is-wrong-with-the-chickens-part-3-talkback/id1601290088?i=1000570583771"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Something is Wrong With the Chickens Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 2 - The Poultry of Prophecy</h2> 
                            <h6 className="text-xs my-2">July 13th, 2022</h6>
                            <p className="text-lg my-2">
                                Brian is joined by Elliot Davis (Something is Wrong with the Chickens), Shenuque Tissera (The Art of Killing It), Jenny Gustafson (Twenty Sided Podcast), Kihresha Redmond 
                                (The PIT NYC), and Abby Hepworth (Twenty Sided Podcast) in a zero-prep game of Something is Wrong With the Chickens that's filled with Prophecies! Elder Chickens! And...Jazz 
                                Nuggets?
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/something-is-wrong-with-the-chickens-part-2/id1601290088?i=1000569778534"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered my-4">                       
                        <Image src={die} alt="Something is Wrong With the Chickens Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 1 w/ Elliot Davis</h2> 
                            <h6 className="text-xs my-2">July 6th, 2022</h6>
                            <p className="text-lg my-2">
                                This season we dive back into the world of one-page RPGs with this fantastic game of eldritch poultry revenge by Elliot Davis. In this episode Elliot will teach me the rules, 
                                explain some tips and tricks, and set me up to succeed for a zero-prep game.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/something-is-wrong-with-the-chickens-part-1-w-elliot-davis/id1601290088?i=1000569002116"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* SOMETHING IS WRONG WITH THE CHICKENS */}

            {/* HONEY HEIST */}
            {/* <div className="collapse w-11/12 sm:w-4/6 border rounded-box border-base-300 collapse-arrow bg-msmBlue mb-8">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium border-b">
                    HONEY HEIST
                </div>
                <div className="collapse-content">
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={honey} alt="Honey Heist Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 3: Talkback w/ Grant Howitt & Shenuque Tissera</h2> 
                            <h6 className="text-xs my-2">March 9th, 2022</h6>
                            <p className="text-lg my-2">
                                In the final part of our Honey Heist series, Shenuque and Brian are once again joined by Honey Heist creator Grant Howitt to discuss what went right, what went wrong, 
                                and how we can make our games even better.
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/honey-heist-part-3-talkback-w-grant-howitt-shenuque-tissera/id1601290088?i=1000553435376"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={honey} alt="Honey Heist Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 2 - HoneyCon 2022</h2> 
                            <h6 className="text-xs my-2">March 2nd, 2022</h6>
                            <p className="text-lg my-2">
                                Shenuque Tissera runs his very first game of Honey Heist for a group of players including Nathan Yaffe (Drawfee), Vivek Netrakanti (We Fixed It!), Art Cai (Teach Me Good Podcast), 
                                and Brian Flaherty (Twenty Sided Podcast).
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/honey-heist-part-2-honeycon-2022/id1601290088?i=1000552691305"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered border-neutral-900 my-4">                       
                        <Image src={honey} alt="Honey Heist Logo" className="w-full lg:w-1/5 rounded-2xl" />                        
                        <div className="card-body">
                            <h2 className="card-title text-3xl my-2">Part 1 w/ Grant Howitt & Shenuque Tissera</h2> 
                            <h6 className="text-xs my-2">February 23rd, 2022</h6>
                            <p className="text-lg my-2">
                                This season our first time Game Master, Shenuque Tissera, will be tackling Honey Heist and exploring the world of one-page RPGs. And to help him out, we've found him the best 
                                possible teacher: the game's creator, Grant Howitt!
                            </p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/honey-heist-part-1-w-grant-howitt-shenuque-tissera/id1601290088?i=1000552011186"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* HONEY HEIST */}

        </div>
    )
}