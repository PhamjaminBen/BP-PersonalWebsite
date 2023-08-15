"use client";
import Link from "next/link";
export default function NavBar() {
	return (
		<nav className='bg-white text-black font-semibold text-lg w-full shadow-md'>
			<div id='content' className='max-w-6xl py-5 px-5 m-auto text-lg'>
				<ul className='flex gap-8'>
					<li>
						<button
							onClick={() =>
								document
									.getElementById("main")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className='font-extrabold hover:underline text-xl'
						>
							Ben.dev
						</button>
					</li>
					<li className='ml-auto'>
						<button
							onClick={() =>
								document
									.getElementById("main")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className='hover:underline'
						>
							Home
						</button>
					</li>
					<li>
						<button
							onClick={() =>
								document
									.getElementById("projects")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className='hover:underline'
						>
							Projects
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
