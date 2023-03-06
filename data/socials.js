import { HiOutlineMail } from 'react-icons/hi'
import { IoIosCall } from 'react-icons/io'
import { TbBrandGithub } from 'react-icons/tb'
import { ImLinkedin2 } from 'react-icons/im'

const socials = [
    {
        name: 'Github',
        url: 'www.google.com',
        icon: <TbBrandGithub className='text-white' size={20} />
    },
    {
        name: 'LinkedIn',
        url: 'www.google.com',
        icon: <ImLinkedin2 className='text-white' size={20} />
    },
    {
        name: 'Email',
        url: 'www.google.com',
        icon: <HiOutlineMail className='text-white' size={20} />
    },
    {
        name: 'Github',
        url: 'www.google.com',
        icon: <IoIosCall className='text-white' size={20} />
    }
]

export default socials