import React from 'react'
import { motion as m } from 'framer-motion'

export const TextWithMovingBox = (
    { text,
        text2,
        textOneSize = 'lg:text-[30px] md:text-[30px] text-[20px]',
        textTwoSize = 'lg:text-[25px] md:text-[25px] text-[20px]',
        delay = 0,
        bg = "bg-primary-blue",
        textColor = "text-white"
    }
) => {
    return (
        <m.div className="relative flex items-center justify-center w-max mx-auto overflow-hidden gap-x-2"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ delay: delay }}
            layout
        // easings: [0.2, 0.5, 0.2, 0.2] 
        >
            <m.div className={`absolute top-0 right-0 w-full h-full ${bg}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 0.4, delay: delay + 0.3, easings: 0.1 }}
            />
            <span className={`shantell ${textColor} ${textOneSize} text-center`}
            >{text || ''}</span>
            <span className={`shantell ${textTwoSize} text-center font-extrabold
     bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-cyan-500`}>{text2 || ''}</span>
        </m.div>
    )
}
