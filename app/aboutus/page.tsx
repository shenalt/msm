'use client'

import Link from "next/link"
import Image from "next/image"
import elliot from "../../public/elliotHeadshot.jpg"
import brian from "../../public/brianHeadshot.png"
import abby from "../../public/natashaHeadshot.jpg"
import aiya from "../../public/aiyaHeadshot.jpg"

export default function AboutUs(){
    return(
        <div className="z-10 w-full flex flex-col items-center">
            <div className="flex flex-col m-8">
                <h1>[INSERT BLURB ABOUT MSM, THE PODCASTS, THE TEAM, ANYTHING ELSE YOU THINK SHOULD GO HERE]</h1>
                <h1>[INSERT BLURB ABOUT MSM, THE PODCASTS, THE TEAM, ANYTHING ELSE YOU THINK SHOULD GO HERE]</h1>
                <h1>[INSERT BLURB ABOUT MSM, THE PODCASTS, THE TEAM, ANYTHING ELSE YOU THINK SHOULD GO HERE]</h1>
                <h1>[INSERT BLURB ABOUT MSM, THE PODCASTS, THE TEAM, ANYTHING ELSE YOU THINK SHOULD GO HERE]</h1>
            </div>

            <h1 className="my-8 mx-4 text-9xl hover:text-msmRed transition-all duration-500 text-center">The Team</h1>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={brian} alt="Headshot of Brian Flaherty" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed my-4">Brian Flaherty</h1>
                    <h1 className="my-8 mx-2 2xl:mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat
                    </h1>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={elliot} alt="Headshot of Elliot Davis" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmBlue my-4">Elliot Davis</h1>
                    <h1 className="my-8 mx-2 2xl:mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat
                    </h1>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={aiya} alt="Headshot of Shenuque Tissera" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmYellow my-4">Shenuque Tissera</h1>
                    <h1 className="my-8 mx-2 2xl:mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat
                    </h1>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-3/4 my-8 p-8 border-b-[1px]">
                <Image src={abby} alt="Headshot of Abby Hepworth" className="w-full 2xl:w-2/5"/>
                <div>
                    <h1 className="text-center text-4xl text-msmRed my-4">Abby Hepworth</h1>
                    <h1 className="my-8 mx-2 2xl:mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor justo mauris, sit amet facilisis risus sodales sit amet. In hac habitasse platea dictumst. Duis 
                        sodales, odio at mollis convallis, massa velit lobortis massa, sit amet feugiat nulla ante aliquet enim. Cras tempor, odio nec luctus dictum, arcu massa mattis nibh, in egestas 
                        nibh augue ut magna. Sed egestas rhoncus dapibus. Fusce sagittis feugiat lacus, quis varius ex. Integer vel mollis libero, eu egestas purus. Donec sodales odio ac odio feugiat
                    </h1>
                </div>
            </div>
        </div>
    )
}