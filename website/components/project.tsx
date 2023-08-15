"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Project(project: Project) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});

	return (
		<motion.section
			ref={ref}
			style={{
				scale: scrollYProgress,
				opacity: scrollYProgress,
			}}
			className='px-8 bg-white shadow-xl rounded-3xl py-10 mb-10 w-full'
		>
			<h2 className='font-extrabold text-2xl'>{project.title}</h2>
			<br />
			<article className='projectArticle mb-5'>
				<p>{project.body}</p>
				{/* <h5 className='mt-3 mb-1'>Languages and Resources used:</h5> */}
				<ul className='flex flex-wrap gap-2 pt-5 pb-2 lg:pb-0'>
					{project.skills.map((skill, index) => (
						<li
							key={index}
							className='text-white bg-slate-800 border border-black/[0.1] rounded-full px-5 py-2'
						>
							{skill}
						</li>
					))}
				</ul>
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
