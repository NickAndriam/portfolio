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
