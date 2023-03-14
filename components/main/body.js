import { sideBarState } from '@/Recoil/atoms'
import { motion as m } from 'framer-motion'
import { useRecoilState } from 'recoil'

const Body = ({ children }) => {
    const [sideBar, setSideBar] = useRecoilState(sideBarState)
    return (
        <m.div
            className={`h-[100%] w-screen shadow-lg `}
            animate={sideBar ? { opacity: 0.2 } : { opacity: 1 }}
            transition={{ easings: [0.5, 0.7, 0.5, 1] }}
        >
            {children}
        </m.div>
    )
}


export default Body