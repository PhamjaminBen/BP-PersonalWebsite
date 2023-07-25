"use client";
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {useEffect} from 'react'
import SplitType from 'split-type'

export default function Home() {
  useEffect( () => {
    let text = new SplitType('#title');
    let chars = document.querySelectorAll('.word');

    for (let i = 0; i < chars.length; i++){
      chars[i].classList.add('translate-y-full')
    }

    gsap.to('.word', {
      y: 0,
      stagger: 0.05,
      delay: 0.04,
      duration: 0.5
    })
    
    // setTimeout(() => {
    //   gsap.to('#portrait', {
    //     x:0 ,
    //     duration: 1.0
    //   })
    // }, 1000);

  })
  return (
    <>
    <main className="">
      <div className="text-5xl  text-center font-inter mb-8 mt-5 space-y-5 font-bold text-white">
        <h1 className='mb-10' id = "title" style = {{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%);" }}>
          Hi, I&apos;m Ben Pham, I&apos;m a student developer.
        </h1>
      </div>
      <h1 className='text-5xl text-white text-bold w-full text-center p-10'>About Me</h1>
      <div className='flex flex-col  items-center xl:flex-row pb-32'>
        <Image 
          id = "portrait"
          src={"/images/portrait.jpeg"} 
          alt='portrait' 
          width={400} height={400} 
          className='m-auto xl:ml-32'
        />
        <p id="bio" className="text-lg text-left m-5 md:mx-20 xl:pr-40 xl:ml-32 ">I am a current student pursuing a bachelors
          in computer science at the University of California, Irvine. I&apos;m an aspiring full-stack 
          developer with a wide range of skills and expertise. 
          I am actively seeking experiences that offer opportunities for professional growth and personal development, 
          allowing me to expand my knowledge and learn new things.
          <br/><br/>
          My goal is to assume leadership roles and collaborate with a team to achieve exceptional
          outcomes. I take pride in my punctuality, ability to meet deadlines, and constant efforts 
          to enhance my presentation and analytical skills in different environments. 
          Being based in the Greater Los Angeles area has provided me with valuable experiences and 
          opportunities for personal growth. I have had the privilege of connecting with 
          like-minded individuals who are also commited to software development,
          which has allowed me to acquire new skills and refine existing ones. 
          In my free time, I find joy in playing volleyball and keeping up with the NBA.
          <br/><br/>
          <Link href = "https://drive.google.com/file/d/1t_WPHCq14QLpYhL3CTabuQ8PGuewl3Ak/view?usp=sharing">
              <button className ="text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md px-2 py-1 font-bold">
                View Resume
              </button>
          </Link>
          </p>
      </div>
    </main>
    </>
  )
}
