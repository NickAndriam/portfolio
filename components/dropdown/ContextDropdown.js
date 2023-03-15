import { contextState, foldersState, popUpState } from '@/Recoil/atoms'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { motion as m } from 'framer-motion'
import { BsFillFolderFill, BsLink45Deg } from 'react-icons/bs'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { AddingFolder } from './ContextAction'


const ContextDropdown = () => {
    const [ddState, setDDState] = useRecoilState(contextState)
    const [folder, setFolders] = useRecoilState(foldersState)
    const [popUp, setPopUp] = useRecoilState(popUpState)
    const [currentSubsets, setCurrentSubsets] = useState([])
    const [contextIndex, setContextIndex] = useState(0)
    const [currentSubsetsFunction, setCurrentSubsetsFunction] = useState('')
    const boxLength = 100 / ddState.list.length
    const { open, position: { x, y } } = ddState

    const onHoverLeave = () => {
        setDDState({
            ...ddState,
            open: false,
            position: { x: 0, y: 0 }
        })
    }
    const onHoverEnter = () => {
        setDDState({
            ...ddState,
            open: true,
        })
    }

    const onHoverOnContextMenu = (item, index) => {
        setCurrentSubsets(item?.subset)
        setContextIndex(boxLength * index + 1)
        setCurrentSubsetsFunction(item.fn)
    }

    const onAction = (item) => {
        switch (item.fn) {
            case 'refresh':
                return null
            case 'paste':
                return null
            default:
                return null
        }
    }
    const onSubsetAction = (subset) => {
        if (currentSubsetsFunction === 'new') {
            switch (subset?.type) {
                case 'folder':
                    return setPopUp({ ...popUp, open: true, component: AddingFolder })
                case 'link':
                    return alert('New Link')
                case 'note':
                    return alert('New Note')
                default:
                    return null
            }
        }
        else if (currentSubsetsFunction === 'sort') {
            switch (subset?.by) {
                case 'name':
                    return alert('Sort by Name')
                case 'kind':
                    return alert('Sort by Kind')
                default:
                    return null
            }
        }

    }

    const Icon = ({ type }) => {
        switch (type) {
            case 'folder':
                return <BsFillFolderFill className='text-blue-400' />
            case 'link':
                return <BsLink45Deg className='text-blue-400' />
            case 'note':
                return <MdOutlineStickyNote2 className='text-blue-400' />
        }
    }


    return (
        <>
            {open &&
                <m.section className={`absolute dropdown z-[3000]`}
                    initial={{
                        top: y,
                        left: x
                    }}
                    onMouseEnter={onHoverEnter}
                    onMouseLeave={onHoverLeave}
                >
                    <div className="dropdown backdrop-blur-sm bg-white/5  rounded-lg cursor-pointer overflow-hidden"
                    >
                        <m.ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-lg w-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {
                                ddState.list?.map((item, index) => {
                                    return (
                                        <>
                                            <li key={index}
                                                className="hover:bg-primary-blue px-10 py-2 text-[14px] flex items-center justify-between transition ease-in-out"
                                                onMouseEnter={() => onHoverOnContextMenu(item, index)}
                                                onClick={() => onAction(item)}
                                            >

                                                <a >{item.name}</a>
                                            </li>

                                        </>
                                    )
                                })
                            }

                        </m.ul>
                    </div>
                    <m.div className={`absolute  left-[100.5%] dropdown backdrop-blur-sm bg-white/5 rounded-lg overflow-hidden cursor-pointer`}
                        initial={{ top: `${contextIndex}%`, x: -5 }}
                        animate={{ top: `${contextIndex - 1}%`, x: 0, transition: { duration: 0.2 } }}
                    >
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-auto">
                            {
                                currentSubsets?.map((subset, index) => {
                                    return (
                                        <li key={index}
                                            className="hover:bg-primary-blue px-10 py-2 text-[14px] flex items-center justify-start transition ease-in-out gap-x-2"
                                            onClick={() => onSubsetAction(subset)}
                                        >
                                            <Icon type={subset.type} />
                                            <a>{subset.name} </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </m.div>
                </m.section>
            }
        </>
    )
}

export default ContextDropdown