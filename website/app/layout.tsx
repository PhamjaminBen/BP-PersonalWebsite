import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ActionSectionContextProvider from "@/context/active-section-context";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
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
				className={` ${roboto.className} bg-gray-100 flex flex-col min-h-screen text-slate-900`}
			>
				<ActionSectionContextProvider>
					<NavBar />
					<main className='grow py-3 relative'>{children}</main>
					<footer>
						<Footer />
					</footer>
				</ActionSectionContextProvider>
			</body>
		</html>
	);
}
