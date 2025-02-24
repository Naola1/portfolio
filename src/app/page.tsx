'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Code, Terminal, Database, MapPin, Phone, Linkedin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CyberPortfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Naol Mitiku
            </h1>
            <p className="text-2xl text-cyan-400">Full Stack Engineer</p>
            <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            With a strong foundation in Software Engineering, I am passionate 
            about developing efficient, scalable solutions that address 
            business needs.
            I’m excited to use my expertise to build innovative products and contribute to meaningful projects. 
          
            </p>
            <div className="flex justify-center gap-6">
              <Link href="mailto:naolmitiku@gmail.com">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                  <Mail className="mr-2" /> Contact
                </Button>
              </Link>
              <Link href="https://github.com/Naola1" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-cyan-500 text-cyan-500">
                  <Github className="mr-2" /> GitHub
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Bio Section */}
        <section className="py-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="p-8 bg-black/50 backdrop-blur border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-cyan-300 leading-relaxed">
                Passionate Full Stack Developer with intensive 12-month training in comprehensive software development. 
                Specialized in backend development 
                Committed to creating scalable, efficient solutions that drive business value through technology.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-cyan-500/10 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Education</h3>
                  <p className="text-cyan-300">ALX Software Engineering</p>
                  <p className="text-cyan-400">2024 - 2025</p>
                </div>
                <div className="p-4 bg-cyan-500/10 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Specialization</h3>
                  <p className="text-cyan-300">Backend Development</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Technical Skills */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Code, 
                  title: 'Languages', 
                  skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'] 
                },
                { 
                  icon: Terminal, 
                  title: 'Frameworks', 
                  skills: ['Django', 'Django REST Framework', 'React', 'Tailwind CSS', 'Tanstack Query', 'React Hook Form'] 
                },
                { 
                  icon: Database, 
                  title: 'Tools & Technologies', 
                  skills: ['PostgreSQL', 'Git', 'GitHub', 'Docker', 'Stripe API', 'Vercel', 'Render'] 
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-black/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500 transition-colors">
                    <category.icon className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2 text-cyan-300">
                      {category.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Clothing Rental Platform',
                  description: 'Full-stack e-commerce platform featuring robust user authentication, shopping cart functionality, and automated notification system.',
                  tech: ['Django', 'PostgreSQL', 'Stripe API', 'Tailwind CSS', 'HTML5'],
                  features: ['Custom Authentication', 'Email Notifications', 'Rental Extension System', 'Advanced Search & Filtering']
                },
                {
                  title: 'Dental Clinic Management',
                  description: 'Comprehensive healthcare management system designed for appointment scheduling and patient record management.',
                  tech: ['React (TypeScript)', 'Django REST Framework', 'JWT', 'PostgreSQL'],
                  features: ['JWT Authentication', 'Appointment Scheduling', 'Patient Records']
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-black/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500 group transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      {project.features.map(feature => (
                        <div key={feature} className="flex items-center text-cyan-400 mb-2">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact</h2>
            <Card className="p-8 bg-black/50 backdrop-blur border border-cyan-500/20">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>+251 912 887 725</span>
                </div>
                <div className="flex justify-center gap-4">
                  <Link href="mailto:naolmitiku@gmail.com">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                      <Mail className="mr-2" /> Send Message
                    </Button>
                  </Link>
                  <Link href="https://github.com/Naola1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-cyan-500 text-cyan-500">
                      <Github className="mr-2" /> View GitHub
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/naol-mitiku-0a48a423b/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-cyan-500 text-cyan-500">
                      <Linkedin className="mr-2" /> LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}