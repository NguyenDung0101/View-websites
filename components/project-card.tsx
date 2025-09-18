import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  name: string
  url: string
  description: string
  image: string
  tags?: string[] // Added optional tags prop
}

export function ProjectCard({ name, url, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-border/50 hover:border-primary/20 rounded-2xl overflow-hidden bg-card">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} website screenshot`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
            {name}
          </h3>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-pretty">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        >
          {url}
        </a>
      </CardContent>
    </Card>
  )
}
