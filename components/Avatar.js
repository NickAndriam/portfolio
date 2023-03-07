import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { delay, motion as m } from 'framer-motion'
import Image from 'next/image'
import avatar from '../public/assets/images/avatar.png'
import socials from '@/data/socials'
import { TextWithMovingBox } from './animation/TextWithMovingBox'
import { useRouter } from 'next/router'


export const Avatar = ({ open, onOpen, onClose }) => {
    const { asPath } = useRouter()
    return (
        <>
            <m.div className={`absolute lg:top-9 lg:right-24 md:top-4 md:right-20 top-16 right-7 cursor-pointer text-white
            flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center gap-3`}
                onClick={onOpen}
                animate={asPath !== '/' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ easings: 0.5 }}
            >
                <div className='lg:flex md:flex hidden'>
                    <TextWithMovingBox
                        text="Dev."
                        text2="Nick"
                        textColor="text-gray-500"
                        textOneSize='lg:text-[18px] md:text-[18px] text-[12px]'
                        textTwoSize='lg:text-[18px] md:text-[18px] text-[12px]'
                        bg='bg-primary'
                        delay={2} />
                </div>
                <m.div className='relative lg:w-12 lg:h-12 md:w-12 md:h-12 w-12 h-12 rounded-full mx-auto overflow-hidden
                 border hover:border-2 hover:scale-105 scale-100 shadow-inner border-blue-500 transition-all '
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 2.2, duration: 0.3, ease: "circIn" } }}
                    whileTap={{ scale: 1 }}
                >
                    <Image src={avatar} alt="Nick" width={1280} height={800} />
                </m.div>
            </m.div>
            <m.aside className='absolute top-[50%] translate-y-[-50%] left-[50%] -translate-x-[50%] w-[100%] h-[100%]
            flex justify-center items-center transition-all backdrop-blur-2xl'
                initial={{ zIndex: -1 }}
                animate={{
                    zIndex: open ? 1 : -1, backdropFilter: open ? 'blur(60px)' : 'blur(0px)',
                    transition: { duration: 0.1, ease: "easeIn" }
                }}
                onClick={onClose}
            >
                <m.div className='mx-auto -mt-40'
                    animate={{ opacity: open ? 1 : 0, transition: { duration: 0.2 } }}
                >
                    <m.div className='relative w-36 h-36 bg-gradient-to-b from-cyan-400 to-blue-800 rounded-full mx-auto overflow-hidden
                shadow-lg border hover:border-2 border-blue-500 transition-border'>
                        <Image src={avatar} alt="Nick" width={1280} height={800} />
                    </m.div>
                    <m.p className=' shantell text-white text-center text-4xl py-4'>Nick Andriam</m.p>
                    <m.div className='flex items-center justify-center gap-x-2'>
                        {socials.map((item, index) => {
                            return (
                                <div key={index}
                                    className="w-10 h-10 bg-primary-gray hover:bg-primary-blue rounded-full grid place-items-center cursor-pointer"
                                >
                                    {item.icon}
                                </div>
                            )
                        })}
                    </m.div>
                    <m.div className='m-2 my-5 p-4  flex flex-col items-center justify-center'>
                        <p className='mark-script text-transparent text-3xl opacity-90 text-center bg-clip-text bg-gradient-to-r from-white to-gray-100'>
                            “The secret of getting ahead is getting started.”
                        </p>
                        <p className='mark-script text-white/80 text-2xl mt-2'>
                            —Mark Twain—
                        </p>
                    </m.div>
                </m.div>
            </m.aside>
        </>
    )
}
