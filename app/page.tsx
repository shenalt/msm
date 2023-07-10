'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CldImage, } from "next-cloudinary"
import frontPageLogo from '../public/SquareLogo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-3 overflow-x-hidden">
      {/* DESKTOP */}
      <div className='hidden lg:flex flex-col w-full lg:w-2/3 mx-4 mt-4 mb-1 border-t border-b border-t-msmRed border-b-msmBlue justify-evenly items-center'>
        <div className='w-1/2'>
          <p className='my-4 text-lg'>
            Hello, and welcome to Many Sided Media! You may know us best as the team behind My First Dungeon, the Twenty Sided Podcast, and the Twenty Sided Newsletter. 
            But with a love of games as big as ours, you know we couldn’t just stop there. We’ve got big plans for the future, 
            with the goal of bringing you even more TTRPG content, and this is the absolute best place to keep up to date with each exciting new venture. 
          </p>
        </div>
        <div className='flex flex-row justify-center items-center my-4'>
          <Link className='w-36' href={'https://www.patreon.com/MyFirstDungeonPod/creators'} target='_blank'><button className='p-2 m-2 font-bold bg-patreonOrange text-whiteColor hover:animate-pulseFP'>Join our Patreon           </button></Link>
          <Link className='w-36' href={'https://twentysidednewsletter.substack.com/'} target='_blank'><button className='p-2 m-2 font-bold bg-newsletterPurple text-whiteColor hover:animate-pulseFP'>Subscribe to the Newsletter</button></Link>
        </div>
      </div>
      {/* DESKTOP */}
      {/* MOBILE & TABLET */}
      {/* <div className='lg:hidden flex flex-row mt-4 md:gap-16'>
        <Link className='w-3/5' href={'https://www.patreon.com/MyFirstDungeonPod/creators'} target='_blank'><button className='h-4/5 p-4 m-2 font-bold bg-patreonOrange text-whiteColor hover:animate-pulseFP'>Join our Patreon</button></Link>
        <Link className='w-3/5' href={'https://twentysidednewsletter.substack.com/'} target='_blank'><button className='h-4/5 p-4 m-2 font-bold bg-newsletterPurple text-whiteColor hover:animate-pulseFP'>Subscibe to the Newsletter</button></Link>
      </div> */}
      {/* MOBILE & TABLET */}
      <Image 
        src={frontPageLogo} 
        alt='Logo for Many Sided Media Company' 
        className='w-full lg:w-1/3 h-auto animate-bounceFP' 
      />
      <div className='w-full lg:w-2/3 m-4 border translate lg:border-l-0 lg:border-r-0 border-t-msmRed border-b-msmBlue border-l-msmYellow border-r-msmYellow'>
        <p className='lg:hidden m-8 text-lg'>
          Hello, and welcome to Many Sided Media! You may know us best as the team behind My First Dungeon, the Twenty Sided Podcast, and the Twenty Sided Newsletter
          . But with a love of games as big as ours, you know we couldn’t just stop there. We’ve got big plans for the future, 
          with the goal of bringing you even more TTRPG content, and this is the absolute best place to keep up to date with each exciting new venture. 
        </p>
        <div className='flex flex-row justify-center items-center my-4 lg:hidden'>
          <Link className='w-36' href={'https://www.patreon.com/MyFirstDungeonPod/creators'} target='_blank'><button className='p-2 m-2 font-bold bg-patreonOrange text-whiteColor hover:animate-pulseFP'>Join our Patreon           </button></Link>
          <Link className='w-36' href={'https://twentysidednewsletter.substack.com/'} target='_blank'><button className='p-2 m-2 font-bold bg-newsletterPurple text-whiteColor hover:animate-pulseFP'>Subscribe to the Newsletter</button></Link>
        </div>
        <p className='m-8 text-lg'>
          P.S. Our My First Dungeon Patreon, The Dice Pool, is now live!
        </p>
        <p className='m-8 text-lg'>
          Patrons get access to even more actual play episodes featuring both new games and old favorites, as well as cast talk backs for each season, interviews with TTRP all-stars and more fun goodies. There’s 
          even an exclusive Discord channel for you to tell us all the things you like, the things you love, and the things you want to see more of. If you’re looking to support us in producing all the major MFD 
          seasons, plus get all the bonus goodies, then come on over and join us in the Dice Pool. SPLASH!
        </p>
      </div>

      <Link href={'/myfirstdungeon'} className='hidden md:flex'>
        <div className='hidden md:flex flex-row flex-wrap items-center justify-center my-8'>       
            <CldImage width="200" height="200" src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269652/samples/msm/TenCandlesCoverImage.jpg'} alt='TenCandles' />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687290373/samples/msm/ChickenCoverImage.png`} alt="Something is Wrong with the Chickens" />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687288452/samples/msm/PlaytestCoverImage.jpg`} alt="Schroedinger's Cat" />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687285101/samples/msm/WanderhomeCoverImage.png`} alt="Wanderhome" />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686779328/samples/msm/honeyHeistCoverImage.png`} alt="Honey Heist" />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686270073/samples/msm/DieCoverImage.png`} alt="DIE" />
            <CldImage width="200" height="200" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687291351/samples/msm/goodSocietyCoverImage.png`} alt="Good Society" />       
        </div>
      </Link>

      <div className="md:hidden carousel w-full m-4">
      <div id="slide1" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="1024" height="1024" src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269652/samples/msm/TenCandlesCoverImage.jpg'} alt='TenCandles' />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="1920" height="1920" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687290373/samples/msm/ChickenCoverImage.png`} alt="Something is Wrong with the Chickens" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="3000" height="3000" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687288452/samples/msm/PlaytestCoverImage.jpg`} alt="Schroedinger's Cat" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="2250" height="2250" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687285101/samples/msm/WanderhomeCoverImage.png`} alt="Wanderhome" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="3000" height="3000" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686779328/samples/msm/honeyHeistCoverImage.png`} alt="Honey Heist" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="3000" height="3000" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686270073/samples/msm/DieCoverImage.png`} alt="DIE" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a> 
          <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <Link className="w-7/12 lg:w-5/12 h-auto m-auto" href={'/myfirstdungeon'}>
          <CldImage width="1688" height="1688" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687291351/samples/msm/goodSocietyCoverImage.png`} alt="test" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

    </main>
  )
}
