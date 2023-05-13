import AboutSection from '@/components/AboutSection'
import ContactMe from '@/components/ContactMe'
import EducationSection from '@/components/EducationSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import WorkExperience from '@/components/WorkExperience'
import { loadStaticProps } from "@/lib/loadStaticProps"
import { Education, Experience, PageInfo, Project, Skill, Social } from "@/typings"
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { GetStaticProps } from "next"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

type Props = {
  pageInfo: PageInfo,
  education: Education[]
  experiences: Experience[],
  projects: Project[],
  skills: Skill[],
  socials: Social[],
}

export default function Home({pageInfo, education, experiences, projects, skills, socials}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Tiep&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials}/>
      {/* HeroSection */}
      <section id='hero' className='snap-center'>
        <HeroSection pageInfo={pageInfo}/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <AboutSection pageInfo={pageInfo}/>
      </section>
      {/* Education */}
      <section id='education' className='snap-center'>
        <EducationSection education={education}/>
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skill */}
      <section id='skills' className='snap-center'>
        <SkillsSection skills={skills}/>
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <ProjectsSection projects={projects}/>
      </section>
      {/* Contact me */}
      <section id='contact' className='snap-center'>
        <ContactMe pageInfo={pageInfo}/>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = loadStaticProps()
  return props
}
