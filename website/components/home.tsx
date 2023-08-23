"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
	const { ref, inView } = useInView({
		threshold: 0.75,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Home");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.section className='pb-32 scroll-mt-64' id='home' ref={ref}>
			<div
				id='photo-intro'
				className='max-w-5xl px-8 m-auto flex flex-col  content-center space-y-12 pb-16 lg:flex-row lg:pb-32 lg:space-x-40 lg:space-y-0 '
			>
				<Image
					id='portrait'
					src={"/images/portrait.jpeg"}
					alt='portrait'
					width={450}
					height={450}
					className='m-auto -translate-x-96 opacity-0 overflow-hidden rounded-full h-64 w-64 lg:w-3/5 lg:h-3/5'
				/>
				<div id='bio' className='opacity-0 translate-x-96 text-lg lg:align-top'>
					<h1
						className='text-5xl mb-10 font-bold text-center lg:text-left leading-relaxed'
						id='title'
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
					>
						Aspiring full-stack developer👋🏼
					</h1>
					<p className='text-center lg:text-left'>
						Hi, I&apos;m Ben Pham, a passionate developer currently studying at
						UCI and based in Santa Clara, California. 📍
					</p>
					<br />
					<br />
					<div className='buttons m-auto lg:m-0 flex flex-row justify-center lg:justify-start gap-2 px-4 lg:px-0'>
						<Link
							download
							href='/BenPhamResume.pdf'
							className='text-sm sm:text-lg rounded-full bg-gray-900 text-white px-4 py-3 flex
              items-center gap-2 hover:scale-110 active:scale-105 hover:bg-gray-950 transition-all'
						>
							Download Resume{" "}
							<HiDownload className='opacity-70 group-hover:translate-y-5 transition' />
						</Link>
						<a
							href='https://www.linkedin.com/in/ben-pham-307a22149/'
							className='bg-white rounded-full p-4 flex items-center gap-2 border border-black/10 text-gray-700 hover:scale-110 cursor-pointer active:scale-105 transition-all'
						>
							<BsLinkedin />
						</a>
						<a
							href='https://github.com/PhamjaminBen'
							className='bg-white rounded-full p-4 flex items-center gap-2 border border-black/10 text-gray-700 hover:scale-110 cursor-pointer active:scale-105 transition-all'
						>
							<FaGithubSquare />
						</a>
					</div>
				</div>
			</div>

			<div
				id='stack'
				className='stack flex flex-col flex-wrap max-w-5xl px-8 pb-24 m-auto lg:flex-row opacity-0 translate-y-5'
			>
				<div className='text-xl font-semibold'>
					<h3 className=' w-fit lg:pr-10 border-black border-solid border-b-2 text-center m-auto pb-2 lg:border-r-2 lg:border-b-0 lg:mr-8 lg:mt-10'>
						Tech Stack
					</h3>
				</div>
				<div id='icons'>
					<ul className='stack-icons flex flex-wrap justify-center space-x-7 space-y-6'>
						<li
							title='HTML5'
							className='rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center translate-y-6'
						>
							<img
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
							/>
						</li>
						<li
							title='CSS'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
							/>
						</li>
						<li
							title='TypeScript'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
							/>
						</li>
						<li
							title='React'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
							/>
						</li>
						<li
							title='tailwind'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042'
							/>
						</li>
						<li
							title='MongoDB'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
							/>
						</li>
						<li
							title='Next.js'
							className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'
						>
							<img
								className='h-10 w-10'
								src='https://www.svgrepo.com/show/354113/nextjs-icon.svg'
							/>
						</li>
					</ul>
				</div>
			</div>
		</motion.section>
	);
}
