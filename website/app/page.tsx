"use client";
import gsap from "gsap";
import { useEffect } from "react";
import ProjectsPage from "@/components/projects";
import Profile from "@/components/profile";
import Spacer from "@/components/sectionspacer";
import { projects } from "@/lib/projects";

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
			<main id='main' className='m-auto  pt-40 pb-36'>
				<div className='content max-w-5xl m-auto px-8'>
					<Profile />
					<Spacer />
					<ProjectsPage projects={...projects} />
				</div>
			</main>
		</>
	);
}
