"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/lib/sendemail";

export default function Contact() {
	const { ref, inView } = useInView({
		threshold: 0.75,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Contact");
		}
	}, [inView, setActiveSection]);

	const [senderEmail, setSenderEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<motion.section
			ref={ref}
			id='contact'
			className='pt-16 scroll-mt-24 flex-col items-center justify-center max-w-3xl p-5 m-auto'
		>
			<h1 className='text-5xl text-center font-extrabold pt-5 m-10'>Contact</h1>
			<p className='text-center'>
				You can contact me directly at{" "}
				<a className='underline' href='mailto:bendmpham@gmail.com'>
					bendmpham@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form className=' mt-10' onSubmit={() => sendEmail(senderEmail, message)}>
				<input
					type='email'
					className='w-full rounded-xl border border-black/10 h-14 p-4'
					placeholder='Your Email'
					content={senderEmail}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
				<textarea
					className='w-full rounded-xl border border-black/10 h-52 my-3 p-4'
					placeholder='Your Message'
					content={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					maxLength={500}
				/>
				<button
					type='submit'
					className='flex items-center p-4 rounded-full border bg-slate-900 border-black/10 text-white hover:scale-110 cursor-pointer active:scale-105 transition-all'
				>
					Submit <FaPaperPlane className='ml-2' />
				</button>
			</form>
		</motion.section>
	);
}
