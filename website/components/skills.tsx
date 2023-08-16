"use client";

import React from "react";
import { useEffect } from "react";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { animate, motion } from "framer-motion";

const fadeInAnimationsVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Skills");
		}
	}, [inView, setActiveSection]);
	return (
		<motion.section
			id='skills'
			ref={ref}
			className='mb-28 m-auto max-w-4xl px-8 scroll-mt-28 text-center sm:mb-40 mt-36'
		>
			<h1 className='text-5xl text-center font-inter font-extrabold space-y-5 mb-16'>
				My Skills
			</h1>
			<ul className='flex flex-wrap justify-center gap-2'>
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationsVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
						key={index}
						className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</motion.section>
	);
}
