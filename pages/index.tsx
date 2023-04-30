import AboutSection from '@/components/AboutSection'
import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import {Inter} from 'next/font/google'
import Head from 'next/head'
import ProjectsSection from '@/components/ProjectsSection'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import {ArrowUpIcon} from '@heroicons/react/24/solid'
import EducationSection from '@/components/EducationSection'
import {Education, Experience, PageInfo, Project, Skill, Social} from "@/typings";
import {GetStaticProps} from "next";
import {fetchProjects} from "@/utils/fetchProjects";
import {fetchPageInfo} from "@/utils/fetchPageInfo";
import {fetchExperiences} from "@/utils/fetchExperiences";
import {fetchEducations} from "@/utils/fetchEducation";
import {fetchSkills} from "@/utils/fetchSkills";
import {fetchSocials} from "@/utils/fetchSocials";

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
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
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
        <EducationSection/>
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skill */}
      <section id='skills' className='snap-center'>
        <SkillsSection/>
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <ProjectsSection/>
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
  console.log("fetch data")
  const pageInfo = await fetchPageInfo()
  const experiences = await fetchExperiences()
  const education = await fetchEducations()
  const skills = await fetchSkills()
  const projects = await fetchProjects()
  const socials = await fetchSocials()

  return {
    props: {
      pageInfo,
      education,
      experiences,
      projects,
      skills,
      socials
    },
    revalidate: 10
  }
}
