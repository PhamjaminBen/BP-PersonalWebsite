import Image from "next/image"
import githublogo from "@/public/images/githubicon.png"
import linkedinlogo from "@/public/images/linkedinlogo.png"

export default function Footer(){
  return(
    <div className='container m-auto flex justify-center space-x-10 h-32 w-screen  pt-8'>
              <div className='lg:col-span-2'></div>
              <a target="_blank" href="https://github.com/PhamjaminBen" className="">
                <Image  src = {githublogo} 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </Image>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ben-pham-307a22149/" className="">
                <Image  src = {linkedinlogo} 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </Image>
              </a>
              <a target="_blank" href="mailto:bendmpham@gmail.com" className="">
                <img  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Aiga_mail_white.svg/114px-Aiga_mail_white.svg.png?20190915193920" 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </img>
              </a>
              <div className='lg:col-span-2'></div>
    </div>
  )
}