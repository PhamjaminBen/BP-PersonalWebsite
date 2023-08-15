import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import Project from "@/components/project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";

const ProjectsPage = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.div id='projects' className='pt-16 scroll-mt-24' ref={ref}>
			<h1 className='text-5xl text-center font-inter font-extrabold pt-5 space-y-5 mb-28'>
				Projects
			</h1>
			<div className='m-auto max-w-5xl gap-y-8 lg:gap-y-16 mb-10 px-5'>
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</motion.div>
	);
};

export default ProjectsPage;
