import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  const experiences = [
    {
      title: "Head of Cash Equity Algorithmic Trading Technology EMEA",
      company: "BNP Paribas Arbitrage",
      location: "London, Paris",
      period: "Jan 2023 – Present",
      responsibilities: [
        "Leading development of the electronic trading framework and algorithmic strategies",
        "Managing a team of 8 developers while coordinating closely with quants, QA, market access, APS, and TCA reporting teams",
        "Overseeing rationalisation, BAU, and stabilisation of algo development in EMEA",
        "Integrating Smart Order Router (SOR) capabilities, providing access to a broad pool of liquidity including dark pools, periodic auctions, AQUIS MAC, as well as traditional LIT markets and MTFs",
        "Managing the complete Book of Work (BoW) for the algorithmic trading platform ensuring delivery alignment across development, QA, and production support",
        "Framework comprising C++ and Java components, leveraging Oracle and PostgreSQL databases, FIX connectivity, internalization capabilities, and low-latency trading modules"
      ]
    },
    {
      title: "Project Manager – Automated Market Making",
      company: "BNP Paribas Arbitrage",
      location: "Paris",
      period: "Oct 2017 – Dec 2022",
      responsibilities: [
        "Delivered infrastructure for liquidity provision and stat arb across asset classes as stocks and futures",
        "Led release and deployment processes and drove continuous improvement",
        "Developed low-latency alpha boxes and quantitative tools for microstructure indicators",
        "Supported and enhanced liquidity provision strategies",
        "Managed 3 devs to implemented optimized, scalable solutions and supervised 8 developers to resolve production issues and roll out enhancements"
      ]
    },
    {
      title: "Senior Quant Developer / Strategist",
      company: "BNP Paribas Arbitrage",
      location: "Paris",
      period: "Jan 2014 – Oct 2017",
      responsibilities: [
        "Built and deployed trading automatons and optimizers with quant traders",
        "Focused on robust development, debugging, unit testing, and version control"
      ]
    },
    {
      title: "Algorithmic Trading Strategist",
      company: "BNP Paribas Arbitrage",
      location: "Paris",
      period: "Jun 2008 – Dec 2013",
      responsibilities: [
        "Developed HFT and market-making systems across European markets",
        "Built risk-optimized baskets, mega books, and latency-sensitive applications",
        "Gained hands-on experience with Eurex, Xetra, Euronext, Liffe, and MTFs"
      ]
    },
    {
      title: "IT Support – Algo Trading",
      company: "BNP Paribas Arbitrage",
      location: "Paris",
      period: "Oct 2003 – Jun 2007",
      responsibilities: [
        "Provided platform maintenance and trade reconciliation",
        "Developed understanding of equity/derivatives trading environments"
      ]
    }
  ]

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">Professional Experience</h1>
      <p className="text-lg mb-8 text-muted-foreground">15+ years in electronic trading and algorithmic systems</p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-purple-600 dark:border-purple-400 pl-6 pb-6">
            <h2 className="text-2xl font-semibold mb-1 md:text-3xl">{exp.title}</h2>
            <p className="text-lg text-purple-600 dark:text-purple-400 mb-1">{exp.company} | {exp.location}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-base leading-relaxed">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="py-8">
        <Button asChild size="dyn">
          <Link href="/skills">View Technical Skills</Link>
        </Button>
      </div>
    </div>
  )
}
