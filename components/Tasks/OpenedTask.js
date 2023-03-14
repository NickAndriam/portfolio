import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { IoIosClose } from 'react-icons/io'
import { BiExpandHorizontal } from 'react-icons/bi'
import { CircleButton } from '@/components/Button/CircleButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { elPositionState } from '@/Recoil/atoms'


const OpenedTask = (
    {
        open = false,
        info,
        onClose,
        data
    }
) => {
    const dim = useWindowDimensions()
    const [isExpanded, setExpanded] = useState(false)
    const [elPosition, setElPosition] = useRecoilState(elPositionState)
    return (
        <>
            {open &&
                <m.div className={`absolute bg-black/5 flex flex-row overflow-hidden lg:pt-10 pt-20 z-50 shadow-glass ${open && 'shadow-white/20'} backdrop-blur-lg
                `}
                    initial={{
                        opacity: 0,
                        height: 20,
                        width: 100,
                        borderRadius: 70,
                        top: elPosition.y || '0%',
                        left: elPosition.x || '0%',
                        scale: 0
                    }}
                    animate={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 1,
                        height: isExpanded ? '100%' : '96%' || dim.width < 830 ? '80%' : '96%',
                        width: dim.width < 830 ? '100%' : isExpanded ? '100%' : '80%',
                        borderRadius: 15,
                        // zIndex: 100,
                        scale: 1,
                        transition: {
                            duration: 0.2,
                            easings: [0.2, 0.3, 0.3, 0.2]
                        }
                    }}
                    exit={{
                        opacity: 0,
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
                        {/* <div className='lg:flex-col lg:items-center items-start justify-start lg:gap-y-10 lg:pt-24 p-5 lg:flex md:flex hidden'>
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
                            </div> */}
                        <m.ul className='lg:flex md:hidden hidden flex-col px-2 gap-5 h-full mr-5'
                            variants={leftContainer}
                            initial="hidden"
                            animate="show">
                            {data?.map((item, index) => (<LeftList key={index} data={item} />))}
                        </m.ul>

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

        </>
    )
}

const LeftList = ({ data }) => {
    const { asPath, push } = useRouter()
    const isCurrentPath = asPath === `/${data.slug}`
    return (
        <m.li className={`h-full grid grid-cols-[1fr_2fr] place-items-center backdrop-blur-lg 
        text-white p-2 rounded-2xl shadow-2xl cursor-pointer hover:bg-primary
        ${isCurrentPath ? 'bg-primary-blue' : 'bg-black/20'}
        `}
            variants={leftItem}
            onClick={() => push(`/${data.slug}`)}
            layout
            transition={{ duration: 0.1 }}
            animate={{ width: isCurrentPath ? 310 : 300 }}

        >
            <div className='text-[50px]'>
                {data.icon}
            </div>
            <p className='w-max text-2xl font-bold'>
                {data.name}
            </p>
        </m.li>
    )
}


const container = {
    hidden: { opacity: 0, x: 0 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            delay: 0.2,
            staggerChildren: 0.2,
            ease: 'easeInOut'
        }
    }
}

const item = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 }
}

const leftContainer = {
    hidden: { opacity: 0, x: 0 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.2,
            staggerChildren: 0.25,
            ease: 'easeInOut'
        }
    }
}

const leftItem = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 }
}

export default OpenedTask