import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Education from '@/components/Education'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#f7ab0a]/80">
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
      {/* Education */}
      <section id='education' className='snap-center'>
        <Education />
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

      <Link href={'#hero'}>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpIcon className='h-10 w-10 rounded-full filter 
              grayscale hover:grayscale-0 cursor-pointer opacity-5 hover:opacity-100'/>
          </div>
        </footer>
      </Link>
    </div>
  )
}
