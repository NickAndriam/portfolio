import { mainContext } from "@/data/context/mainContext";
import { v4 as id } from 'uuid';


const { atom } = require("recoil");

export const sideBarState = atom({
    key: 'sideBarState',
    default: false,
});

export const elPositionState = atom({
    key: 'elPositionState',
    default: {
        y: 0,
        x: 0,
        w: 0,
        h: 0
    },
});


export const imageState = atom({
    key: 'imageState',
    default: {
        url: '/assets/images/wallpaper.jpg',
        alt: 'cat',
        open: false,
        position: { x: 0, y: 0 }
    }
})

export const contextState = atom({
    key: 'contextState',
    default: {
        open: false,
        position: {
            x: 0,
            y: 0
        },
        list: mainContext
    }
})


export const foldersState = atom({
    key: 'foldersState',
    dangerouslyAllowMutability: true,
    default: []
})

