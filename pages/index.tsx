import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
      {/* Experience */}
      {/* Skill */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  )
}
