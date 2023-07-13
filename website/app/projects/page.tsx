import { getProjects } from "@/lib/projects"
import Image from "next/image"

export default async function ProjectsPage(){
  const projects = await getProjects()
  console.log(projects)
  return(
    <>
      <h1 className="text-5xl text-center font-inter pt-5 space-y-5">Projects</h1>
        <ul>
          {projects.map((project,index) => (
            <li key = {`${index}`} className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-4 lg:flex-row mx-10 sm:mx-16 md:mx-24 my-16">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl mr-10">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}} className="mb-5 "/>
                <a href= {project.github} className='px-3 py-1 object-center bg-gray-500 border-gray-500 rounded-md border-4 text-black font-bold hover:h-10 hover:w-36'>Github Repo</a>
              </div>
              <img className="w-full lg:w-1/2 lg:h-1/2" src = {project.image} alt = "face detect"></img>

            </li>
          ))}
        </ul>
    </>
  )
}