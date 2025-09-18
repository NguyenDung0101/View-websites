"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Added mobile menu state
  const [activeSection, setActiveSection] = useState("home") // Added active section tracking

  const navigationItems = [
    // Centralized navigation items
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors font-medium relative ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <ThemeToggle />
          </div>
        </div>

        <nav
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-border/20">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left transition-colors font-medium py-3 px-2 rounded-lg ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
