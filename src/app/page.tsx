"use client"

import Link from "next/link"

import { titles } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TypeWriter from "@/components/type-writer"

export default function Page() {
  const title1 = "Hello, I am Eva ATTAL,"
  const title2 = titles.sort(() => Math.random() - 0.5)

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 px-2 sm:container sm:mx-auto">
        <div className="flex h-screen flex-col justify-between px-4 tracking-tight">
          <div className="min-h-[56px] sm:min-h-[72px]"></div>
          <div className="flex flex-col pb-10 md:pb-20 max-w-5xl">
            <div className="text-xl md:text-3xl lg:text-4xl mb-6 md:mb-8">
              <span>{title1}</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">
                <TypeWriter title={title2} />
              </span>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Senior Project Manager & Quantitative Software Developer
              </h1>

              <div className="text-base md:text-lg lg:text-xl leading-relaxed space-y-4">
                <p>
                  <span className="font-medium text-purple-600 dark:text-purple-400">15+ years of experience</span> in electronic trading, automated market making, and cash equity execution. Expert in leading cross-functional teams, developing high-performance trading systems, and delivering low-latency infrastructure. Strong knowledge of C++, market microstructure, system design, and simulation-to-production strategy alignment. Proven ability to drive innovation, unify teams, and integrate platforms.
                </p>

                <p className="text-muted-foreground">
                  Skilled in end-to-end project management: gathering and analysing requirements from quants and business stakeholders, defining technical deliverables, breaking down tasks, and coordinating development, QA, and APS teams across multiple sites to ensure timely, high-quality delivery of trading solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 py-8 md:py-10">
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
          <div className="pb-4">
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              Based in Paris, France • Open to new opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
