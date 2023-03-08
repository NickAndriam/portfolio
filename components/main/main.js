import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { SideBar } from '@/components/sideBar'
import { Avatar } from '@/components/Avatar'
import { useRecoilState } from 'recoil'
import { sideBarState } from '@/Recoil/atoms'
import BackGroundImages from '../BackGroundImages'

export default function Main({ children }) {
  const [openInfo, setOpenInfo] = useState(false)

  return (
    <main layout="size" className={`main relative shadow-2xl w-screen h-screen overflow-hidden bg-primary scrollbar-hide`}>
      <AnimatePresence key="body" mode='wait'>
        <Body>
          <BackGroundImages />
          {children}
        </Body>
      </AnimatePresence>
      <Avatar
        open={openInfo}
        onOpen={() => setOpenInfo(!openInfo)}
        onClose={() => setOpenInfo(false)}
      />
      <SideBar />
    </main>
  )
}

const Body = ({ children }) => {
  const [sideBar, setSideBar] = useRecoilState(sideBarState)
  return (
    <m.div
      className={`h-[100%] w-screen shadow-lg `}
      animate={sideBar ? { opacity: 0.3, x: -300 } : { opacity: 1, x: 0 }}
      transition={{ easings: [0.5, 0.7, 0.5, 1] }}
    >
      {children}
    </m.div>
  )
}

