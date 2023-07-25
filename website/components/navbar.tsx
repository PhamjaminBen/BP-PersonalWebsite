import Link from "next/link"
export default function NavBar() {
  return (
    <nav className="bg-indigo-500 text-white  px-4 py-4 text-lg lg:px-12 w-full">
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li className="ml-auto">
          <Link href="/projects" className="hover:underline">Projects</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
      </ul>
  </nav>
  )
}