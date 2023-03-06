import OpenedTask from '@/components/Tasks/OpenedTask'
import tasks from '@/data/tasks'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Menu = () => {
    const [openTask, setOpenTask] = useState(true)
    const router = useRouter()

    const _tasks = tasks.filter(task => task.slug === router.query.menu)[0]
    return (
        <AnimatePresence mode='wait'>
            <div className='bg-primary'>
                <OpenedTask
                    open={openTask}
                    info={_tasks}
                    icon={_tasks?.icon}
                    onClose={() => router.push('/')}
                />
            </div>
        </AnimatePresence>
    )
}

export default Menu