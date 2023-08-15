"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface Project {
	title: string;
	image: string;
	github: string;
	body: string;
	languages: string;
}

export default function Project(project: Project) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	return (
		<motion.section
			ref={ref}
			style={{
				scale: scrollYProgress,
				opacity: scrollYProgress,
			}}
			className='px-8 lg:ml-16 bg-white shadow-xl rounded-3xl py-10 mb-10'
		>
			<h2 className='font-extrabold text-2xl'>{project.title}</h2>
			<br />
			<article className='projectArticle mb-5'>
				<p>{project.body}</p>
				<h5>Languages and Resources used:</h5>
				<p>{project.languages}</p>
			</article>
			<a
				target='_blank'
				href={project.github}
				className='flex hover:text-blue-500 py-1 font-bold text-xl w-fit'
			>
				Code{" "}
				<img
					className='ml-2 h-7 w-7'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715'
					alt='github'
				/>
			</a>
		</motion.section>
	);
}
