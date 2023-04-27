import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        // src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/293779276_5442116262498150_7188562711296550424_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uQzhylPeyq8AX-6ZfJH&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCy1NB8_S20tnOYspfszQmItAcM4veHACXYig-Z7YXNKw&oe=644E930A"
        src="https://media.licdn.com/dms/image/D5603AQEElDgBr4SEPQ/profile-displayphoto-shrink_800_800/0/1674494539241?e=1687996800&v=beta&t=8zjU2VHDerF5FvQaGHTK0ewrRs_FKcYhO21RQE8vy9E"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      >
      </motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Let&apos;s get to know <span className='underline decoration-[#f7ab0a]'>me</span>&nbsp;( ^ ^ )
        </h4>
        <p className='text-base'>
          A young software engineer is looking for new challenges in a professional and dynamic workplace where he can contribute greatly to organizational growth as well as his personal development. 
          Experienced full stack developments and a solid understanding of big data processing methods and machine learning algorithms with a master’s degree in Computer Engineering. 
          Excellent research, time management, computer programming, and problem-solving skills. 
          Highly organized with an ability to manage multiple projects with solid coding, trustworthy software, and reliably meet deadlines. 
          Professional experience with software development tools.
        </p>
      </div>
    </motion.div>
  )
}

export default About