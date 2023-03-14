import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { SideBar } from '@/components/sideBar'
import { Avatar } from '@/components/Avatar'
import { useRecoilState } from 'recoil'
import { sideBarState } from '@/Recoil/atoms'
import BackGroundImages from '../BackGroundImages'
import Body from './body'
import ImagePreviewer from '../image/ImagePreviewer'
import MainDropdown from '../dropdown/ContextDropdown'

export default function Main({ children }) {
  const [openInfo, setOpenInfo] = useState(false)

  return (
    <>
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
        <ImagePreviewer />
        {/* <MainDropdown /> */}
      </main>
    </>
  )
}


