import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { IoIosClose } from 'react-icons/io'
import { BiExpandHorizontal } from 'react-icons/bi'
import { CircleButton } from '@/components/Button/CircleButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { useRecoilState } from 'recoil'
import { elPositionState } from '@/Recoil/atoms'
import FileLister from './fileLister'
import { useRouter } from 'next/router'


const Folder = (
  {
    open = false,
    onClose,
    title,
    data
  }
) => {
  const router = useRouter()
  const dim = useWindowDimensions()
  const [isExpanded, setExpanded] = useState(false)
  const [elPosition, setElPosition] = useRecoilState(elPositionState)

  const folderVariant = {
    hidden: {
      opacity: 0,
      height: 20,
      width: 20,
      borderRadius: 70,
      // top: '50%',
      // left: '50%',
    },
    show: {
      // top: '45%',
      // left: '50%',
      opacity: 1,
      height: isExpanded && '100%' || dim.width < 830 ? '60%' : '60%',
      width: isExpanded ? '100%' : '40%',
      width: dim.width < 830 ? '80%' : '40%',
      borderRadius: 15,
      transition: {
        duration: 0.25,
        easings: [0.2, 0.3, 0.3, 0.2]
      }
    },
  }
  return (
    <>
      {open &&
        <m.div className={`absolute bg-white/5 flex flex-row overflow-hidden lg:pt-10 pt-20 z-50 shadow-glass shadow-white/20 backdrop-blur-lg
        top-[20%] left-[30%] rounded-xl`}
          // initial={{
          //   opacity: 0,
          //   height: 20,
          //   width: 20,
          //   borderRadius: 70,
          //   top: '50%',
          //   left: '50%',
          //   transform: 'translate(-50%, -50%)',
          // }}
          // animate={{
          //   top: '45%',
          //   left: '50%',
          //   transform: 'translate(-50%, -50%)',
          //   opacity: 1,
          //   height: isExpanded && '100%' || dim.width < 830 ? '60%' : '60%',
          //   width: dim.width < 830 ? '80%' : isExpanded ? '100%' : '60%',
          //   borderRadius: 15,
          //   transition: {
          //     duration: 0.25,
          //     easings: [0.2, 0.3, 0.3, 0.2]
          //   }
          // }}
          variants={folderVariant}
          initial="hidden"
          animate="show"
          drag
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.01, zIndex: 2000 }}
          dragMomentum={false}
        >
          <m.div className='flex items-center justify-center absolute top-0 left-0 w-full h-[10%] opacity-90'>
            {title}
          </m.div>
          <div className='flex w-max gap-2 absolute top-4 right-4 rounded-full'>
            <CircleButton color='bg-green-500' className="-rotate-45 text-gray-900" icon={<BiExpandHorizontal />} onAction={() => setExpanded(!isExpanded)} />
            <CircleButton color='bg-red-500' icon={<IoIosClose />} onAction={() => { onClose(), router.push("/desk/main") }} />
          </div>
          <div className='flex lg:flex-row flex-col p-4'>
            <FileLister files={data} row={true} />
          </div>
        </m.div>
      }

    </>
  )
}



const container = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      staggerChildren: 0.2,
      ease: 'easeInOut'
    }
  }
}

const item = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 }
}


export default Folder