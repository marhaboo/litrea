import Link from "next/link"
import { Home, MoveLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-md px-4 text-center">
        <div className="w-24 h-24 mb-8 rounded-full bg-[#E57373] mx-auto flex items-center justify-center">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Page not found</h1>
        <p className="text-base text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-[#E57373] text-[#E57373] hover:bg-[#E57373] hover:text-white transition-colors"
          >
            <MoveLeft className="mr-2 h-4 w-4" />
            Go back
          </Link>
          <Link
            href="/home"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#E57373] text-white hover:bg-[#E57373]/90 transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

