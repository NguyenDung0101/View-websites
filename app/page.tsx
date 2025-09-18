import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

const projects = [
  {
    name: "MSC Center",
    url: "msc.edu.vn",
    description:
      "Trung tâm giáo dục và đào tạo MSC với giao diện hiện đại, tối ưu trải nghiệm người dùng. Cung cấp thông tin khóa học và dịch vụ giáo dục chất lượng cao.",
    image: "/modern-education-center-website-with-blue-accents.jpg",
    tags: ["Education", "Next.js", "Tailwind CSS"], // Added project tags
  },
  {
    name: "Quỹ FF",
    url: "ffvn.org",
    description:
      "Website chính thức của Quỹ FF Việt Nam, tập trung vào các hoạt động từ thiện và phát triển cộng đồng. Thiết kế chuyên nghiệp với thông tin minh bạch về các dự án.",
    image: "/charity-foundation-website-with-clean-professional.jpg",
    tags: ["Non-profit", "React", "MongoDB"], // Added project tags
  },
  {
    name: "Vietnam Student Marathon",
    url: "vsm.org.vn",
    description:
      "Nền tảng tổ chức giải chạy marathon dành cho sinh viên Việt Nam. Giao diện năng động, dễ sử dụng với tính năng đăng ký và theo dõi sự kiện thể thao.",
    image: "/dynamic-sports-marathon-website-with-energetic-des.jpg",
    tags: ["Sports", "Event Management", "PostgreSQL"], // Added project tags
  },
  {
    name: "Top Best Việt Nam",
    url: "topbest.org.vn",
    description:
      "Website bình chọn và xếp hạng các sản phẩm, dịch vụ tốt nhất Việt Nam. Thiết kế trực quan với hệ thống đánh giá và so sánh chi tiết.",
    image: "/ranking-and-review-website-with-modern-interface.jpg",
    tags: ["Rating Platform", "TypeScript", "Node.js"], // Added project tags
  },
  {
    name: "Sâm Chạy Bộ",
    url: "samchaybo.com",
    description:
      "Cộng đồng chạy bộ Việt Nam với các tính năng theo dõi lộ trình, chia sẻ kinh nghiệm. Giao diện thân thiện khuyến khích lối sống khỏe mạnh.",
    image: "/running-community-website-with-healthy-lifestyle-t.jpg",
    tags: ["Community", "Health & Fitness", "Mobile-first"], // Added project tags
  },
  {
    name: "Profile Mentor",
    url: "phanhuynhanh.com",
    description:
      "Website cá nhân của mentor Phan Huy Nhạnh, chia sẻ kiến thức và kinh nghiệm trong lĩnh vực phát triển sự nghiệp. Thiết kế chuyên nghiệp và dễ tiếp cận.",
    image: "/professional-mentor-personal-website-with-clean-de.jpg",
    tags: ["Personal Brand", "Mentoring", "Content Management"], // Added project tags
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      <AboutSection />

      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Selected Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Tuyển tập các website và trải nghiệm số tôi đã tạo ra, tập trung vào thiết kế sạch sẽ, trải nghiệm người
              dùng và công nghệ hiện đại.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{projects.length}+</div>
                <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                url={project.url}
                description={project.description}
                image={project.image}
                tags={project.tags} // Pass tags to project card
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </div>
  )
}
