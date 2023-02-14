type filterBarProps = {
    filter: string[]
    removeFilter: (value: string) => void
    clear: () => void
}

export default function FilterBar({
    filter,
    removeFilter,
    clear,
}: filterBarProps) {
    return (
        <div className='flex items-center mx-5 px-4 bg-white w-[90%] shadow-lg shadow-[#d7ebec] rounded-[4px] py-3 font-bold absolute top-[-75px]'>
            <div className='flex mr-auto flex-wrap text-darkCyan'>
                {filter.map((f, i) => {
                    return (
                        <div key={i} className='mr-5 my-2 flex items-center'>
                            <p className='px-2'>{f}</p>
                            {removeBtn(f)}
                        </div>
                    )
                })}
            </div>
            <button
                className='text-darkGrayCyan hover:text-darkCyan hover:underline'
                onClick={clear}
            >
                Clear
            </button>
        </div>
    )

    function removeBtn(value: string) {
        return (
            <button
                className='bg-darkCyan p-2 rounded-r-md hover:bg-veryDarkGrayCyan'
                onClick={() => removeFilter(value)}
            >
                <img src='./images/icon-remove.svg' alt='Remove Icon' />
            </button>
        )
    }
}
