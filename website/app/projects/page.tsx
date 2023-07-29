
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
      <h1 className="text-5xl text-center font-inter font-extrabold pt-5 space-y-5 mb-16">Projects</h1>
        <div className="m-auto max-w-5xl gap-y-8 lg:gap-y-16 mb-10">

          {projects.map(project => (
            <div className="bg-white shadow-xl rounded-3xl py-10 mb-10">
              <div className="mx-8 lg:ml-16">
                <h2 className="font-extrabold text-2xl">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}} className="projectArticle mb-5"/>
                <a target="_blank" href= {project.github}>
                   <button className =" flex hover:text-blue-500 py-1 font-bold text-xl">
                    Code <img className="ml-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715" alt="github" height={25} width={25} />
                  </button>
                </a>
              </div>
              {/* <div className="mx-8 mb-12 lg:mr-16 ">
                <Image className="w-full" src = {project.image} alt = "face detect" width={1000} height={1000}></Image>
              </div> */}
            </div>
          ))}

        </div>
    </>
  )
}