import { motion as m } from 'framer-motion'
import { useState } from 'react';
import { BsFillFolderFill, BsFileEarmarkImage } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { RiApps2Fill } from 'react-icons/ri'
import Folder from './folder';

const File = ({ data }) => {
    const [openFile, setOpenFile] = useState(false)

    function Icon() {
        switch (data.fileType) {
            case 'folder':
                return <BsFillFolderFill size={60} className="text-blue-400" />;
            case 'image':
                return <BsFileEarmarkImage size={60} className="text-gray-400" />;
            case 'doc':
                return <HiDocumentText size={70} className="text-gray-400" />;
            case 'app':
                return <RiApps2Fill size={70} className="text-blue-500" />;
            default:
                return null
        }
    }
    function FileOpener() {
        switch (data.fileType) {
            case 'folder':
                return <Folder open={openFile}
                    onClose={() =>
                        setOpenFile(false)}
                    title={data.name}
                    data={data?.children} />;
            default:
                return null
        }
    }
    return (
        <>
            <m.div className='text-white flex flex-col items-center justify-center gap-2 w-min cursor-pointer'
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.2, zIndex: 2000 }}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.02 }}
                dragMomentum={false}
                onDoubleClick={() => setOpenFile(true)}
                onClick={() => setOpenFile(true)}
            >
                <Icon />
                <p className='text-[12px]'>{data.name}</p>
            </m.div>
            <FileOpener />
        </>
    )
}

export default File