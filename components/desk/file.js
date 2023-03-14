import { motion as m } from 'framer-motion'
import IconSwitcher from '../icons/IconSwitcher';

const File = ({ data }) => {
    return (
        <>
            <m.div className='file text-white flex flex-col items-center justify-center gap-2 cursor-pointer text-center max-30'
                id={data.id}
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.05, zIndex: 2000 }}
                whileTap={{ scale: 1.02 }}
                whileHover={{ scale: 1.05 }}
                dragMomentum={false}
            >
                <IconSwitcher data={data} />
                <p className='text-[12px] px-1 max-w-[65px]'
                    contentEditable={false}
                    suppressContentEditableWarning
                >{data?.name}</p>
            </m.div>
        </>
    )
}

export default File