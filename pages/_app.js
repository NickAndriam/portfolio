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
  const [openInfo, setOpenInfo] = useState(false)
  const [openSideBar, setOpenSideBar] = useState(false)

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
          animate={openSideBar ? { opacity: 0.8, x: -300 } : { opacity: 1, x: 0 }}
          transition={{ easings: [0.5, 0.7, 0.5, 1] }}
        >
          <AnimatePresence mode='wait' initial={true}>
            <Component {...pageProps} />
            <TaskBar />
          </AnimatePresence>
        </m.div>
        <Avatar
          open={openInfo}
          onOpen={() => setOpenInfo(!openInfo)}
          onClose={() => setOpenInfo(false)}
        />
        <SideBar
          open={openSideBar}
          onOpen={() => setOpenSideBar(!openSideBar)}
          onClose={() => setOpenSideBar(false)}
        />
      </main>
    </>
  )
}

