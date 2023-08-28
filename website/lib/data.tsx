export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"Typescript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Express",
	"Framer Motion",
	"GSAP",
	"Python",
	"SQL",
	"React Native",
	"Expo",
	"Firebase",
] as const;

export const projects = [
	{
		title: "UCI ICS Search engine",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/ICS-Search-Engine",
		body: "The UCI ICS Search Engine is a search engine that I built for my \
    CS 121 (Information retrieval) class at UCI. It acts as a search engine on the \
    ICS subdomain of UCI website. It uses techniques such as PageRank, tf-idf scoring,\
    and mapreduce in order to deliver accurate results. I also built a small full stack\
    website to host the engine, using flask as an APi endpoint for the search engine whilst \
    using next.js for the user interface.",
		skills: ["Python", "Flask", "Next.js", "TailwindCSS", "Vercel"],
	},
	{
		title: "Family Tree Website",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/FamilyTree",
		body: "I created a family tree website for my family's heritage which includes a family tree using the. \
    BalkanTreeJS plugin. I also created a separate admin website which allowed for editing of the tree.\
    I streamlined data input into the data structure by creating two forms, a form for members to input data, and \
    a separate admin form that would approve the data into the tree. I used react hook form in order to validate and\
    streamline the data inputting process. I managed all of the form and tree data through the MongoDB cloud service.",
		skills: ["Next.js", "MongoDB", "TailwindCSS", "Redux"],
	},
	{
		title: "Personal Website",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/BP_PersonalWebsite",
		body: "This website was built in order to practice my skills in next.js, tailwind css, and other external \
    dynamic styling libraries, such as Framer and GSAP.\
    I also made this to give a presentable and response website as an alternative to a resume for a \
    more immersive experience for those looking into my qualifications.",
		skills: ["Typescript", "Node.js", "Next.js", "Vercel", "TailwindCSS"],
	},
	{
		title: "Bballbot",
		image: "/images/facedetect.png",
		github: "https://github.com/PhamjaminBen/BballBot",
		body: "BballBot is a discord bot developed with discord.py that delivers NBA statistics about players\
    and teams to discord servers. It uses SQLite to store player data that can be quickly accessed by the \
    discord bot. I used the beautifulsoup library in order to web scrape multiple NBA statistics pages in \
    order to provide update info.",
		skills: ["Python", "SQLite", "Discord.py", "BS4"],
	},
] as const;
