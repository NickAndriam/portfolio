import File from "./file"

const FileLister = ({ files, row = false, col = false, pt = false }) => {
    return (
        <div className={`flex p-5 items-start justify-start gap-5 w-min h-min
        ${pt && 'pt-10'}
        ${col && 'flex-col'}
        ${row && 'flex-row'}`}>
            {files?.map((file, index) => <File key={index} data={file} />)}
        </div>
    )
}

export default FileLister