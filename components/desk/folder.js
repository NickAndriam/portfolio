import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { IoIosClose } from 'react-icons/io'
import { BiExpandHorizontal } from 'react-icons/bi'
import { CircleButton } from '@/components/Button/CircleButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import FileLister from './fileLister'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { foldersState } from '@/Recoil/atoms'
import { screenSize } from '@/utils/screenSizes'


const Folder = ({ data, index }) => {
  const dim = useWindowDimensions()
  const [isExpanded, setExpanded] = useState(false)
  const [folders, setFolders] = useRecoilState(foldersState)
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  })


  useEffect(() => {
    if (dim.width <= screenSize.tablet) setPosition({ x: 40 + index * 10, y: 100 + index * 20 })
    // if (dim.width <= screenSize.tablet) setPosition({ x: 50 + index * 20, y: 50 + index * 10 })
    if (dim.width >= screenSize.tablet) setPosition({ x: 200 + index * 30, y: 100 + index * 50 })
  }, [dim, index])




  const folderVariant = {
    hidden: {
      opacity: 0,
      height: 20,
      width: 20,
      borderRadius: 70,
    },
    show: {
      top: position.y,
      left: position.x,
      opacity: 1,
      display: data.open ? 'flex' : 'none',
      height: isExpanded && '100%' && dim.width < 830 ? '40%' : '40%',
      width: isExpanded ? '100%' : '40%' && dim.width < 830 ? '70%' : '40%',
      zIndex: 1000 + data.zIndex,
      borderRadius: 15,
      transition: {
        duration: 0.25,
        easings: [0.2, 0.3, 0.3, 0.2]
      }
    },
  }

  const onClose = () => {
    setFolders((old) => {
      let newFolders = [...old]
      const foundIndex = folders.findIndex(folder => folder.id === data.id)
      newFolders[foundIndex].open = false
      newFolders[foundIndex].zIndex = 0
      return newFolders
    })
  }

  const onDrag = () => {
    setFolders(old => {
      let newFolders = [...old]
      const foundIndex = folders.findIndex(folder => folder.id === data.id)
      newFolders[foundIndex].zIndex = Math.max(...folders.map(folder => folder.zIndex)) + 1
      return newFolders
    })
  }


  return (
    <>
      <m.div className={`absolute bg-white/5 flex flex-row overflow-hidden lg:pt-10 pt-20 shadow-glass shadow-white/20 backdrop-blur-lg
        `}
        id={data.id}
        variants={folderVariant}
        initial="hidden"
        animate="show"
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.2}
        whileDrag={{ scale: 1.01, zIndex: 2000 }}
        dragMomentum={false}
        onClick={onDrag}
      >
        <m.div className='flex items-center justify-center absolute top-0 left-0 w-full h-[12%]  opacity-90'>
          {data?.name}
          <div className='flex w-max gap-2 absolute top-4 right-4 rounded-full z-30'>
            <CircleButton
              color='bg-primary-blue'
              className="-rotate-45 text-gray-900"
              icon={<BiExpandHorizontal />}
              onAction={() => setExpanded(!isExpanded)} />
            <CircleButton
              color='bg-red-500'
              icon={<IoIosClose />}
              onAction={onClose} />
          </div>
        </m.div>
        <div className='flex lg:flex-row flex-col p-4 w-full'>
          <FileLister files={data.children} row={true} />
        </div>
      </m.div>
    </>
  )
}



export default Folder