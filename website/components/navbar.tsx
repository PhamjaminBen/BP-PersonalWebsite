import Link from "next/link"
export default function NavBar() {
  return (
    <nav className="bg-gray-500 px-4 py-4 text-lg">
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="text-white hover:underline">Home</Link>
        </li>
        <li className="ml-auto">
          <Link href="/projects" className="text-white hover:underline">Projects</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">About</Link>
        </li>
      </ul>
  </nav>
  )
}