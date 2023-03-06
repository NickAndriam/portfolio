import { AnimatePresence } from 'framer-motion'
import '../styles/tailwind.css'
import '../styles/global.css'
import { TaskBar } from '@/components/TaskBar'
import { useId, useState } from 'react'
import { motion as m } from 'framer-motion'
import { SideBar } from '@/components/sideBar'

export default function App({ Component, pageProps }) {
  const [openSideBar, setOpenSidebar] = useState(false)
  return (
    <>
      <main layout="size" className="main relative w-screen h-screen overflow-hidden bg-primary">
        <m.div className="body overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: openSideBar ? -300 : 0, opacity: openSideBar ? 0.95 : 1 }}
          exit={{ x: 0 }}
          transition={{ easings: [0.5, 0.7, 0.5, 1] }}
        >
          <AnimatePresence mode='wait' initial={true}>
            <Component {...pageProps} />
            <TaskBar />
          </AnimatePresence>
        </m.div>
        <SideBar
          open={openSideBar}
          onOpen={() => setOpenSidebar(!openSideBar)}
          onClose={() => setOpenSidebar(false)}
        />
      </main>
    </>
  )
}
