import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const titles = [
  "a Senior Project Manager",
  "a Quantitative Software Developer",
  "an Electronic Trading Expert",
  "a Trading Systems Architect",
  "a Low-Latency Infrastructure Specialist",
  "a C++ Expert",
  "a Market Microstructure Specialist",
  "an Algorithmic Trading Strategist",
  "a Cross-Functional Team Leader",
  "a High-Performance Systems Developer",
  "an Automated Market Making Expert",
  "a Cash Equity Execution Specialist",
  "a Problem Solver",
  "a Strategic Thinker",
  "an Innovation Driver",
  "a Platform Integrator",
  "an Endurance Athlete",
  "a Technology Enthusiast",
  "a Diversity Advocate",
  "a Girls Can Code Speaker",
]
