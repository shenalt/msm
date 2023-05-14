'use client'

import Link from 'next/link'
import { NavbarType } from '../types/NavbarType'

export default function Menu({
    isOpen, 
    setIsOpen,
}: NavbarType){
    return(
        <div 
            className='fixed w-full h-screen left-0 top-0 bg-black/25'
            onClick={setIsOpen(!isOpen)}
        >
            <div 
                className={`w-full ${isOpen ? "translate-x-0" : "translate-x-[1000%]"} lg:w-2/6 flex flex-col justify-center bg-neutral h-screen text-left p-8 absolute top-0 right-0 ease-in-out`}
                onClick={(e) => e.stopPropagation()}
            >
                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
                <a className='text-2xl py-8 font-bold tracking-wide no-underline ease-linear text-center'>OUR SHOWS</a> 
            </div>
        </div>
    )
}

// ${
//     order.status === 'complete' ? "bg-green-600" : "bg-orange-500"
// }