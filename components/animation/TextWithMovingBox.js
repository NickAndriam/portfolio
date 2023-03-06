import React from 'react'
import { motion as m } from 'framer-motion'

export const TextWithMovingBox = ({ text, text2, delay = 0.2, bg = "bg-primary-blue", textColor = "text-white" }) => {
    return (
        <m.div className="relative flex items-center justify-center gap-x-4 w-max mx-auto overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3, delay: delay, easings: [0.2, 0.5, 0.2, 0.2] }}
        >
            <m.div className={`absolute top-0 right-0 w-full h-full ${bg}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 0.3, delay: 0.5 + delay, easings: [0.2, 0.5, 0.2, 0.2] }}

            />
            <h2 className={`shantell ${textColor} lg:text-[30px] md:text-[30px] text-[20px] text-center`}>{text}</h2>
            <span className={`shantell lg:text-[40px] md:text-[40px] text-[30px] text-center font-bold
     bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-500`}>{text2 || ''}</span>
        </m.div>
    )
}
