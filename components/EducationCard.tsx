import { CommonDateFormat } from '@/lib/commonConstants';
import { urlFor } from "@/sanity";
import { Education } from "@/typings";
import { format } from 'date-fns';
import { motion } from 'framer-motion';

type Props = {
  education: Education
}

function ExperienceCard({education}: Props) {
  return (
    <article className='flex flex-col rounded-md items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 bg-[#292929]
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={urlFor(education?.universityImage).url()}
        alt={''}
        // className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        className="object-cover object-center brightness-200"
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{education?.major}</h4>
        <p className='font-bold text-2xl mt-1'>{education?.degree}</p>
        <p className='font-bold text-2xl mt-1'>{education?.university}</p>
        <div className='flex space-x-2 my-2'>
          {/*{experience.technologies.map((tech) => (*/}
          {/*  <img*/}
          {/*    key={tech._id}*/}
          {/*    src={urlFor(tech?.image).url()}*/}
          {/*    className={'h-10 w-10 bg-white'}*/}
          {/*  />*/}
          {/*))}*/}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {format(new Date(education?.dateStarted), CommonDateFormat)} -{" "}
          {education?.isCurrentlyWorkingHere ? "Present" :
            format(new Date(education?.dateEnded), CommonDateFormat)}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {education?.points.map( (point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard