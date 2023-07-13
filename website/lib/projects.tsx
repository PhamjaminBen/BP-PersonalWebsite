import { readdir, readFile } from "node:fs/promises"
import {marked} from 'marked'
import matter from "gray-matter"


// export async function getProjects() {
//   return [
// {title: "Test Project", body: "wigjwopigj0 q9gj09p  jt3rijijvi ojtoi3 n4h 34lh".repeat(10), image: "/images/facedetect.png"},
// {title: "Test Project", body: "wigj wopi0q9gj0 e3666 69pjt3ri  jijviojto".repeat(15), image: "/images/facedetect.png"}]
// }  

export async function getProjects(){
  const slugs = await getSlugs()
  const projects = []
  for(const slug of slugs){
    const project = await getProject(slug)
    projects.push(project)
  }
  return projects
}

export async function getSlugs(){
  const files = await readdir('./content/projects')
  return  files.filter((file) => file.endsWith('.md'))
  .map((file_ => file_.slice(0, -3)))
}

export async function getProject(slug: String){
  const text = await readFile(`./content/projects/${slug}.md`, 'utf-8')
  const {content, data: {title, image, github} } = matter(text)
  const body = marked(content, {headerIds: false, mangle: false})
  return {slug, title, image, github, body}

}