import { foldersState } from '@/Recoil/atoms'
import { filesState } from '@/Recoil/files'
import React, { useEffect, useState } from 'react'
import { BsFillFolderFill, BsFolderCheck, BsFolder2Open } from 'react-icons/bs'
import { useRecoilState } from 'recoil'

const FolderIcon = ({ data }) => {
    const [folders, setFolders] = useRecoilState(foldersState)
    const [files, setFiles] = useRecoilState(filesState)
    const [currentlyOpened, setCurrentlyOpened] = useState(data.open || false)

    // useEffect(() => {
    //     for (let i = 0; i < folders.length; i++) {
    //         folders[i]?.id == data.id && folders[i].open === true ?
    //             setCurrentlyOpened(true) : setCurrentlyOpened(false)
    //     }
    // }, [folders])

    const onOpeningFolder = () => {
        //if the id of the folder is active then set 'currentlyOpen' to true
        // the folder to push to main folder list
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

    console.log(folders)

    return (
        <>
            {folders[folders?.findIndex(e => e.id === data.id)]?.open ?
                <BsFolder2Open
                    size={62}
                    className={`text-blue-400`}
                    onClick={onOpeningFolder}
                />
                :
                <BsFillFolderFill
                    size={60}
                    className={`text-blue-400`}
                    onClick={onOpeningFolder}
                />
            }
        </>
    )
}

export default FolderIcon