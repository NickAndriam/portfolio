import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimension'

export const Card = ({ title, subtitle, index }) => {
    const [animate, setAnimate] = useState(false)
    const ref = useRef(null)
    const [rect, setRect] = useState({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
    })
    const wd = useWindowDimensions()

    const style = `relative h-40 w-[20rem] bg-gray-200 rounded-lg shadow-sm mx-auto overflow-hidden
    flex space-around p-2 shadow-lg border border-blue-500 cursor-pointer`



    const onAnimating = (e) => {

        setAnimate(!animate)
        setRect(ref.current.getBoundingClientRect())
    }
    const getAnimation = (e) => {
        setRect(ref.current.getBoundingClientRect())
    }

    console.log(rect)


    const ToAnimate = ({ children }) => {
        const animateCard = {
            initial: {
                opacity: 0,
            },
            animate: {
                opacity: animate ? 1 : [1, 1, 0],
                position: 'absolute',
                zIndex: animate ? 100 : 0,
                top: animate ? [rect.top, rect.top, 0] : [0, rect.top, rect?.top],
                bottom: animate ? [rect.bottom, rect.bottom, 0] : [0, rect.bottom, rect?.bottom],
                left: animate ? [rect.left, rect.left, 0] : [0, rect?.left, rect.left],
                right: animate ? [rect.right, rect.right, 0] : [0, rect?.right, rect.right],
                width: animate ? [rect?.width, rect?.width, wd.width] : [wd.width, rect.width, rect?.width],
                height: animate ? [rect?.height, rect?.height, wd.height] : [wd.height, rect.height, rect?.height],
                transition: {
                    // duration: 0.6,
                }
            },
        }

        return (
            <motion.div
                variants={animateCard}
                animate="animate"
                initial="initial"
                exit="exit"
                layout
                className={`${style} z-100`}
            >
                {children}
                <p className='absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white'
                    onClick={() => setAnimate(false)}>
                </p>
            </motion.div>
        )
    }

    const Children = () => {
        return (
            <>
                <aside className='bg-blue-500 w-[80%] h-full rounded-lg my-auto' />

                <aside className='flex flex-col w-[100%] h-full items-left justify-center ml-3'>
                    <h2 className='text-3xl font-bold text-blue-500'>{title}</h2>
                    <p>{subtitle}</p>
                </aside>
            </>
        )
    }
    return (
        <>
            <motion.div
                key={index}
                className={`${style}`}
                onClick={(e) => onAnimating(e)}
                // onHoverStart={(e) => getAnimation(e)}
                ref={ref}
                animate={animate ? { opacity: 0 } : { opacity: 1 }}
            >
                <Children />
            </motion.div>
            <ToAnimate><Children /></ToAnimate>
        </>
    )

}

