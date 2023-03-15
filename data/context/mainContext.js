export const mainContext = [

    {
        name: 'Refresh',
        fn: 'refresh',
    },
    {
        name: 'Add New',
        fn: 'new',
        subset: [
            {
                name: 'Folder',
                type: 'folder',
            },
            {
                name: 'Link',
                type: 'link',
            },
            {
                name: 'Note',
                type: 'note',
            },
        ]
    },
    {
        name: 'Sort By',
        fn: 'sort',
        subset: [
            {
                name: 'Name',
                by: 'name',
            },
            {
                name: 'Kind',
                by: 'kind',
            },
        ]
    },
    {
        name: 'Paste',
        fn: 'paste'
    },
]