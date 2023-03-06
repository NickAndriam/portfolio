import { motion } from 'framer-motion'
import React, { useState } from 'react'

export const ExpendableCard = () => {
    const [open, setOpen] = useState(false)
    return (
        <motion.div className={`w-full h-auto bg-white mx-auto rounded-xl overflow-hidden flex space-around`}
            layout
            onClick={() => setOpen(!open)}>
            <div className='w-[5rem] h-full bg-blue-500' />
            <motion.div layout="position" className='flex flex-col items-left justify-center ml-4'>
                <h1 className='text-2xl text-blue-500 font-bold mb-4'>Title</h1>
                {open && <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}</p>}
            </motion.div>
        </motion.div>
    )
}
