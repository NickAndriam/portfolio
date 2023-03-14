import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { motion as m } from 'framer-motion'
import { useRouter } from 'next/router'
import tasks from '@/data/tasks'
import { elPositionState, sideBarState } from '@/Recoil/atoms'
import { useRecoilState } from 'recoil';

export const SideBar = () => {
    const [_sideBarState, setSideBarState] = useRecoilState(sideBarState)
    const [elPosition, setElPosition] = useRecoilState(elPositionState)
    const router = useRouter()
    return (
        <>
            <div className={`absolute lg:top-10 lg:right-10 top-5 right-8 cursor-pointer text-white
            flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center gap-3 
            ${router.asPath !== '/' ? 'lg:hidden flex' : 'flex'}
            `}
                onClick={() => setSideBarState(true)}>
                <AiOutlineMenu className='text-white' size={40} />
            </div>
            <m.aside className='absolute top-0 right-0 bg-primary w-[120px] h-full'
                initial={{ x: '100%' }}
                animate={{ x: _sideBarState ? '0%' : '100%' }}
                transition={{ easings: [1.2, 0.7, 0.5, 1] }}
            >
                <div className='bg-primary hover:bg-primary-blue w-min p-4 rounded-full m-4 cursor-pointer' onClick={() => setSideBarState(false)}>
                    <IoIosArrowForward size={25} className=" bg-clip-text text-white" />
                </div>
                <m.ul className='h-screen gap-4 flex flex-col items-center justify-start p-2'
                    variants={leftContainer}>
                    {tasks.map((data, index) => {
                        const isCurrentPath = router.asPath === `/${data.slug}`
                        return (
                            <m.li key={index} className={`flex flex-col items-center justify-center gap-y-2
                            text-white p-2 rounded-2xl shadow-2xl cursor-pointer hover:bg-primary-blue
                            w-[100%]
                            ${isCurrentPath ? 'bg-primary-blue' : 'bg-primary'}
                            `}
                                onClick={() => { router.push(`/${data.slug}`), setSideBarState(false) }}
                                transition={{ duration: 0.1 }}
                                animate={{ width: '100%' }}
                                variants={leftItem}
                                onMouseOver={(e) => setElPosition({ x: e.pageX, y: e.pageY })}

                            >
                                <div className='text-[50px]'>
                                    {data.icon}
                                </div>
                                <p className='w-max text-[12px] text-center'>
                                    {data.name}
                                </p>
                            </m.li>
                        )
                    })}
                </m.ul>
            </m.aside>
        </>
    )
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
