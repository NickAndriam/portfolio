const { atom } = require("recoil");

export const filesState = atom({
    key: 'filesState',
    default: [
        {
            name: 'About Me',
            fileType: 'doc'
        },
        {
            name: 'Apps',
            fileType: 'folder',
            children: [
                {
                    name: 'To Do',
                    fileType: 'app'
                },
                {
                    name: 'Editable',
                    fileType: 'app'
                },
            ]
        },
        {
            name: 'Wallpaper',
            fileType: 'image',
        },
    ],
});