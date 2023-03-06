import React, { useState } from 'react'
import { motion as m } from 'framer-motion'

export const CircleButton = ({ onAction, icon, className, color = "bg-yellow-500" }) => {
    const [hoveredIcon, sethoveredIcon] = useState(false)

    const onClick = () => {
        onAction()
    }
    return (
        <div className={`${color} w-5 h-5 rounded-full flex items-center justify-center text-white cursor-pointer`} onClick={onClick}>
            <m.div
                className={`text-white ${className}`}
                whileTap={{ scale: 0.9 }}
                animate={{ opacity: hoveredIcon ? 1 : 0 }}
                transition={{ duration: 0.05 }}
                onMouseLeave={() => sethoveredIcon(false)}
                onMouseEnter={() => sethoveredIcon(true)}
            >
                {icon}
            </m.div>
        </div>
    )
}
