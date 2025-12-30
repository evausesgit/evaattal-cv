import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons"

export default function Page() {
  return (
    <div className="py-8 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">Get in Touch</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          I&apos;m always open to discussing new opportunities, collaborations, or just connecting with fellow tech enthusiasts.
        </p>

        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
            <EnvelopeClosedIcon className="w-6 h-6 mt-1 text-purple-600 dark:text-purple-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Email</h2>
              <a href="mailto:eva.attal@gmail.com" className="text-lg hover:underline">
                eva.attal@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
            <LinkedInLogoIcon className="w-6 h-6 mt-1 text-purple-600 dark:text-purple-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/eva-attal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                linkedin.com/in/eva-attal
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
            <GitHubLogoIcon className="w-6 h-6 mt-1 text-purple-600 dark:text-purple-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">GitHub</h2>
              <a
                href="https://github.com/evausesgit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                github.com/evausesgit
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-border rounded-lg">
            <HomeIcon className="w-6 h-6 mt-1 text-purple-600 dark:text-purple-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Location</h2>
              <p className="text-lg">Paris, France</p>
              <p className="text-muted-foreground">5 rue de Rémusat, 75016</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button asChild size="dyn">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild size="dyn" variant="outline">
            <Link href="/experience">View Experience</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
