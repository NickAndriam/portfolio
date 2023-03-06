import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import avatar from '../public/assets/images/avatar.png'
import socials from '@/data/socials'
import { TextWithMovingBox } from './animation/TextWithMovingBox'
import { useRouter } from 'next/router'

export const Avatar = ({ open, onOpen, onClose }) => {
    const router = useRouter()
    return (
        <>
            <div className={`absolute lg:top-10 lg:right-10 top-5 right-8 cursor-pointer text-white
            flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center gap-3 
            ${router.asPath !== '/' ? 'hidden' : 'flex'}`}
                onClick={onOpen}>
                {/* <AiOutlineMenu className='text-white' size={40} /> */}
                <TextWithMovingBox text="Nick" delay={1.8} textColor="text-gray-500" bg='bg-primary-gray' />
                <m.div className='relative lg:w-24 lg:h-24 md:w-24 md:h-24 w-20 h-20 bg-gradient-to-b from-cyan-400 to-blue-800 rounded-full mx-auto overflow-hidden
                shadow-lg border hover:border-2 border-blue-500 transition-border'
                    layout
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 2.4 } }}
                    whileTap={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <Image src={avatar} alt="Nick" layout='fill' objectFit='cover' />
                </m.div>
            </div>
            <m.aside className='absolute top-[50%] translate-y-[-50%] left-[50%] -translate-x-[50%] bg-black/[30px] backdrop-blur-lg w-[100%] h-[100%]
            flex justify-center items-center transition-all'
                initial={{ zIndex: -1 }}
                animate={{ zIndex: open ? 1 : -1 }}
                onClick={onClose}
            >
                {/* <div className='bg-primary-gray hover:bg-primary-blue w-min p-4 rounded-full m-4 cursor-pointer' onClick={onClose}>
                    <IoIosArrowForward size={25} className=" bg-clip-text text-white" />
                </div> */}
                <div className='mx-auto'>
                    <m.div className='relative w-36 h-36 bg-gradient-to-b from-cyan-400 to-blue-800 rounded-full mx-auto overflow-hidden
                shadow-lg border hover:border-2 border-blue-500 transition-border'
                    >
                        <Image src={avatar} alt="Nick" layout='fill' objectFit='cover' />
                    </m.div>
                    <p className='prism text-white text-center text-4xl py-4'>Nick Andriam</p>
                    <div className='flex items-center justify-center gap-x-2'>
                        {socials.map((item, index) => {
                            return (
                                <div key={index}
                                    className="w-10 h-10 bg-primary-gray hover:bg-primary-blue rounded-full grid place-items-center cursor-pointer"
                                >
                                    {item.icon}
                                </div>
                            )
                        })}
                    </div>
                    <div className='m-2 my-5 p-4  flex flex-col items-center justify-center'>
                        <p className='mark-script text-transparent text-3xl opacity-90 text-center bg-clip-text bg-gradient-to-r from-white to-gray-100'>
                            “The secret of getting ahead is getting started.”
                        </p>
                        <p className='mark-script text-white/80 text-2xl mt-2'>
                            —Mark Twain—
                        </p>
                    </div>
                </div>
            </m.aside>
        </>
    )
}
