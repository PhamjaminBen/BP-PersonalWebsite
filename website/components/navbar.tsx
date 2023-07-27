import Link from "next/link"
export default function NavBar() {
  return (
    <nav className="bg-white text-black font-semibold px-4 py-5 text-lg lg:px-12 w-full shadow-md">
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="font-extrabold hover:underline text-xl">Ben.dev</Link>
        </li>
        <li className="ml-auto">
          <Link href="/projects" className="hover:underline">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
  </nav>
  )
}