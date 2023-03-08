import BackGroundImages from '@/components/BackGroundImages'
import OpenedTask from '@/components/Tasks/OpenedTask'
import tasks from '@/data/tasks'
import { motion as m } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Menu = () => {
    const [openTask, setOpenTask] = useState(true)
    const router = useRouter()
    const _tasks = tasks.filter(task => task.slug === router.query.menu)[0]
    return (
        <>
            {/* <BackGroundImages delay={0.3} /> */}
            <div className='bg-primary'>
                <OpenedTask
                    open={openTask}
                    info={_tasks}
                    icon={_tasks?.icon}
                    data={tasks}
                    onClose={() => router.push('/')}
                />
            </div>
        </>
    )
}

export default Menu