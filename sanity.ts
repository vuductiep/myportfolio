import {createClient} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21', // use a UTC date string
  // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
