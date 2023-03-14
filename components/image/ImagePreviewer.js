import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { imageState } from '@/Recoil/atoms'

const ImagePreviewer = () => {
    const [image, setImage] = useRecoilState(imageState)
    return (
        <>
            {image.open &&
                <m.div className={`absolute top-0 left-0 w-screen h-screen bg-black/20 z-[2000] backdrop-blur-md items-center justify-center shadow-md
                `}
                    initial={{ display: image.open ? 'flex' : 'hidden' }}
                    onClick={() => setImage({ ...image, open: false })}
                >
                    <m.div className='absolute top-0 left-0  py-10 w-screen h-screen'
                        initial={{
                            scale: 1,
                            top: image.position.y - 40,
                            left: image.position.x - 100,
                            width: '10%',
                            height: '10%',
                        }}
                        animate={{
                            scale: 1,
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        transition={{ type: 'spring', ease: 'easeIn', duration: 0.5 }}
                    >
                        <m.div className='relative w-full h-full'
                            transition={{ delay: 0.2, ease: 'easeInOut' }}
                        >
                            {image && <Image src={image.url} alt={image.alt} layout="fill" objectFit='contain' />}
                        </m.div>
                    </m.div>
                    <AiFillCloseCircle
                        className='absolute top-4 right-4 z-[400] cursor-pointer text-gray-300'
                        size={25}
                        onClick={() => setImage({ ...image, open: false })} />
                </m.div>
            }
        </>
    )
}


export default ImagePreviewer