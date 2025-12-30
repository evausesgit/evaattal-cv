"use client"

import Link from "next/link"

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggler"

export default function Navbar() {
  const links = [
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <div className="sticky top-0 z-50 bg-background">
      <div className="border-b-[1px] border-primary">
        <div className="flex items-center justify-between px-2 py-2 sm:container sm:mx-auto sm:py-4">
          <div>
            <Button asChild variant="link">
              <Link href="/" className="font-bold sm:text-xl">
                Eva ATTAL
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-0 sm:gap-2 md:gap-4">
            {links.map(({ href, label }) => (
              <div key={href}>
                <Button asChild variant="link">
                  <Link href={href}>{label}</Link>
                </Button>
              </div>
            ))}
            <Button asChild variant="ghost" size="icon">
              <Link href="https://www.linkedin.com/in/eva-attal" target="_blank">
                <LinkedInLogoIcon className="scale-125 text-blue-600 dark:text-blue-400" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/evausesgit" target="_blank">
                <GitHubLogoIcon className="scale-125 text-purple-600 dark:text-purple-400" />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
