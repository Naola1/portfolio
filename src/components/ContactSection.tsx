'use client'

import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
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
  )
}