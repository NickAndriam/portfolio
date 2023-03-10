import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'

const ImagePreviewer = ({ image, open, onClose }) => {
    return (
        <div className={`absolute top-0 left-0 w-screen h-screen bg-black/5 z-[400] backdrop-blur-md items-center justify-center py-10 shadow-md
            ${open ? 'flex' : 'hidden'}`}
            onClick={onClose}>
            <m.div className='relative w-screen h-screen'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.2, 1], scale: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
            >
                <Image src={image} alt="image" layout="fill" objectFit='contain' />
            </m.div>
            <AiFillCloseCircle className='absolute top-4 right-4 z-[400] cursor-pointer text-gray-300' size={25} />
        </div>
    )
}

export default ImagePreviewer