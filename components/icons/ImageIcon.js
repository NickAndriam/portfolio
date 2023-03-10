import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { BsFileEarmarkImage } from 'react-icons/bs'

const ImageIcon = (props) => {
    return (
        <m.div className='relative rounded-sm overflow-hidden'>
            <BsFileEarmarkImage size={60} className="text-gray-400" />
            {/* <div className='w-[60px] h-[60px]'>
                <Image src={props.image} alt={props.name} layout="fill" />
            </div> */}
        </m.div>
    )
}

export default ImageIcon