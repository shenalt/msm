'use client'

import Image from 'next/image'
import { CldImage, } from "next-cloudinary"
import frontPageLogo from '../public/SquareLogo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 overflow-x-hidden">
      <Image 
        src={frontPageLogo} 
        alt='Logo for Many Sided Media Company' 
        className='lg:w-5/12 h-auto animate-bounceFP' 
      />
      <div className='w-full lg:w-2/3 m-4'>
        <p className='m-8 text-xl'>
          Hello, and welcome to Many Sided Media! You may know us best as the team behind My First Dungeon, the Twenty Sided Podcast, and the Twenty Sided Newsletter an actual play podcast in which we introduce 
          game masters and listeners to new TTRPGs and help make each game better than the last. But with a love of games as big as ours, you know we couldn’t just stop there. We’ve got big plans for the future, 
          with the goal of bringing you even more TTRPG content, and this is the absolute best place to keep up to date with each exciting new venture. 
        </p>
        <p className='m-8'>
          P.S. Our My First Dungeon Patreon, The Dice Pool, is now live!
        </p>
        <p className='m-8'>
          Patrons get access to even more actual play episodes featuring both new games and old favorites, as well as cast talk backs for each season, interviews with TTRP all-stars and more fun goodies. There’s 
          even an exclusive Discord channel for you to tell us all the things you like, the things you love, and the things you want to see more of. If you’re looking to support us in producing all the major MFD 
          seasons, plus get all the bonus goodies, then come on over and join us in the Dice Pool (aka our Patreon). SPLASH!
        </p>
      </div>

      <div className="carousel w-full m-4">
      <div id="slide1" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269652/samples/msm/TenCandlesCoverImage.jpg'} alt='test' className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide8" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687290373/samples/msm/ChickenCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687288452/samples/msm/PlaytestCoverImage.jpg`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687285101/samples/msm/WanderhomeCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686779328/samples/msm/honeyHeistCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686270073/samples/msm/DieCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a> 
          <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269337/samples/msm/AnamnesisCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a> 
          <a href="#slide8" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide8" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1687291351/samples/msm/goodSocietyCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

    </main>
  )
}
