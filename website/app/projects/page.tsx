
import { getProjects } from "@/lib/projects"
import Image from "next/image"
import gsap from 'gsap'
import {useEffect, useState} from 'react'


export default async function ProjectsPage(){
  // const [projects, setProjects] = useState([{}])
  
  let projects = await getProjects()

  // useEffect( () => {
  //   let articles = document.querySelectorAll('.projectArticle');

  //   for (let i = 0; i < articles.length; i++){
  //     articles[i].classList.add('translate-x-full')
  //   }

  //   gsap.to('.projectArticle', {
  //     x: 0,
  //     stagger: 0.05,
  //     delay: 0.04,
  //     duration: 0.5
  //   })
  // })
  return(
    <>
      <h1 className="text-5xl text-center font-inter font-extrabold text-white pt-5 space-y-5 mb-16">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-0 mb-10">
          {projects.map(project => (
            <>
              <div className=" mx-8 lg:ml-16">
                <h2 className="text-white  text-2xl mr-10">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}} className="projectArticle mb-5"/>
                <a href= {project.github}>
                   <button className ="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md px-2 py-1 font-bold">
                    View Source Code (Github)
                  </button>
                </a>
              </div>
              <div className="mx-8 mb-12 lg:mr-16 ">
                <Image className="w-full" src = {project.image} alt = "face detect" width={1000} height={1000}></Image>
              </div>
            </>
          ))}
        </div>
    </>
  )
}