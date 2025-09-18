"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "Hồ Chí Minh, Việt Nam",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Có ý tưởng dự án mới? Hãy liên hệ với tôi để thảo luận về cách chúng ta có thể biến ý tưởng của bạn thành
            hiện thực.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Gửi tin nhắn</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Họ và tên
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Chủ đề
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Chủ đề tin nhắn"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tin nhắn
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full group">
                  Gửi tin nhắn
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Thông tin liên hệ</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tôi luôn sẵn sàng lắng nghe và thảo luận về các dự án mới. Hãy liên hệ qua bất kỳ kênh nào dưới đây, tôi
                sẽ phản hồi trong vòng 24 giờ.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-foreground">Sẵn sàng nhận dự án mới</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hiện tại tôi đang có thời gian để nhận các dự án mới. Thời gian phản hồi trung bình: 2-4 giờ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
