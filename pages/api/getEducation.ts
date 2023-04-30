import type {NextApiRequest, NextApiResponse} from "next"
import groq from "groq";
import {sanityClient} from "@/sanity";
import {Education} from "@/typings";

const query = groq`
  *[_type == "education"]
  `
type Data = {
  educations: Education[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const educations: Education[] = await sanityClient.fetch(query)
  res.status(200).json({educations})
}
