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
            children: [
                {
                    name: 'Mountain',
                    fileType: 'image',
                    image: '/assets/images/wallpaper.jpg',
                    id: `${id()}`
                },
                {
                    name: 'Sky',
                    fileType: 'image',
                    image: '/assets/images/wallpaper.jpg',
                    id: `${id()}`
                },
            ]
        },
        {
            name: 'Wallpaper',
            fileType: 'image',
            image: '/assets/images/wallpaper.jpg',
            id: `${id()}`
        },
    ],
});