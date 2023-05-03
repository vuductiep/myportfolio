import { CommonDateFormat } from '@/lib/commonConstants';
import { urlFor } from "@/sanity";
import { Education } from "@/typings";
import { format } from 'date-fns';
import { motion } from 'framer-motion';

type Props = {
  education: Education
}

function EducationCard({education}: Props) {
  return (
    <article className='flex flex-col rounded-md items-center bg-[#292929] cursor-pointer my-10'>
      <motion.img
        initial={{y: -50, opacity: 0}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={urlFor(education?.universityImage).url()}
        alt={''}
        // className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        className="h-14 md:h-[100px] md:w-auto xl:h-[150px] xl:w-auto object-cover object-center bg-white rounded-lg"
        // className="h-10 w-auto md:h-[100px] md:w-auto xl:h-[100px] xl:w-auto object-cover object-center bg-slate-50 rounded-sm p-2"
      />
      
      <div className=''>
        <h4 className='text-4xl font-light'>{education?.major}</h4>
        <p className='font-bold text-2xl mt-1'>{education?.degree}</p>
        <p className='font-bold text-2xl mt-1'>{education?.university}</p>
        {/* <div className='flex space-x-2 my-2'> */}
          {/*{experience.technologies.map((tech) => (*/}
          {/*  <img*/}
          {/*    key={tech._id}*/}
          {/*    src={urlFor(tech?.image).url()}*/}
          {/*    className={'h-10 w-10 bg-white'}*/}
          {/*  />*/}
          {/*))}*/}
        {/* </div> */}
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

export default EducationCard