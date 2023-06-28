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
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>

      <div className="carousel w-full m-4">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={'https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269337/samples/msm/AnamnesisCoverImage.png'} alt='test' className="w-7/12 lg:w-5/12 h-auto m-auto" width={300} height={300} />
        {/* <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269337/samples/msm/AnamnesisCoverImage.png`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" /> */}
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
        <CldImage width="375" height="375" src={`https://res.cloudinary.com/djr5bxwfk/image/upload/v1686269652/samples/msm/TenCandlesCoverImage.jpg`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
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
