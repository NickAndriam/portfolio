import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { IoIosClose } from 'react-icons/io'
import { BiExpandHorizontal } from 'react-icons/bi'
import { CircleButton } from './Button/CircleButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { useRouter } from 'next/router'

export const Task = (props) => {
    const [hovered, setHovered] = useState(false)
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const router = useRouter()
    const menu = `${router.query.menu}`
    const isCurrentMenu = menu === props.slug

    const onClickingIcon = (e) => {
        router.push(`/${props.slug}`)
        isCurrentMenu && router.push('/')
        setOpen(false)
        setPosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div>
            <m.div className={`flex flex-col items-center justify-center ${hovered ? 'mb-6' : 'mb-0'} ${open ? 'mb-6' : 'mb-0'}`}
                onHoverEnd={() => setHovered(false)}
                onHoverStart={() => setHovered(true)}
                animate={{ y: hovered ? -10 : 0 }}
                layout
                onClick={onClickingIcon}
            >
                {hovered && <m.div className='text-white mix-blend-mutiply w-max text-[12px] bg-primary-blue px-1 rounded-full'
                    animate={{ marginBottom: hovered ? 3 : -4 }}
                >{props.name}
                </m.div>}
                <m.div className={`top-0 w-[70px] h-[70px] bg-primary hover:bg-primary-blue border-primary rounded-full flex items-center justify-center text-[30px] text-white shadow-lg `}
                    layout
                    onClick={onClickingIcon}
                >
                    {props.icon}

                </m.div>
                {isCurrentMenu && <p className='bg-blue-500 w-2 h-2 mt-2 rounded-full' />}
            </m.div >
        </div >
    )
}

