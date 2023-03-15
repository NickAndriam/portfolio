import { TaskBar } from '@/components/TaskBar'
import { topBar } from '@/data/topBar'
import { filesState } from '@/Recoil/files'
import React from 'react'
import { useRecoilState } from 'recoil'
import { motion as m } from 'framer-motion'
import { RiZcoolFill } from 'react-icons/ri'
import FileLister from '@/components/desk/fileLister'
import { contextState, foldersState } from '@/Recoil/atoms'
import { fileContext, mainContext } from '@/data/context'
import ContextDropdown from '@/components/dropdown/ContextDropdown'
import Folder from '@/components/desk/folder'
import Reusables from '@/components/desk/reusables'

const Desk = () => {
    const [files, setFiles] = useRecoilState(filesState)
    const [ddState, setDDState] = useRecoilState(contextState)
    const [folders, setFolders] = useRecoilState(foldersState)


    const onContextMenu = (e) => {
        e.preventDefault()
        // console.log(e)
        const containsTypeFile = e?.target?.className || undefined
        if (containsTypeFile?.includes('file')) {
            setDDState({
                ...ddState,
                open: true,
                position: { x: e.nativeEvent.pageX - 5, y: e.nativeEvent.pageY - 5 },
                list: fileContext
            })
        } else {
            setDDState({
                ...ddState,
                open: true,
                position: { x: e.nativeEvent.pageX - 5, y: e.nativeEvent.pageY - 5 },
                list: mainContext
            })
        }
    }


    return (
        <div className='desk absolute top-0 left-0 w-screen h-screen text-white'
            onContextMenu={onContextMenu}
        >
            <TopBar />
            <TaskBar />
            <FileLister files={files} col pt />
            {
                folders?.map((folder, index) => <Folder key={index} data={folder} index={index} />)
            }
            <ContextDropdown />
            <Reusables />
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