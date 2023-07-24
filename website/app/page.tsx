import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="text-5xl text-center font-inter pb-20 pt-5 space-y-5">
        <h1 className='transition-opactiy'>Hi, I&apos;m Ben Pham </h1>
        <h1>I&apos;m a student developer</h1>
      </div>
      <h1 className='text-5xl text-white text-bold w-full text-center p-10'>About Me</h1>
      <div className='flex flex-col  items-center lg:flex-row pb-32'>
        <Image 
          src={"/images/portrait.jpeg"} 
          alt='portrait' 
          width={360} height={360} 
          className='mx-5 lg:m-0 lg:ml-20'
        />
        <p className="text-lg text-left m-5 md:mx-40 ">I am a current student pursuing a bachelors
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
  )
}
