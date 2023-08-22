import Image from "next/image";
import githublogo from "@/public/images/githubicon.png";
import linkedinlogo from "@/public/images/linkedinlogo.png";

export default function Footer() {
	return (
		<section className='text-slate-600 px-4 py-4 text-center'>
			<small>&copy; 2023 Pham. All rights reserved.</small>
			<p>
				<span className='font-bold'>About this website:</span> built with the
				Next.js App router, using Framer Motion, GSAP, TailwindCSS. Hosted by
				Vercel
			</p>
		</section>
	);
}
