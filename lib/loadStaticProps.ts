import {Education, Experience, PageInfo, Project, Skill, Social} from "@/typings";
import {sanityClient} from "@/sanity";
import groq from "groq";

const educationQuery = groq`
  *[_type == "education"]
  `

const experienceQuery = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
  `

const pageInfoQuery = groq`
  *[_type == "pageInfo"][0]
  `

const projectQuery = groq`
  *[_type == "project"] {
    ...,
    technologies[] ->
  }
  `

const skillQuery = groq`
  *[_type == "skill"]
  `

const socialQuery = groq`
  *[_type == "social"]
  `

export async function loadStaticProps() {
  // Call an external API endpoint to get posts
  const education: Education[] = await sanityClient.fetch(educationQuery)
  const experiences: Experience[] = await sanityClient.fetch(experienceQuery)
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery)
  const projects: Project[] = await sanityClient.fetch(projectQuery)
  const skills: Skill[] = await sanityClient.fetch(skillQuery)
  const socials: Social[] = await sanityClient.fetch(socialQuery)

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