import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  const skillCategories = [
    {
      title: "Project Management",
      skills: [
        "Agile/Scrum",
        "Book of Work management",
        "Release & deployment processes",
        "JIRA / Confluence",
        "Requirements analysis",
        "Risk mitigation"
      ]
    },
    {
      title: "Team Leadership",
      skills: [
        "Managing 8 developers",
        "Cross-functional coordination (Dev, QA, APS)",
        "Multi-site team management",
        "Quant & business stakeholder liaison",
        "Technical mentoring",
        "Performance reviews"
      ]
    },
    {
      title: "Languages",
      skills: ["C++", "C", "Python", "Bash"]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "STL", "Templates", "Boost", "CMake", "GCC", "Clang",
        "Git", "Bitbucket", "Jenkins/Teamcity", "Ansible",
        "Onload", "RogueWave", "QT", "redis"
      ]
    },
    {
      title: "Systems",
      skills: [
        "Linux",
        "TCP/UDP networking",
        "Low-latency multi-threading",
        "Memory models"
      ]
    },
    {
      title: "Financial Knowledge",
      skills: [
        "Alpha models",
        "Systematic strategies",
        "Statistical arbitrage",
        "Market microstructure"
      ]
    },
    {
      title: "Software Engineering",
      skills: [
        "Unit testing",
        "CI/CD",
        "Code review"
      ]
    },
    {
      title: "Data",
      skills: [
        "SQL",
        "Pandas",
        "Numpy",
        "Backtesting",
        "Regression models"
      ]
    },
    {
      title: "Trading",
      skills: [
        "Equities, derivatives, ETFs, commodities",
        "Electronic and high-frequency trading",
        "FIX protocol",
        "Financial market microstructure",
        "LIT venues, MTFs, Dark Pools",
        "Periodic auctions",
        "Alternative trading platforms (Aquis MAC)"
      ]
    }
  ]

  const education = {
    school: "Polytech' Paris",
    degree: "Advanced Master of Science, Computer Science"
  }

  const certifications = [
    "Agile Project Management",
    "MOOC – Evolutionary Stochastic Optimization",
    "TOEIC"
  ]

  const languages = ["French", "English", "Hebrew"]

  const projects = [
    {
      title: "Cryptocurrency Trading Framework",
      description: "Built cryptocurrency trading framework"
    },
    {
      title: "Design Productivity Tool",
      description: "Developed design productivity tool for graphic designers"
    },
    {
      title: "Diversity Advocacy",
      description: "Speaker for 'Girls Can Code' (EPITA) and BNP Paribas Diversity programs"
    }
  ]

  const interests = [
    "Endurance Sports: Ironman 70.3, marathons, trail running",
    "Tech & Society: Passionate podcast listener (technology, finance, culture)"
  ]

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">Technical Skills & Expertise</h1>
      <p className="text-lg mb-8 text-muted-foreground">Comprehensive technical background and domain knowledge</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
          <h3 className="text-xl font-semibold">{education.school}</h3>
          <p className="text-muted-foreground">{education.degree}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Certifications & Courses</h2>
        <ul className="list-disc list-inside space-y-2">
          {certifications.map((cert, idx) => (
            <li key={idx} className="text-base">{cert}</li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Languages</h2>
        <div className="flex gap-4">
          {languages.map((lang, idx) => (
            <span
              key={idx}
              className="bg-purple-600 dark:bg-purple-400 text-white dark:text-black px-4 py-2 rounded-lg font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Personal Projects & Advocacy</h2>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Interests</h2>
        <ul className="list-disc list-inside space-y-2">
          {interests.map((interest, idx) => (
            <li key={idx} className="text-base">{interest}</li>
          ))}
        </ul>
      </div>

      <div className="py-4">
        <Button asChild size="dyn">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}
