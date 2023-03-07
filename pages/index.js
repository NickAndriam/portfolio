
import { motion as m } from "framer-motion";
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from "next/router";
import { TextWithMovingBox } from "@/components/animation/TextWithMovingBox";
import BackGroundImages from "@/components/BackGroundImages";


export default function Home() {
  const router = useRouter()
  return (
    <m.div className="relative bg-primary overflow-hidden flex flex-col items-center justify-center -mt-10 lg:gap-y-3 gap-y-10"
      layout="position"
      transition={{ ease: "easeInOut" }}>

      <BackGroundImages />

      <div>
        <TextWithMovingBox text={"I am a"} bg="bg-primary-blue" textColor="text-primary-blue" />
      </div>
      <m.div className="relative w-min h-min mx-auto"
      >

        <div className="flex flex-col items-center">
          <m.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, easings: [0.2, 0.4, 0.6, 1], delay: 0.8 }}>
            <m.p className='bg-primary-blue font-extrabold lg:text-[100px] text-[40px]
            bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 float-left -mt-8'>Full-Stack</m.p>
          </m.div>

          <m.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, easings: [0.2, 0.4, 0.6, 1], delay: 0.8 }}>

            <m.span className='lg:flex lg:text-[160px] text-[60px] float-right font-extrabold
              bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 lg:-mt-20 -mt-10 '>Developer</m.span>
          </m.div>
        </div>


        <m.div className="flex space-around items-center justify-center cursor-pointer mt-10" layout>
          <m.div className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-full flex items-center gap-x-2 justify-center text-white hover:scale-[1.05] transition-all"
            onClick={() => router.push('/about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, easings: [0.55, 0.6, 0.45, 0.71] }}>
            <m.h2 className={`rubik text-white lg:text-[30px] text-[18px]`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}>Get to Know Me</m.h2>
            <IoIosArrowForward size={25} />
          </m.div>
        </m.div>
      </m.div>

    </m.div>
  )
}
