"use client"

import Link from "next/link"

import { titles } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TypeWriter from "@/components/type-writer"

export default function Page() {
  const title2 = titles.sort(() => Math.random() - 0.5)

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 px-2 sm:container sm:mx-auto">
        <div className="flex h-screen flex-col justify-between px-4 tracking-tight">
          <div className="min-h-[56px] sm:min-h-[72px]"></div>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-10 md:pb-20">

            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  EVA ATTAL
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                  Trading Technology Leader<br />
                  & Former C++ Developer
                </h2>

                <div className="text-lg md:text-xl lg:text-2xl text-purple-600 dark:text-purple-400">
                  <TypeWriter title={title2} />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="dyn">
                  <Link href="/experience">View Experience</Link>
                </Button>
                <Button asChild size="dyn" variant="outline">
                  <Link href="/skills">Technical Skills</Link>
                </Button>
                <Button asChild size="dyn" variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Block 1: Technical Expertise */}
              <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  Technical Expertise
                </h3>
                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Electronic trading & automated market making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Cash equity execution & algorithmic strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Low-latency infrastructure & high-performance systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>C++, market microstructure & system design</span>
                  </li>
                </ul>
              </div>

              {/* Block 2: Leadership & Project Management */}
              <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  Leadership & Project Management
                </h3>
                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Leading cross-functional teams to deliver trading solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Gathering requirements from quants and business stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Coordinating development, QA, and APS teams across multiple sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>Ensuring high-quality, timely delivery of trading solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              Based in Paris, France • Working across Paris and London • Currently employed • Open to select opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
