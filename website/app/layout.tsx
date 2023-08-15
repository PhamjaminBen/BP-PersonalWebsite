import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ActionSectionContextProvider from "@/context/active-section-context";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ben Pham | Developer",
	description: "Home page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body
				className={` ${rubik.className} bg-gray-100 flex flex-col min-h-screen text-slate-900`}
			>
				<ActionSectionContextProvider>
					<NavBar />
					<main className='grow py-3 relative'>{children}</main>
					<footer className=' bg-slate-700'>
						<Footer />
					</footer>
				</ActionSectionContextProvider>
			</body>
		</html>
	);
}
