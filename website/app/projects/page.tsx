import { getProjects } from "@/lib/projects"
import Image from "next/image"

export default async function ProjectsPage(){
  const projects = await getProjects()
  console.log(projects)
  return(
    <>
      <h1 className="text-5xl text-center font-inter pt-5 space-y-5">Projects</h1>
        <ul>
          {projects.map((project) => (
            <li className="flex flex-col lg:flex-row mx-10 sm:mx-16 md:mx-24 my-16">
              <div>
                <h2 className="text-xl mr-10">{project.title}</h2>
                <br/>
                <article dangerouslySetInnerHTML={{__html: project.body}}
                className=""/>
                <button className='mt-5 px-3 object-center bg-gray-500 border-gray-500 rounded-sm border-4 text-black font-bold hover:h-10 hover:w-36'>Github Repo</button>
              </div>
              <Image className="w-92 mt-5 w-full lg:h-40 " src = {project.image} alt = "face detect" width = {400} height = {200}></Image>

            </li>
          ))}
        </ul>
    </>
  )
}