"use client"

import Link from "next/link"

import { titles } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TypeWriter from "@/components/type-writer"

export default function Page() {
  const title1 = "Hello, I am Eva ATTAL,"
  const title2 = titles.sort(() => Math.random() - 0.5)
  const title3 = "Senior Project Manager & Quantitative Developer"

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 px-2 sm:container sm:mx-auto">
        <div className="flex h-screen flex-col justify-between px-4 tracking-tight">
          <div className="min-h-[56px] sm:min-h-[72px]"></div>
          <div className="flex flex-col pb-10 md:pb-20">
            <div className="text-2xl md:text-4xl lg:text-5xl">
              <span>{title1}</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">
                <TypeWriter title={title2} />
              </span>
            </div>
            <h1 className="text-4xl font-medium md:text-6xl lg:text-7xl pt-4">
              {title3}
            </h1>
            <div className="flex gap-4 py-6 md:py-8 lg:py-10">
              <Button asChild size="dyn">
                <Link href="/experience">View Experience</Link>
              </Button>
              <Button asChild size="dyn" variant="outline">
                <Link href="/skills">Technical Skills</Link>
              </Button>
            </div>
          </div>
          <div className="pb-4">
            <p className="text-sm md:text-base lg:text-lg">
              15+ years in electronic trading • C++ Expert • Algorithmic Trading Specialist
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
