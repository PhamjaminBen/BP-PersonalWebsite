import { getProjects } from "@/lib/projects"
import Image from "next/image"

export default async function ProjectsPage(){
  const projects = await getProjects()
  console.log(projects)
  return(
    <>
      <h1 className="text-5xl text-center font-inter pt-5 space-y-5 mb-16">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-0 mb-10">
          {projects.map((project,index) => (
            <>
              <div className=" mx-8 lg:ml-16">
                <h2 className="text-xl mr-10">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}} className="mb-5 "/>
                <a href= {project.github} className='px-3 py-1 object-center bg-gray-500 border-gray-500 rounded-md border-4 text-black font-bold hover:h-10 hover:w-36'>Github Repo</a>
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