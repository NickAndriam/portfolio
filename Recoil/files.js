import { atom } from "recoil";
import { v4 as id } from 'uuid';


export const filesState = atom({
    key: 'filesState',
    default: [
        {
            name: 'About Me',
            fileType: 'link',
            slug: 'about',
            id: `${id()}`,
        },
        {
            name: 'Apps',
            fileType: 'folder',
            id: `${id()}`,
            open: false,
            children: [
                {
                    name: 'To Do',
                    fileType: 'app',
                    id: `${id()}`
                },
                {
                    name: 'Editable',
                    fileType: 'app',
                    id: `${id()}`

                },
            ]
        },
        {
            name: 'Images In 2020',
            fileType: 'folder',
            id: `${id()}`,
            open: false,
            children: [
                {
                    name: 'Mountain',
                    fileType: 'image',
                    image: '/assets/images/wallpaper.jpg',
                    id: `${id()}`,
                    alt: 'wallpaper'
                },
                {
                    name: 'Sky',
                    fileType: 'image',
                    image: '/assets/images/wallpaper.jpg',
                    id: `${id()}`,
                    alt: 'wallpaper'
                },
            ]
        },
        {
            name: 'album',
            fileType: 'folder',
            id: `${id()}`,
            open: false,
            children: []
        },
        {
            name: 'Wallpaper',
            fileType: 'image',
            image: '/assets/images/wallpaper.jpg',
            id: `${id()}`
        },
    ],
});