import React from 'react'
import { motion as m } from 'framer-motion'


const SplittingText = () => {
    return (
        <div className="flex flex-col items-center">
            <Text textNumber={1} text="Full-Stack" />
            <Text textNumber={2} text="Developer" from="right" />
        </div>
    )
}

const Text = ({ textNumber, text = "text", from = 'left' }) => {

    const textOne = `bg-primary-blue font-extrabold lg:text-[100px] md:text-[80px] text-[50px]
    bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 float-left lg:-mt-8 md:-mt-4`

    const textTwo = `lg:flex lg:text-[160px] md:text-[140px] text-[70px] float-right font-extrabold
    bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 lg:-mt-20 md:-mt-20 -mt-8 inline-block`

    return (
        <m.div
            initial={{ x: from === 'left' ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={textTransition}>
            <m.p className={textNumber === 1 ? textOne : textTwo}>{text}</m.p>
        </m.div>
    )
}

const textTransition = { duration: 0.2, easings: [0.2, 0.4, 0.6, 1], delay: 0.8 }


export default SplittingText