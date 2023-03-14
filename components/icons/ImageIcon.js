import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { BsFileEarmarkImage } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { imageState } from '@/Recoil/atoms'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { screenSize } from '@/utils/screenSizes'

const ImageIcon = (props) => {
    const [image, setImage] = useRecoilState(imageState)
    const sm = useWindowDimensions().width < screenSize.tablet
    return (
        <m.div className='file relative w-[60px] h-[40px] rounded-sm overflow-hidden'
            {...props}
            // onClick={() => setImage({ ...image, open: true, url: props.image })}
            onClick={() => setImage({ ...image, open: true, url: props.image })}
            onMouseOver={(e) => setImage({ ...image, position: { x: e.pageX, y: e.pageY } })}
        >
            <Image src={props.image} alt={props.name || "image"} layout="fill" className='object-fill pointer-events-none' />
            <div className="absolute w-full h-full bg-transparent pointer-events-none"
            // onClick={() => sm && setImage({ ...image, open: true, url: props.image })}
            />
        </m.div>
    )
}

export default ImageIcon