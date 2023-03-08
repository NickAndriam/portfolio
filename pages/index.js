
import { motion as m } from "framer-motion";
import { TextWithMovingBox } from "@/components/animation/TextWithMovingBox";
import BackGroundImages from "@/components/BackGroundImages";
import ColorFulButton from "@/components/Button/ColorFulButton";
import SplittingText from "@/components/Text/SplittingText";
import { useRouter } from "next/router";


export default function Home() {
  return (
    <m.div className="relative h-full bg-primary overflow-hidden flex flex-col items-center justify-center -pt-10 lg:gap-y-3 gap-y-10"
    // transition={{ ease: "easeInOut" }}
    >
      <BackGroundImages />
      <div className="-mt-10">
        <TextWithMovingBox text={"I am a"} bg="bg-primary-blue" textColor="text-primary-blue" />
        <m.div className="relative w-min h-min mx-auto">
          <SplittingText />
          <ColorFulButton />
        </m.div>
      </div>
    </m.div>
  )
}
