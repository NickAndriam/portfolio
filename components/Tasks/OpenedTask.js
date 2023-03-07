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
                    <m.div className={`absolute bg-black/5 flex flex-row overflow-hidden lg:pt-10 pt-20 z-50 shadow-glass ${open && 'shadow-white/20'} backdrop-blur-sm`}
                        initial={{
                            opacity: 0,
                            top: pos?.y || '100%',
                            left: pos?.x || '45%',
                            height: 70,
                            width: 70,
                            translateX: '0%',
                            width: 200,
                            height: 200,
                        }}
                        animate={{
                            opacity: [1, 0.5, 1],
                            top: '50%',
                            y: '-50%',
                            translateX: '-50%',
                            left: '50%',
                            height: isExpanded ? '100%' : '96%',
                            width: dim.width < 830 ? '100%' : isExpanded ? '100%' : '80%',
                            borderRadius: 15,
                            zIndex: 100,
                            transition: {
                                duration: 0.35,
                                ease: "easeInOut"
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
                        <div className='flex w-max gap-2 absolute top-4 right-4 rounded-full'>
                            <CircleButton color='bg-green-500' className="-rotate-45 text-gray-900" icon={<BiExpandHorizontal />} onAction={() => setExpanded(!isExpanded)} />
                            <CircleButton color='bg-red-500' icon={<IoIosClose />} onAction={() => onClose()} />
                        </div>

                        <div className='flex lg:flex-row flex-col p-4'>
                            <div className='lg:flex-col lg:items-center items-start justify-start lg:gap-y-10 lg:pt-24 p-5 lg:flex md:flex hidden'>
                                <m.ul className='w-max text-white p-4 -mt-10 font-bold lg:text-[100px] text-[60px] flex flex-col '
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
                            <m.ul className='w-full h-full p-5 lg:p-10 overflow-y-scroll rounded-2xl scrollbar-hide bg-black/20 backdrop-blur-2xl'
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
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
                            </m.ul>
                        </div>
                    </m.div>
                }
            </AnimatePresence>
        </>
    )
}

const container = {
    hidden: { opacity: 0, x: 0 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            staggerChildren: 0.2,
        }
    }
}

const item = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 }
}

export default OpenedTask