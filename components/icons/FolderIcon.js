import { elPositionState, foldersState } from '@/Recoil/atoms'
import React from 'react'
import { BsFillFolderFill, BsFolder2Open } from 'react-icons/bs'
import { useRecoilState } from 'recoil'

const FolderIcon = ({ data }) => {
    const [folders, setFolders] = useRecoilState(foldersState)
    const [elPosition, setElPosition] = useRecoilState(elPositionState)

    const onOpeningFolder = (e) => {

        // set starting position of folder
        setElPosition({ x: e.pageX, y: e.pageY })

        // the modified folder to push to main folder list
        let tweakedFolder = { ...data, open: true, zIndex: folders.length + 1 }

        // if folder already exists then dont push otherwise do! 
        const folderExists = folders.find(folder => folder.id === data.id)
        if (folderExists)
            return setFolders((old) => {
                let newFolders = [...old]
                const foundIndex = folders.findIndex(folder => folder.id === data.id)
                newFolders[foundIndex].open = true
                newFolders[foundIndex].zIndex = Math.max(...folders.map(folder => folder.zIndex)) + 1
                return newFolders
            })
        else return setFolders([...folders, tweakedFolder])
    }

    return (
        <>
            {folders[folders?.findIndex(e => e.id === data.id)]?.open ?
                <div className='file'
                    id={data?.id}
                    onClick={onOpeningFolder}>
                    <BsFolder2Open
                        size={60}
                        className={`text-blue-400 pointer-events-none`}
                    />
                </div>
                :
                <div className='file'
                    id={data?.id}
                    onClick={onOpeningFolder}>
                    <BsFillFolderFill
                        size={60}
                        className={`text-blue-400 pointer-events-none`}
                    />
                </div>
            }
        </>
    )
}

export default FolderIcon