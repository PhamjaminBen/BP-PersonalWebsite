import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import Project from "@/components/project";

const ProjectsPage = () => {
	return (
		<div id='projects' className='pt-16'>
			<h1 className='text-5xl text-center font-inter font-extrabold pt-5 space-y-5 mb-16'>
				Projects
			</h1>
			<div className='m-auto max-w-5xl gap-y-8 lg:gap-y-16 mb-10 px-5'>
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
