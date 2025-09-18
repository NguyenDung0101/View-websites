import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Figma",
    "Adobe Creative Suite",
    "Git",
  ]

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Phát triển website hiện đại với công nghệ tiên tiến, tối ưu hiệu suất và trải nghiệm người dùng.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Thiết kế giao diện trực quan, thân thiện với người dùng và phù hợp với thương hiệu.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Tối ưu hóa tốc độ tải trang và hiệu suất website để đạt trải nghiệm tốt nhất.",
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Tư vấn chiến lược phát triển sản phẩm số và giải pháp công nghệ phù hợp.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Passionate web developer với hơn 5 năm kinh nghiệm tạo ra những sản phẩm số chất lượng cao.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Xin chào, tôi là một Web Developer</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Với niềm đam mê về công nghệ và thiết kế, tôi chuyên tạo ra những trải nghiệm web hiện đại, tối ưu và
                thân thiện với người dùng. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, tôi đồng hành cùng khách hàng
                trong suốt quá trình phát triển.
              </p>
              <p>
                Tôi tin rằng một website tốt không chỉ đẹp mắt mà còn phải hoạt động mượt mà, tải nhanh và mang lại giá
                trị thực sự cho người dùng. Mỗi dự án là một cơ hội để tôi học hỏi và áp dụng những công nghệ mới nhất.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
