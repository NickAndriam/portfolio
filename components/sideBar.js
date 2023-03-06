import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import avatar from '../public/assets/images/avatar.png'
import socials from '@/data/socials'
import { TextWithMovingBox } from './animation/TextWithMovingBox'
import { useRouter } from 'next/router'

export const SideBar = ({ open, onOpen, onClose }) => {
    const router = useRouter()
    console.log(router)
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
            <m.aside className='absolute top-0 right-0 bg-primary w-[300px] h-full'
                initial={{ x: '100%' }}
                animate={{ x: open ? '0%' : '100%' }}
                transition={{ easings: [1.2, 0.7, 0.5, 1] }}
            >
                <div className='bg-primary-gray hover:bg-primary-blue w-min p-4 rounded-full m-4 cursor-pointer' onClick={onClose}>
                    <IoIosArrowForward size={25} className=" bg-clip-text text-white" />
                </div>
                <div className='mx-auto'>
                    <div className='relative w-36 h-36 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mx-auto overflow-hidden flex items-center justify-center'>
                        <Image src={avatar} alt="Nick" layout='fill' objectFit='cover' />
                    </div>
                    <p className='prism text-white text-center text-2xl py-4'>Nick Andriam</p>
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
                    <div className='m-2 my-10 p-4  flex flex-col items-center justify-center'>
                        <p className='mark-script text-transparent text-2xl opacity-90 text-center bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500'>
                            “The secret of getting ahead is getting started.”
                        </p>
                        <p className='mark-script text-primary-gray text-2xl mt-2'>
                            —Mark Twain—
                        </p>
                    </div>
                </div>
            </m.aside>
        </>
    )
}