type btnProps = {
    value: string
    addFilter: (value: string) => void
}
export default function FilterBtn({ value, addFilter }: btnProps) {
    return (
        <button
            className='mr-7 hover:bg-darkCyan hover:text-white rounded-lg p-2'
            onClick={() => addFilter(value)}
        >
            {value}
        </button>
    )
}
