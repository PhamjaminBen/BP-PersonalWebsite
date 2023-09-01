"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (senderEmail: string, message: string) => {
	console.log(senderEmail);

	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "ben58630@gmail.com",
		subject: "Message from contact form",
		reply_to: senderEmail,
		text: message,
	});
};
