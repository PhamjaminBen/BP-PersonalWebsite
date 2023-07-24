import { getProjects } from "@/lib/projects"
import Image from "next/image"

export default async function ProjectsPage(){
  const projects = await getProjects()
  console.log(projects)
  return(
    <>
      <h1 className="text-5xl text-center font-inter font-extrabold text-white pt-5 space-y-5 mb-16">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-0 mb-10">
          {projects.map(project => (
            <>
              <div className=" mx-8 lg:ml-16">
                <h2 className="text-white text-xl mr-10">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}} className="mb-5 "/>
                <a href= {project.github}>
                   <button className ="transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md px-2 py-1 font-bold">
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