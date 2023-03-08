import tasks from '@/data/tasks'
import React, { useState } from 'react'
import { Task } from './Task'
import { motion as m } from 'framer-motion'

export const TaskBar = () => {
    const [openTaskbar, setOpenTaskbar] = useState(false)
    return (
        <>
            <m.div className="absolute bottom-3 w-full z-[100]"
                initial={{ y: '120px' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.2 }}
            >
                <m.div className={`mx-auto bottom-0 w-max bg- h-[80px] rounded-full p-2 flex items-center justify-center gap-2 bg-primary-gray transition-all`}
                    onHoverStart={() => setOpenTaskbar(true)}
                    onHoverEnd={() => setOpenTaskbar(false)}
                >
                    {tasks.map((item, index) => <Task key={index} {...item} />
                    )}
                </m.div>
            </m.div>
            {/* <m.div className='absolute bottom-5 w-full flex flex-col items-center justify-center cursor-pointer'
                onClick={() => setOpenTaskbar(true)}
                onTap={() => setOpenTaskbar(true)}
                onHoverEnd={() => setOpenTaskbar(false)}
            >
                <m.div className='text-white mx-auto opacity-40'
                    transition={{ duration: 0.3 }}
                    animate={{ marginBottom: [5, 0, 3, 0, 5], transition: { repeat: Infinity, duration: 1.4, bounce: 5, type: 'spring' } }}
                >Tap Here</m.div>
                <m.div className='h-2 w-20 bg-blue-500 rounded-full shadow-lg cursor-pointer mx-auto'
                    animate={{ y: [5, 0, 3, 0, 5], transition: { repeat: Infinity, duration: 1.4, bounce: 5, type: 'spring' } }}

                />
            </m.div> */}
        </>
    )
}
