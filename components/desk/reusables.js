import { popUpState } from '@/Recoil/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'
import { motion as m } from 'framer-motion'

const Reusables = () => {
    return (
        <>
            <PopUp />
        </>
    )
}

export const PopUp = () => {
    const [popUp, setPopUp] = useRecoilState(popUpState)

    return (
        <>
            {popUp.open &&
                <m.div className='absolute w-40 h-20 top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 z-[5000]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {popUp.component}
                </m.div>
            }
        </>
    )
}

export default Reusables