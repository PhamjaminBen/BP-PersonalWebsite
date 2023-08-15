"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function About() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "0.75 1"],
	});
	return (
		<motion.section
			ref={ref}
			style={{
				scale: scrollYProgress,
				opacity: scrollYProgress,
			}}
			id='about'
			className='m-auto max-w-6xl px-8 py-32 bg-white scroll-mt-32'
		>
			<h1 className='text-5xl text-center font-inter font-extrabold pt-5 mb-16'>
				About Me
			</h1>
			<div className='flex flex-col lg:flex-row items-center lg:space-x-16 space-y-16 lg:space-y-0'>
				<Image
					className='h-80 w-96 rounded-2xl'
					src='/images/desk.png'
					alt='Desktop Image'
					width={1000}
					height={1000}
				/>
				<p className='text-md leading-8 text-center'>
					I am currently a student at the{" "}
					<span className='font-medium'>University of California, Irvine</span>{" "}
					pursuing a Bachelors Degree in{" "}
					<span className='font-medium'>Computer Science.</span> I have
					developed an interest in full-stack web development, as having the
					ability to solve problems and build your very own web application from
					the ground up is very satisfying and rewarding. My core stack is{" "}
					<span className='font-medium'>
						React, Next.js, Node.js, TailwindCSS, and MongoDB.
					</span>{" "}
					I am also familiar with Typescript, React Native, and Expo. I am
					looking to learn new technologies and gain experience being a web dev,
					and am currently looking for an opportunity to both showcase and
					improve my skills through an internship or job.
					<br></br>
					<br></br>
					When I'm not coding, I enjoy watching the NBA, playing the piano,
					playing volleyball and basketball, and attending concerts featuring my
					favorite hip-hop artists.
				</p>
			</div>
		</motion.section>
	);
}
