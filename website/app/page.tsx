import Image from 'next/image'

export default function Home() {
  return (
    <main className=" text-white">
      <div className="text-5xl text-center font-inter pb-20 pt-5 space-y-5">
        <h1 className='transition-opactiy'>Hi, I&apos;m Ben Pham </h1>
        <h1>I&apos;m a student developer</h1>
      </div>
      <h1 className='text-5xl w-full text-center p-10'>About Me</h1>
      <div className='flex flex-col  items-center lg:flex-row pb-32'>
        <Image 
          src={"/images/portrait.jpeg"} 
          alt='portrait' 
          width={400} height={400} 
          className='pl-0 lg:pl-20'
        />
        <p className="text-lg text-white text-left m-5 md:mx-20 ">I am a current student pursuing a bachelors
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
          <a href = "https://crimson-karon-94.tiiny.site/" className='px-3 object-center bg-white border-white rounded-lg border-4 text-black font-bold hover:bg-black hover:text-white'>View Resume</a>
          </p>
      </div>
    </main>
  )
}
