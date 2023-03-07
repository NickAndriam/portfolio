import { AnimatePresence } from 'framer-motion'
import '../styles/tailwind.css'
import '../styles/global.css'
import { TaskBar } from '@/components/TaskBar'
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { SideBar } from '@/components/sideBar'
import Head from '@/components/head'
import { Avatar } from '@/components/Avatar'



export default function App({ Component, pageProps }) {
  const [openSideBar, setOpenSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("load", function () {
      setTimeout(function () {
        // This hides the address bar:
        window.scrollTo(0, 1);
      }, 0);
    });
  }, [])

  return (
    <>
      <Head />
      <main layout="size" className={`main relative w-screen h-screen overflow-hidden bg-primary`}>
        <m.div
          className={`body `}
          animate={{ opacity: openSideBar ? 0.8 : 1 }}
          transition={{ easings: [0.5, 0.7, 0.5, 1] }}
        >
          <AnimatePresence mode='wait' initial={true}>
            <Component {...pageProps} />
            <TaskBar />
          </AnimatePresence>
        </m.div>
        {/* <SideBar
          open={openSideBar}
          onOpen={() => setOpenSidebar(!openSideBar)}
          onClose={() => setOpenSidebar(false)}
        /> */}
        <Avatar
          open={openSideBar}
          onOpen={() => setOpenSidebar(!openSideBar)}
          onClose={() => setOpenSidebar(false)}
        />
      </main>
    </>
  )
}

