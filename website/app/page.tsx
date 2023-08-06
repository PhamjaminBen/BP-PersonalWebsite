"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export default function Home() {
	useEffect(() => {
		let chars = document.querySelectorAll(".icon");

		for (let i = 0; i < chars.length; i++) {
			chars[i].classList.add("translate-y-full");
			chars[i].classList.add("opacity-0");
		}

		setTimeout(() => {
			gsap.to(".icon", {
				y: 0,
				opacity: 1,
				stagger: 0.1,
				delay: 0.1,
				duration: 0.5,
			});
		}, 300);

		setTimeout(() => {
			gsap.to("#aboutTitle", {
				y: 0,
				opacity: 1,
				duration: 1.0,
			});
		}, 0);

		setTimeout(() => {
			gsap.to("#portrait", {
				x: 0,
				opacity: 1,
				duration: 1.0,
			});
			gsap.to("#bio", {
				x: 0,
				opacity: 1,
				duration: 1.0,
			});
		}, 0);

		setTimeout(() => {
			gsap.to("#skills", {
				y: 0,
				opacity: 1,
				duration: 1,
			});
		}, 300);
	});
	return (
		<>
			<main className='m-auto  pt-40 pb-36'>
				<div className='content max-w-5xl m-auto px-8'>
					<div className='flex flex-col  content-center space-y-12 pb-16 lg:flex-row lg:pb-32 lg:space-x-40 lg:space-y-0'>
						<Image
							id='portrait'
							src={"/images/portrait.jpeg"}
							alt='portrait'
							width={500}
							height={500}
							className='m-auto -translate-x-96 opacity-0 overflow-hidden rounded-full h-64 w-64 lg:w-3/5 lg:h-3/5'
						/>
						<div
							id='bio'
							className='opacity-0 translate-x-96 text-lg lg:align-top'
						>
							<h1
								className='text-5xl mb-10 font-bold text-center lg:text-left leading-relaxed'
								id='title'
								style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
							>
								Aspiring front-end developer👋🏼
							</h1>
							<p className='text-center lg:text-left'>
								Hi, I&apos;m Ben Pham. A passionate developer currently studying
								at UCI and based in Santa Clara, California. 📍
							</p>
							{/* I am a current student pursuing a bachelors
            in computer science at the University of California, Irvine. I&apos;m an aspiring full-stack 
            developer with a wide range of skills and expertise. 
            I am actively seeking experiences that offer opportunities for professional growth and personal development, 
            allowing me to expand my knowledge and learn new things.
            <br/><br/>
            My goal is to assume leadership roles and collaborate with a team to achieve exceptional
            outcomes. I take pride in my punctuality, ability to meet deadlines, and constant efforts 
            to enhance my presentation and analytical skills in different environments. 
            Being based in the Greater Los Angeles area has provided me with valuable experiences and 
            opportunities for personal growth. I have had the privilege of connecting with 
            like-minded individuals who are also commited to software development,
            which has allowed me to acquire new skills and refine existing ones. 
            In my free time, I find joy in playing volleyball and keeping up with the NBA. */}
							<br />
							<br />
							<div className='buttons m-auto lg:m-0 space-x-4 w-fit'>
								<Link
									target='_blank'
									href='https://drive.google.com/file/d/1jvF4y0G7I-YdKC0CMimVbe-AEDaVjgqP/view?usp=sharing'
								>
									<button className='border-2 border-solid border-black hover:text-white hover:bg-blue-600 px-2 py-1 font-bold'>
										Resume
									</button>
								</Link>
								<Link href='/projects'>
									<button className=' border-2 border-solid border-black hover:text-white hover:bg-blue-600 px-2 py-1 font-bold'>
										Projects
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div
						id='skills'
						className='skills flex flex-col flex-wrap lg:flex-row opacity-0 translate-y-5'
					>
						<div className='text-xl font-semibold'>
							<h3 className=' w-fit lg:pr-10 border-black border-solid border-b-2 text-center m-auto pb-2 lg:border-r-2 lg:border-b-0 lg:mr-8 lg:mt-10'>
								Tech Stack
							</h3>
						</div>
						<div id='icons'>
							<ul className='stack-icons flex flex-wrap justify-center space-x-7 space-y-6'>
								<li className='rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center translate-y-6'>
									<img
										className='h-10 w-10'
										src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
									/>
								</li>
								<li className='icon rounded-full bg-white shadow-md h-16 w-16 flex justify-center items-center'>
									<img
										className='h-10 w-10'
										src='https://www.svgrepo.com/show/354113/nextjs-icon.svg'
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
