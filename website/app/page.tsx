"use client";
import gsap from "gsap";
import { useEffect } from "react";
import ProjectsPage from "@/components/projects";
import Home from "@/components/home";
import Spacer from "@/components/sectionspacer";
import About from "@/components/about";
import { projects } from "@/lib/projects";
import Skills from "@/components/skills";

export default function Page() {
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
			gsap.to("#stack", {
				y: 0,
				opacity: 1,
				duration: 1,
			});
		}, 300);
	});

	return (
		<>
			<main id='main' className='m-auto  pt-40 pb-36'>
				<div className='content w=full m-auto'>
					<Home />
					<div className='bg-white'>
						<About />
					</div>
					<ProjectsPage />
					<Skills />
				</div>
			</main>
		</>
	);
}
