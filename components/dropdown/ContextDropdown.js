import { contextState } from '@/Recoil/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'
import { motion as m } from 'framer-motion'
import { MdKeyboardArrowRight } from 'react-icons/md'


const ContextDropdown = () => {
    const [ddState, setDDState] = useRecoilState(contextState)
    const { open, position: { x, y } } = ddState

    const onHoverLeave = () => {
        setDDState({
            ...ddState,
            open: false,
            position: { x: 0, y: 0 }
        })
    }
    return (
        <>
            {open &&
                <m.section className={`absolute dropdown z-[4000]`}
                    initial={{
                        top: y,
                        left: x
                    }}
                >
                    <div className="dropdown backdrop-blur-sm bg-white/5 rounded-sm overflow-hidden cursor-pointer"
                        onTouchEnd={onHoverLeave}
                        onTouchCancel={onHoverLeave}
                        onMouseLeave={onHoverLeave}
                    >
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-auto">
                            {
                                ddState.list?.map((item, index) => {
                                    return (
                                        <li key={index}
                                            className="hover:bg-primary-blue px-10 py-2 text-[14px] flex items-center justify-between transition ease-in-out">
                                            <a>{item.name} </a>
                                            {/* {item.subset && <span><MdKeyboardArrowRight size={25} /></span>} */}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </m.section>
            }
        </>
    )
}

export default ContextDropdown