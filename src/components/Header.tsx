export default function Header() {
    return (
        <div className='w-full h-[101px] relative'>
            <img
                src='/images/bg-header-desktop.svg'
                alt='header image'
                className='absolute inset-0 w-full h-[101px]'
            />
            <div className='bg-darkCyan h-full'></div>
        </div>
    )
}
