// import { readdir, readFile } from "node:fs/promises";
// import { marked } from "marked";
// import matter from "gray-matter";

// // export async function getProjects() {
// //   return [
// // {title: "Test Project", body: "wigjwopigj0 q9gj09p  jt3rijijvi ojtoi3 n4h 34lh".repeat(10), image: "/images/facedetect.png"},
// // {title: "Test Project", body: "wigj wopi0q9gj0 e3666 69pjt3ri  jijviojto".repeat(15), image: "/images/facedetect.png"}]
// // }

// export async function getProjects() {
// 	const slugs = await getSlugs();
// 	const projects = [];
// 	for (const slug of slugs) {
// 		const project = await getProject(slug);
// 		projects.push(project);
// 	}
// 	return projects;
// }

// export async function getSlugs() {
// 	const files = await readdir("./content/projects");
// 	return files
// 		.filter((file) => file.endsWith(".md"))
// 		.map((file_) => file_.slice(0, -3));
// }

// export async function getProject(slug: String) {
// 	const text = await readFile(`./content/projects/${slug}.md`, "utf-8");
// 	const {
// 		content,
// 		data: { title, image, github },
// 	} = matter(text);
// 	const body = marked(content, { headerIds: false, mangle: false });
// 	return { slug, title, image, github, body };
// }

// Promise<{
//     slug: String;
//     title: any;
//     image: any;
//     github: any;
//     body: string;
// }[]

export const projects = [
	{
		title: "UCI ICS Search engine",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/ICS-Search-Engine",
		body: "The UCI ICS Search Engine is a search engine that I built for my CS 121 (Information retrieval) class at UCI. It acts as a search engine on the ICS subdomain of UCI website. It uses techniques such as PageRank, tf-idf scoring, and mapreduce in order to deliver accurate results. I also built a small full stack website to host the engine, using flask as an APi endpoint for the search engine whilst using next.js for the user interface.",
		languages: "Python, Flask, Next.js, Vercel, TailwindCSS",
	},
	{
		title: "Personal Website",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/BP_PersonalWebsite",
		body: "This website was built in order to practice my web design skills and deployment with static websites, and to also make a presentable website as an alternative to a resume for a more immersive experience for those looking into my qualifications",
		languages: "Typescript, Node.js, Next.js, Vercel, TailwindCSS",
	},
	{
		title: "Bballbot",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/BballBot",
		body: "BballBot is a discord bot developed with discord.py that delivers NBA statistics about players and teams to discord servers. It uses SQLite to store player data that can be quickly accessed by the discord bot. I used the beautifulsoup library in order to web scrape multiple NBA statistics pages in order to provide update info.",
		languages: "Python, SQLite, Discord.py, BS4",
	},
];
