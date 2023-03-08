import { TaskBar } from '@/components/TaskBar'
import { topBar } from '@/data/topBar'
import { filesState } from '@/Recoil/files'
import React from 'react'
import { useRecoilState } from 'recoil'
import { motion as m } from 'framer-motion'
import { RiZcoolFill } from 'react-icons/ri'
import FileLister from '@/components/desk/fileLister'

const Desk = () => {
    const [files, setFiles] = useRecoilState(filesState)

    return (
        <div className='absolute top-0 left-0 w-screen h-screen text-white'>
            <TopBar />
            <TaskBar />
            <FileLister files={files} col pt />
        </div>
    )
}

const TopBar = () => {
    return (
        <div className="w-screen h-6 backdrop-blur-sm bg-white/5 flex items-center justify-start 
        px-4 gap-x-5 text-[14px] z-[100] absolute top-0 left-0 text-white">
            <RiZcoolFill size={18} />
            {topBar.map((item, index) => <p key={index}>{item.name}</p>)}
        </div>
    )
}


export default Desk