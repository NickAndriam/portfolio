import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import avatar from '../public/assets/images/avatar.png'
import socials from '@/data/socials'
import { TextWithMovingBox } from './animation/TextWithMovingBox'
import { useRouter } from 'next/router'
import tasks from '@/data/tasks'

export const SideBar = ({ open, onOpen, onClose }) => {
    const router = useRouter()
    return (
        <>
            <div className={`absolute lg:top-10 lg:right-10 top-5 right-8 cursor-pointer text-white
            flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center gap-3 
            ${router.asPath !== '/' ? 'lg:hidden flex' : 'flex'}
            `}
                onClick={onOpen}>
                <AiOutlineMenu className='text-white' size={40} />
            </div>
            <m.aside className='absolute top-0 right-0 bg-primary w-[300px] h-full'
                initial={{ x: '100%' }}
                animate={{ x: open ? '0%' : '100%' }}
                transition={{ easings: [1.2, 0.7, 0.5, 1] }}
            >
                <div className='bg-primary hover:bg-primary-blue w-min p-4 rounded-full m-4 cursor-pointer' onClick={onClose}>
                    <IoIosArrowForward size={25} className=" bg-clip-text text-white" />
                </div>
                <div className='h-screen gap-4 gapx-4 flex flex-col'>
                    {tasks.map((data, index) => {
                        const isCurrentPath = router.asPath === `/${data.slug}`
                        return (
                            <m.li key={index} className={`h-[15%] grid grid-cols-[1fr_2fr] place-items-center 
                            text-white p-2 rounded-2xl shadow-2xl cursor-pointer hover:bg-primary-blue
                            ${isCurrentPath ? 'bg-primary-blue' : 'bg-primary'}
                            `}
                                // variants={leftItem}
                                onClick={() => { router.push(`/${data.slug}`), onClose() }}
                                layout
                                transition={{ duration: 0.1 }}
                                animate={{ width: 280 }}
                            >
                                <div className='text-[50px]'>
                                    {data.icon}
                                </div>
                                <p className='w-max text-2xl font-bold'>
                                    {data.name}
                                </p>
                            </m.li>
                        )
                    })}
                </div>
            </m.aside>
        </>
    )
}
