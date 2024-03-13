import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
      <header className="w-full py-4">
        <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
          <nav className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase" href="#">
              <HomeIcon className="h-4 w-4"/>
              Home
            </Link>
            <Link className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase" href="#">
              <InfoIcon className="h-4 w-4"/>
              About
            </Link>
            <Link className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase" href="#">
              <ProjectorIcon className="h-4 w-4"/>
              Projects
            </Link>
            <Link className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase" href="#">
              <ContactIcon className="h-4 w-4"/>
              Contact
            </Link>
          </nav>
        </div>
        <main className="w-full py-6">
          <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 lg:gap-16 xl:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed/none">
                Academic Excellence
              </h1>
              <p className="inline text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">@vinibilck</p>
              <img alt="Profile Photo" className="rounded-lg object-cover h-80 w-90 mx-auto" src="/placeholder.svg"/>
            </div>
            <div className="mx-auto w-full max-w-3xl space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                 🌌
              </p>
            </div>
          </div>
        </main>
        <div className="border-t border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800"/>
        <section className="w-full py-6">
          <div className="container grid gap-4 px-4 text-center md:gap-10 lg:gap-16 xl:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            </div>
            <div className="mx-auto w-full max-w-3xl space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Editar depois
              </p>
            </div>
          </div>
        </section>
      </header>
  )
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <circle cx="12" cy="10" r="2" />
        <line x1="8" x2="8" y1="2" y2="4" />
        <line x1="16" x2="16" y1="2" y2="4" />
      </svg>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
  )
}


function ProjectorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M5 7 3 5" />
        <path d="M9 6V3" />
        <path d="m13 7 2-2" />
        <circle cx="9" cy="13" r="3" />
        <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
        <path d="M16 16h2" />
      </svg>
  )
}
