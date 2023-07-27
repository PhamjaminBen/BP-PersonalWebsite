import Image from "next/image"
import githublogo from "@/public/images/githubicon.png"
import linkedinlogo from "@/public/images/linkedinlogo.png"

export default function Footer(){
  return(
    <div className='container m-auto grid grid-cols-5 lg:grid-cols-7 gap-1 h-32 w-screen  pt-8'>
              <div className='lg:col-span-2'></div>
              <a href="https://github.com/PhamjaminBen" className="">
                <Image  src = {githublogo} 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </Image>
              </a>
              <a href="https://www.linkedin.com/in/ben-pham-307a22149/" className="">
                <Image  src = {linkedinlogo} 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </Image>
              </a>
              <a href="https://github.com" className="">
                <Image  src = {githublogo} 
                        alt = "Github" 
                        width={64}
                        height={64}
                        className='m-auto'>
                </Image>
              </a>
              <div className='lg:col-span-2'></div>
    </div>
  )
}