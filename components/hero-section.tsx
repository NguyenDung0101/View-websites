"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Web Developer &<span className="text-primary block">Digital Creator</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Tôi tạo ra những trải nghiệm web hiện đại và chuyên nghiệp, tập trung vào thiết kế sạch sẽ và công nghệ tiên
            tiến.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" onClick={scrollToProjects} className="group">
            Xem Dự Án
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Liên Hệ</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
