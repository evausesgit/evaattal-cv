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
              <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  15+ years experience in:
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
                    <span>Cross-functional team leadership (8 developers)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-purple-600 dark:text-purple-400">•</span>
                    <span>C++, market microstructure & system design</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Expert in leading cross-functional teams, developing high-performance trading systems, and delivering low-latency infrastructure. Strong knowledge of C++, market microstructure, system design, and simulation-to-production strategy alignment. Proven ability to drive innovation, unify teams, and integrate platforms.
                </p>

                <p className="text-muted-foreground">
                  Skilled in end-to-end project management: gathering and analysing requirements from quants and business stakeholders, defining technical deliverables, breaking down tasks, and coordinating development, QA, and APS teams across multiple sites to ensure timely, high-quality delivery of trading solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              Based in Paris, France • Currently employed • Open to select opportunities • Willing to travel
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
