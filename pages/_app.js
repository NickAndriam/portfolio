import '../styles/tailwind.css'
import '../styles/global.css'
import Head from '@/components/head'
import { RecoilRoot } from 'recoil';
import Main from '@/components/main/main'
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <RecoilRoot>
        <AnimatePresence mode='wait' key="mainPresence" initial={{ y: 30, x: 100 }}>
          <Main>
            <Component {...pageProps} />
          </Main>
        </AnimatePresence>
      </RecoilRoot>
    </>
  )
}

