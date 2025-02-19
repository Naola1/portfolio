
'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Github, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Naol Mitiku
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Software Engineer specializing in backend development with Django and modern frontend technologies.
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary">
              <Link href="mailto:naolmitiku@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-primary hover:bg-primary/10">
              <Link href="https://github.com/Naola1" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-md opacity-75" />
          <Image
            src="/api/placeholder/300/300"
            alt="Naol Mitiku"
            width={300}
            height={300}
            className="relative rounded-full border-4 border-background"
            priority
          />
        </div>
      </div>
    </section>
  )
}