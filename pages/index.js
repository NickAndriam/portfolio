
import { motion as m } from "framer-motion";
import Image from "next/image";
import blended from '../public/assets/blended.svg'
import circles from '../public/assets/circles.svg'
import smallerTop from '../public/assets/svg/smaller-top.svg'
import smallerBottom from '../public/assets/svg/smaller-bottom.svg'
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from "next/router";
import { TextWithMovingBox } from "@/components/animation/TextWithMovingBox";


export default function Home() {
  const router = useRouter()
  return (
    <m.div className="relative bg-primary overflow-hidden flex flex-col items-center justify-center -mt-10 lg:gap-y-3 gap-y-10" layout>
      <div className='absolute w-[100%] h-[100%] top-[-10%] left-[-50%] lg:flex md:flex hidden'>
        <Image src={circles} alt="blended" layout="fill" objectFit="contain" />
      </div>
      <div className='absolute lg:w-[50%] w-[100%] h-[80%] -right-40 bottom-0 lg:flex md:flex hidden'>
        <Image src={blended} alt="blended" layout="fill" />
      </div>
      <div className='absolute w-[100%] h-[100%] top-[-35%] left-[-20%] lg:hidden md:hidden'>
        <Image src={smallerTop} alt="blended" layout="fill" objectFit="contain" />
      </div>
      <div className='absolute w-[100%] h-[100%] bottom-[-30%] right-[-20%] lg:hidden md:hidden'>
        <Image src={smallerBottom} alt="blended" layout="fill" objectFit="contain" />
      </div>
      <div>
        <TextWithMovingBox text={"I am a"} delay={0.3} bg="bg-primary-blue" textColor="text-primary-blue" />
      </div>
      <m.div className="relative w-min h-min mx-auto"
      // transition={{ duration: 0.5 }}
      >

        <div className="flex flex-col items-center">
          <m.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, easings: [0.2, 0.4, 0.6, 1], delay: 0.8 }}>
            <m.p className='bg-primary-blue font-extrabold lg:text-[100px] text-[40px]
            bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 float-left -mt-8'>Full-Stack</m.p>
          </m.div>

          <m.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, easings: [0.2, 0.4, 0.6, 1], delay: 0.8 }}>

            <m.span className='lg:flex lg:text-[160px] text-[60px] float-right font-extrabold
              bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 lg:-mt-20 -mt-10 '>Developer</m.span>
          </m.div>
        </div>


        <m.div className="flex space-around items-center justify-center cursor-pointer mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1] }}
          transition={{ delay: 1.2 }}>
          <div className="px-5 py-2 bg-gradient-to-t from-cyan-500 to-[#2A77F7] hover:from-purple-600 hover:to-blue-500 rounded-full flex items-center gap-x-2 justify-center text-white hover:scale-[1.05] transition-all"
            onClick={() => router.push('/about')}>
            <h2 className={`rubik text-white lg:text-[30px] text-[18px]`}>Get to Know Me</h2>
            <IoIosArrowForward size={25} />
          </div>
        </m.div>
      </m.div>

    </m.div>
  )
}
