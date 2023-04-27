import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tiep&apos;s Portfolio</title>
      </Head>
      
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skill */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      {/* Contact me */}
      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>
    </div>
  )
}
