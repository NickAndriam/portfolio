import React, { useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { IoIosClose } from 'react-icons/io'
import { BiExpandHorizontal } from 'react-icons/bi'
import { CircleButton } from '@/components/Button/CircleButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { useRouter } from 'next/router'


const OpenedTask = (
    { open = false,
        info,
        onClose,
        position,
        icon
    }
) => {
    const router = useRouter()
    const dim = useWindowDimensions()
    const [isExpanded, setExpanded] = useState(false)
    const pos = position
    return (
        <>
            <AnimatePresence mode='wait'>
                {open &&
                    <m.div className={`absolute bg-primary-gray backdrop-blur-sm flex flex-row overflow-hidden pt-10 shadow-lg z-40`}
                        initial={{
                            opacity: 0.2,
                            top: pos?.y || '100%',
                            left: pos?.x || '45%',
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            translateX: '0%',
                            width: 70,
                            height: 70
                        }}
                        animate={{
                            opacity: 1,
                            top: 10,
                            translateX: '-50%',
                            left: '50%',
                            height: '92%',
                            width: dim.width < 830 ? '95%' : isExpanded ? '98%' : '80%',
                            borderRadius: 20,
                            zIndex: 100,
                            transition: {
                                duration: 0.4,
                                easings: [0.5, 0.71, 1, 1.5]
                            }
                        }}
                        exit={{
                            opacity: 0,
                            top: pos?.y || 0,
                            left: pos?.x || 0,
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                        }}
                    >
                        <div className='flex w-max gap-1 absolute top-4 right-4 rounded-full'>
                            <CircleButton color='bg-green-500' className="-rotate-45 text-gray-900" icon={<BiExpandHorizontal />} onAction={() => setExpanded(!isExpanded)} />
                            <CircleButton color='bg-red-500' icon={<IoIosClose />} onAction={() => onClose()} />
                        </div>

                        <div className='flex lg:flex-row flex-col p-4'>
                            <div className='flex lg:flex-col lg:items-center items-start justify-start lg:gap-y-10 lg:pt-24 p-5 '>
                                <m.ul className='w-max text-white p-4 -mt-10 font-bold lg:text-[100px] text-[60px] flex flex-col'
                                >
                                    {info?.name?.split(" ").map((item, index) => {
                                        return (<li
                                            key={index}
                                            className={
                                                `w-auto h-min
                                    ${index === 0 && 'opacity-[0.4]'}
                                    ${index === 1 && 'lg:text-[100px] text-[80px] -z-10 lg:-mt-24 -mt-16'}`
                                            }
                                        >{item}</li>)
                                    })}
                                </m.ul>
                                <div className='text-white text-[120px] w-full text-center lg:flex md:flex lg:items-center items-center lg:justify-center justify-end hidden'>
                                    {icon}
                                </div>
                            </div>
                            <m.ol className='w-full h-full bg-primary p-5 lg:p-10 overflow-y-scroll rounded-2xl scrollbar-hide text-primary'
                                variants={container}
                                initial="hidden"
                                animate="show"
                                layout>
                                <m.li variants={item} transition={{ delay: 0.2 }}>
                                    <h2 className='text-blue-500 font-bold text-2xl mb-4'>{info?.content?.title}</h2>
                                </m.li>
                                {info?.content?.text?.map((text, index) => {
                                    return (
                                        <m.li variants={item} key={index} className="mb-2 text-white">
                                            <p>{text}</p>
                                        </m.li>
                                    )
                                })}
                            </m.ol>
                        </div>
                    </m.div>
                }
            </AnimatePresence>
        </>
    )
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

const item = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 }
}

export default OpenedTask