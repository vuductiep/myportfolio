import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import {PageInfo} from "@/typings";


type Props = {
  pageInfo: PageInfo
}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

function ContactMe({pageInfo}: Props) {
  const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
  const onSubmit = (values: Inputs) => {
    console.log(values);
    window.location.href = `mailto:${pageInfo?.email}}?subject=${values.subject}&body=Hi, my name is ${values.name}. ${values.message} (${values.email})`
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>Contact me</h3>
      <div className='flex flex-col space-y-10'>
        {/*<h4 className='text-4xl font-semibold text-center'>*/}
        {/*  <span className='decoration-[#f7ab0a]/50 underline'>Let&apos;s talk!</span>*/}
        {/*</h4>*/}
        <div>
          <div className='flex items-center space-x-5 justify-center '>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center '>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.email}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center '>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.address}</p>
          </div>
        </div>
        {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-fit mx-auto'> */}
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='flex flex-col gap-2 w-fit mx-auto'>
            <div className='grid grid-cols-2'>
              <input {...register('name')} placeholder='Name' className="contactInput" type='text' />
              <input {...register('email')} placeholder='Email' className="contactInput" type="text" />
            </div>
              <input {...register('subject')} placeholder='Subject' className="contactInput" type="text" />
              <textarea {...register('message')} placeholder='Message' className="contactInput" />
              <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>
                Submit
              </button>
          </div>
        </form>        
      </div>
    </div>
  )
}

export default ContactMe