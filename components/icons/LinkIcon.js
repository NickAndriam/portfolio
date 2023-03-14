import { useRouter } from 'next/router'
import React from 'react'
import { GoFileSymlinkFile } from 'react-icons/go'

const LinkIcon = ({ data }) => {
    const router = useRouter()
    return (
        <div className='file'
            id={data.id}
            onDoubleClick={() => router.push(`/${data?.slug}`)}>
            <GoFileSymlinkFile
                size={60}
                className={`text-gray-400 pointer-events-none`}
            />
        </div>
    )
}

export default LinkIcon