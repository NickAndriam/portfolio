import React from 'react'
import { motion as m } from 'framer-motion'
import { IoIosArrowForward } from 'react-icons/io'
import { useRecoilState } from 'recoil'
import { elPositionState } from '@/Recoil/atoms'
import { useRouter } from 'next/router'

const ColorFulButton = () => {
    const [elPosition, setElPosition] = useRecoilState(elPositionState)
    const router = useRouter()
    return (
        <m.div className="flex space-around items-center justify-center cursor-pointer mt-10"
            onMouseEnter={e => { console.log(e), setElPosition({ y: e.pageY, x: e.pageX }) }}>
            <m.div className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-full flex items-center gap-x-2 justify-center text-white hover:scale-[1.05] transition-all"
                onClick={() => router.push('/about')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, easings: [0.55, 0.6, 0.45, 0.71] }}>
                <m.h2 className={`rubik text-white lg:text-[30px] text-[18px]`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}>Get to Know Me
                </m.h2>
                <IoIosArrowForward size={25} />
            </m.div>
        </m.div>
    )
}

export default ColorFulButton