import React from 'react'
import { SiSetapp } from 'react-icons/si'
import { HiDocumentText } from 'react-icons/hi'
import LinkIcon from './LinkIcon'
import FolderIcon from './FolderIcon'
import ImageIcon from './ImageIcon'
import AppIcon from './AppIcon'

const IconSwitcher = ({ data }) => {
    switch (data?.fileType) {
        case 'link':
            return <LinkIcon data={data} />
        case 'folder':
            return <FolderIcon data={data} />
        case 'image':
            return <ImageIcon image={data.image} id={data.id} />;
        case 'doc':
            return <HiDocumentText size={70} className={`text-gray-400 `} />;
        case 'app':
            return <AppIcon />;
        default:
            return null
    }
}

export default IconSwitcher