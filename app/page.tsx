'use client'

import Image from 'next/image'
import { CldImage } from "next-cloudinary"
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
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>
      <p className='my-8'>
        [INSERT TEXT HERE ABOUT MANY SIDED MEDIA EXPLAINING WHAT IT IS AND WHAT YOU PROVIDE AND ANYTHING ELSE YOU THINK WOULD BELONG HERE]
      </p>

      <div className="carousel w-full m-4">
      <div id="slide1" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/honeyHeistCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide8" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/TenCandlesCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/WanderhomeCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/goodSocietyCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/mfdBasicCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/PlaytestCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a> 
          <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/ChickenCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a> 
          <a href="#slide8" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide8" className="carousel-item relative w-full">
        <CldImage width="375" height="375" src={`samples/msm/DieCoverImage`} alt="test" className="w-7/12 lg:w-5/12 h-auto m-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

    </main>
  )
}
