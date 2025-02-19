'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortfolioContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Naol Mitiku
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Software Engineer specializing in backend development with Django and modern frontend technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="mailto:naolmitiku@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/Naola1" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://sjc.microlink.io/FjUCV.jpeg"
              alt="Naol Mitiku"
              width={300}
              height={300}
              className="rounded-full border-4 border-border"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AoNxbhL3xvpeNluNyeQ0pwCxJGwA5NEVdG9qgE7acY+XtSlT54b6bk+h0R//Z"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">ALX Software Engineering</h3>
              <p className="text-muted-foreground">
                Intensive 12-month program covering full-stack development, system engineering, and DevOps, with a specialized emphasis on backend development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-semibold">English:</span> Professional Proficiency
              </div>
              <div>
                <span className="font-semibold">Amharic:</span> Native
              </div>
              <div>
                <span className="font-semibold">Afan Oromo:</span> Native
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Technical Skills</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Django</Badge>
                    <Badge>Django REST Framework</Badge>
                    <Badge>Python</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PostgreSQL</Badge>
                    <Badge>Stripe API</Badge>
                    <Badge>JWT</Badge>
                    <Badge>Git</Badge>
                    <Badge>Linux</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Render</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Clothing Rental Platform</CardTitle>
              <CardDescription>Full-Stack E-commerce Solution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed end-to-end e-commerce solution handling 100+ daily transactions</li>
                <li>Implemented secure payment processing with Stripe API supporting multiple payment methods</li>
                <li>Created automated notification system with SMTP integration</li>
                <li>Built custom user authentication flow with email verification</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Clinic Management System</CardTitle>
              <CardDescription>Healthcare Management Solution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Django REST Framework</Badge>
                <Badge variant="secondary">JWT</Badge>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed clinic management solution serving 50+ simulated users</li>
                <li>Implemented JWT authentication for secure user sessions</li>
                <li>Created patient record management system with appointment tracking</li>
                <li>Integrated RESTful APIs supporting CRUD operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="mailto:naolmitiku@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              naolmitiku@gmail.com
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/Naola1" target="_blank">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://www.linkedin.com/in/naol-mitiku-0a48a423b/" target="_blank">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}