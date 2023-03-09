import { motion as m } from 'framer-motion'
import { useState } from 'react';
import { BsFillFolderFill, BsFileEarmarkImage } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { TbBrandAppleArcade } from 'react-icons/tb'
import { GoFileSymlinkFile } from 'react-icons/go'
import Folder from './folder';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImagePreviewer from '../image/ImagePreviewer';

const File = ({ data }) => {
    const router = useRouter()
    const [openFile, setOpenFile] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    function Icon() {
        switch (data?.fileType) {
            case 'link':
                return <GoFileSymlinkFile size={60} className="text-gray-400" onClick={() => router.push(`/${data?.slug}`)} />;
            case 'folder':
                return <BsFillFolderFill size={60} className="text-blue-400 " />;
            case 'image':
                return <BsFileEarmarkImage size={60} className="text-gray-400" onClick={() => setOpenImage(true)} />;
            case 'doc':
                return <HiDocumentText size={70} className="text-gray-400" />;
            case 'app':
                return <TbBrandAppleArcade size={70} className="text-blue-400" />;
            default:
                return null
        }
    }
    function FileOpener() {
        switch (data?.fileType) {
            case 'folder':
                return <Folder open={openFile}
                    onClose={() =>
                        setOpenFile(false)}
                    title={data.name}
                    data={data?.children} />;
            case 'image':
                return <ImagePreviewer image={data.image} open={openImage} onClose={() => { setOpenImage(false) }} />
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