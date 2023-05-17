'use client'

import Image from "next/image"
import Link from "next/link"
import titanfall from "../../public/twenty/escapeFromTitanfall.png"
import prisoner from "../../public/twenty/prisonerStatic.PNG"
import tspLogo from "../../public/twenty/tspLogo.PNG"
import {FaSpotify,} from "react-icons/fa"
import { SiApplepodcasts } from "react-icons/si"

export default function TwentySidedPodcast(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <Image src={tspLogo} alt="Twenty Sided Podcast Logo" className="w-11/12 lg:w-2/5 m-auto" />
            <p className="text-2xl m-auto text-center my-8">Listen to Twenty Sided Podcast here</p>
            <div className="flex flex-row gap-20 items-center justify-center my-8">
                <Link href={"https://podcasts.apple.com/us/podcast/twenty-sided-podcast/id1578469041"} target="_blank">
                    <SiApplepodcasts className="cursor-pointer hover:fill-applePurple hover:scale-150 transition-all duration-500" size={70} />
                </Link>
                <Link href={"https://open.spotify.com/show/1FEqdHtVxJqn8rKBZfxCKG"} target="_blank">
                    <FaSpotify className="cursor-pointer hover:fill-spotifyGreen hover:scale-150 transition-all duration-500" size={70} />
                </Link>
            </div>
            <p className="m-auto mt-8">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>
            <p className="m-auto mb-8">[INSERT BLURB EXPLAINING WHAT TSP IS AND ANYTHING ELSE YOU THINK SHOULD GO HERE]</p>

            {/* ESCAPE FROM THE R.M.S. TITANFALL */}
            <div className="collapse w-full sm:w-4/6 border rounded-box border-base-300 bg-collapseColor collapse-arrow duration-700">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Escape from the R.M.S. Titanfall
                </div> 
                <div className="collapse-content">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="justify-center">Cast</h1>
                        <div>
                            <h2>Blythe Roberson as Meadhbh Snailbaby</h2>
                            <h2>Jenny Gustafson as Karis Thornbrow</h2>
                            <h2>Kevin Bauer as Cleave Beefchief</h2>
                            <h2>Brian Flaherty as The DM (aka everybody else)</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 1: Setting Sail</h2> 
                            <h6>July 26th, 2021</h6>
                            <p>Join Cleave Beefchief (Kevin), Meadhbh Snailbaby (Blythe), and Karis Thornbrow (Jenny) as they each find their way aboard the maiden voyage of the grandest ship ever built: the R.M.S. Titanfall.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-1-setting-sail-r-m-s-titanfall-arc/id1578469041?i=1000530159116"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 2: The Liminal Sea</h2> 
                            <h6>August 2nd, 2021</h6>
                            <p>Stowaways, shuffleboard, and smoke detectors.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-1-setting-sail-r-m-s-titanfall-arc/id1578469041?i=1000530159116"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 3: Saloon Skirmish</h2> 
                            <h6>August 9th, 2021</h6>
                            <p>A brawl breaks out in the second-class saloon and the ship's architect, Mertelby, is caught in the crossfire! Is it coincidence that the tortle with the answers is in the middle of a barfight or are there more sinister forces at play?</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-3-saloon-skirmish-r-m-s-titanfall-arc/id1578469041?i=1000531467799"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 4: Inquisitions</h2> 
                            <h6>August 16th, 2021</h6>
                            <p>Our heroes search for answers but only find more questions. And questions can be deadly.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-4-inquisitions-r-m-s-titanfall-arc/id1578469041?i=1000532149312"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 5: Countdown to Catastrophe</h2> 
                            <h6>August 23rd, 2021</h6>
                            <p>The clock is ticking as our heroes take stock of their perilous situation and wrestle with the resurrection of a long-lost evil.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-5-countdown-to-catastrophe-r-m-s-titanfall-arc/id1578469041?i=1000532802513"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 6: Loyalites</h2> 
                            <h6>August 30th, 2021</h6>
                            <p>Our heroes decide how to deal with a newly uncovered treachery and learn that their troubles may be worse than they thought.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-6-loyalites-r-m-s-titanfall-arc/id1578469041?i=1000533572443"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 7: Mayday</h2> 
                            <h6>September 6th, 2021</h6>
                            <p>Dangers continue to mount and our heroes begin to realize they may have even less time than they thought.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-7-mayday-r-m-s-titanfall-arc/id1578469041?i=1000534445748"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 8: Flight of the Bumblebee</h2> 
                            <h6>September 13th, 2021</h6>
                            <p>Our heroes–along with a swarm of militant bees–continue climbing up the ship to face off with The Drowned and the fearsome monstrosity above.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-8-flight-of-the-bumblebee-r-m-s-titanfall-arc/id1578469041?i=1000535161724"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 9: Mob Mentality</h2> 
                            <h6>September 27th, 2021</h6>
                            <p>Tensions aboard the R.M.S. Titanfall reach a boiling point as a desperate mob of passengers begins to look more and more like a weapon to be wielded.</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-9-mob-mentality-r-m-s-titanfall-arc/id1578469041?i=1000536739794"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 10: Dead in the Water</h2> 
                            <h6>October 4th, 2021</h6>
                            <p>Adrift, broken, and exhausted…<br/>
                                The Kraken is nearly reborn…<br/>
                                Time is almost up…</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-10-dead-in-the-water-r-m-s-titanfall-arc/id1578469041?i=1000537476068"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2">                       
                        <Image src={titanfall} alt="Escape from Titanfall Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 11: Abandon Ship</h2> 
                            <h6>October 11th, 2021</h6>
                            <p>SEASON FINALE!!<br/>
                                Time is up. The battle rages. Will our heroes go down with the ship?</p>
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-11-abandon-ship-r-m-s-titanfall-arc/id1578469041?i=1000538208012"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* ESCAPE FROM THE R.M.S. TITANFALL */}

            {/* Prisoners of the Static */}
            <div className="collapse w-full sm:w-4/6 border rounded-box border-base-300 collapse-arrow mb-8">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Prisoners of the Static
                </div> 
                <div className="collapse-content"> 
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="justify-center">Cast</h1>
                        <div>
                            <h2>Abby Hepworth as Natasha Bol'shoy-Kot</h2>
                            <h2>Shenuque Tissera as Yaksha Rah</h2>
                            <h2>Noah Gebstadt as Sienni Saari</h2>
                            <h2>Brian Flaherty as The DM (aka everybody else)</h2>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 1: Descent into Madness</h2> 
                            <h6>November 22nd, 2021</h6>
                            <p>After discovering a cryptic message from a legendary figure, a new cast of characters each find their way aboard a dangerous voyage directly into The Static. But be warned, not everything is what it seems...</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-1-descent-into-madness-prisoners-of-the-static-arc/id1578469041?i=1000542706548"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 2: What Is And What Never Should Be</h2> 
                            <h6>November 29th, 2021</h6>
                            <p>Welcome to The Village.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-2-what-is-and-what-never-should-be-prisoners/id1578469041?i=1000543366008"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 3: Monster Zero</h2> 
                            <h6>December 6th, 2021</h6>
                            <p>The crew of the Gilded Ghost discover some strange new abilities, courtesy of The Static.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-3-monster-zero-prisoners-of-the-static-arc/id1578469041?i=1000544089325"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 4: Assume Form</h2> 
                            <h6>December 13th, 2021</h6>
                            <p>Sienni fights for his life. Yaksha relives a memory. Natasha sees a ghost.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-4-assume-form-prisoners-of-the-static-arc/id1578469041?i=1000544807947"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 5: Kids See Ghosts</h2> 
                            <h6>December 20th, 2021</h6>
                            <p>Natasha sees a ghost from her past. Yaksha perfects his No. 2 impression. Sienni becomes embroiled in a vegetable revolution.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-5-kids-see-ghosts-prisoners-of-the-static-arc/id1578469041?i=1000545510423"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 6 - Lonely Void</h2> 
                            <h6>January 3rd, 2022</h6>
                            <p>Sienni befriends a carrot. Yaksha's disguise falters.  Natasha gets frightened.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-6-lonely-void-prisoners-of-the-static-arc/id1578469041?i=1000546783027"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 7 - The Sound of Silence</h2> 
                            <h6>January 10th, 2022</h6>
                            <p>Sienni trusts the wrong spiders. Yaksha makes some new friends. Natasha goes quiet.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-7-the-sound-of-silence-prisoners-of-the-static-arc/id1578469041?i=1000547421771"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 8 - Don't Panic</h2> 
                            <h6>January 17th, 2022</h6>
                            <p>Sienni breaks a code. Yaksha tries on some familiar faces. Boris comes to the rescue.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-8-dont-panic-prisoners-of-the-static-arc/id1578469041?i=1000548115431"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 9 - I Want To Break Free</h2> 
                            <h6>January 24th, 2022</h6>
                            <p>Yaksha gets noticed. Boris shows his skills. Sienni has some crazy ideas.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-9-i-want-to-break-free-prisoners-of-the-static-arc/id1578469041?i=1000548816306"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 10 - Lost & Found</h2> 
                            <h6>January 31st, 2022</h6>
                            <p>Yaksha explores a laboratory. Sienni and Natasha encounter Don Taraxa.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-10-lost-found-prisoners-of-the-static-arc/id1578469041?i=1000549524755"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 11 - Wild World</h2> 
                            <h6>February 7th, 2022</h6>
                            <p>The crew regroup on the Gilded Ghost to share what they've learned, but will it be enough to escape the thrall of The Village?</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-11-wild-world-prisoners-of-the-static-arc/id1578469041?i=1000550307238"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 12 - Gotta Knock a Little Harder</h2> 
                            <h6>February 14th, 2022</h6>
                            <p>An explosion rocks The Village, and it might've been the crew of the Gilded Ghost who caused it.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-12-gotta-knock-a-little-harder-prisoners-of-the-static-arc/id1578469041?i=1000551034600"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 13 - Them Changes</h2> 
                            <h6>February 21st, 2022</h6>
                            <p>A fight begins with the latest Number 2, but which is more deadly: his sword or his words?</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-13-them-changes-prisoners-of-the-static-arc/id1578469041?i=1000551762064"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 14 - Us and Them</h2> 
                            <h6>March 7th, 2022</h6>
                            <p>Fear threatens to consume a potential ally. Can the crew of the Gilded Ghost defeat their fears or will they fall prey themselves?</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-14-us-and-them-prisoner-of-the-static-arc/id1578469041?i=1000553167099"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 15: Deception</h2> 
                            <h6>March 21st, 2022</h6>
                            <p>To save No. 22 from the clutches of The Village, the crew of the Gilded Ghost risk falling prey to it themselves.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-15-deception-prisoners-of-the-static-arc/id1578469041?i=1000554718974"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 16: Is It In My Head?</h2> 
                            <h6>April 4th, 2022</h6>
                            <p>Sienni meets Number One. Yaksha talks to the prisoner. Natasha rides a carousel.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-16-is-it-in-my-head-prisoners-of-the-static-arc/id1578469041?i=1000556180864"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 17: Roundabout</h2> 
                            <h6>April 18th, 2022</h6>
                            <p>Natasha goes for a ride while Sienni and Yaksha plan a surprise.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-17-roundabout-prisoners-of-the-static-arc/id1578469041?i=1000557913995"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side card-bordered mt-2 sm:mt-1">                       
                        <Image src={prisoner} alt="Prisoners of the Static Logo" className="w-full lg:w-1/5" />                        
                        <div className="card-body">
                            <h2 className="card-title">Ep. 18 - That Funny Feeling</h2> 
                            <h6>July 27th, 2022</h6>
                            <p>Yaksha makes a deal. Sienni asks some questions. Natasha sees an old friend.</p> 
                            <div className="card-actions">
                                <Link href={"https://podcasts.apple.com/us/podcast/ep-18-that-funny-feeling-prisoners-of-the-static-arc/id1578469041?i=1000571335831"} target="_blank">
                                    <button className="btn btn-primary">More Info</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Prisoners of the Static */}

            {/* <div className="collapse w-4/6 border rounded-box border-base-300 collapse-arrow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    I open/close with click
                </div> 
                <div className="collapse-content"> 
                    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using 
                    <span className="badge badge-outline">collapse-open</span> and 
                    <span className="badge badge-outline">collapse-close</span> classes.
                    </p>
                </div>
            </div>  */}
        </div>
    )
}