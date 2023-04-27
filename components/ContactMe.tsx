import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'


type Props = {}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

function ContactMe({}: Props) {
  const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
  const onSubmit = (values: Inputs) => {
    console.log(values);
    window.location.href = `mailto:vuductiep@gaion.kr?subject=${values.subject}&body=Hi, my name is ${values.name}. ${values.message} (${values.email})`
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact me</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. {" "}
          <span className='decoration-[#f7ab0a]/50 underline'>Let&apos;s talk!</span>
        </h4>
        <div>
          <div className='flex items-center space-x-5 justify-center '>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+82.2.2051.9595</p>
          </div>
          <div className='flex items-center space-x-5 justify-center '>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>vuductiep@gaion.kr</p>
          </div>
          <div className='flex items-center space-x-5 justify-center '>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>대전 유성구 엑스포로 1, 엑스포타워 19층</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className="contactInput" type='text' />
            <input {...register('email')} placeholder='Email' className="contactInput" type="text" />
          </div>
          <input {...register('subject')} placeholder='Subject' className="contactInput" type="text" />
          <textarea {...register('message')} placeholder='Message' className="contactInput" />
          <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe