import Image from 'next/image'
import React from 'react'
import blended from '@/public/assets/svg/blended.svg'
import circles from '@/public/assets/svg/circles.svg'
import smallerTop from '@/public/assets/svg/smaller-top.svg'
import smallerBottom from '@/public/assets/svg/smaller-bottom.svg'
import { motion as m } from 'framer-motion'

const BackGroundImages = ({ delay = 0.8 }) => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: delay }}
        >
            <div className='absolute w-[100%] h-[100%] top-[-10%] left-[-50%] lg:flex md:flex hidden'>
                <Image src={circles} alt="blended" layout="fill" objectFit="contain" />
            </div>
            <div className='absolute lg:w-[50%] w-[100%] h-[80%] -right-40 bottom-0 lg:flex md:flex hidden'>
                <Image src={blended} alt="blended" layout="fill" />
            </div>
            <div className='absolute w-[100%] h-[100%] top-[-35%] left-[-20%] lg:hidden md:hidden'>
                <Image src={smallerTop} alt="blended" layout="fill" objectFit="contain" />
            </div>
            <div className='absolute w-[100%] h-[100%] bottom-[-30%] right-[-20%] lg:hidden md:hidden'>
                <Image src={smallerBottom} alt="blended" layout="fill" objectFit="contain" />
            </div>
        </m.div>
    )
}

export default BackGroundImages