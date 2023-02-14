import FilterBtn from './FilterBtn'

export type cardProps = {
    job: {
        id: number
        company: string
        logo: string
        new: boolean
        featured: boolean
        position: string
        role: string
        level: string
        postedAt: string
        contract: string
        location: string
        languages: string[]
        tools: string[]
    }
    addFilter: (value: string) => void
}

export default function Card({ job, addFilter }: cardProps) {
    return (
        <>
            <div className='grid md:flex items-center m-5 py-6 shadow-xl shadow-[#d7ebec] rounded-md relative w-[90%]'>
                {job.featured && (
                    <div className='absolute left-0 rounded-l-md bg-darkCyan h-full w-[5px]'></div>
                )}
                <div className='px-4 py-0 pb-2 md:py-10'>
                    <img
                        src={job.logo}
                        alt={job.company}
                        className='w-12 h-12 md:w-fit md:h-fit'
                    />
                </div>
                <div className='px-4 md:px-0'>
                    <div className='text-darkCyan font-bold flex'>
                        <h5>{job.company}</h5>
                        {job.new && (
                            <div className='text-white bg-darkCyan px-2 rounded-full ml-3 h-5'>
                                NEW!
                            </div>
                        )}
                        {job.featured && (
                            <div className='text-white bg-veryDarkGrayCyan px-2 rounded-full ml-3 h-5'>
                                FEATURED
                            </div>
                        )}
                    </div>
                    <h4 className='text-lg font-bold hover:text-darkCyan cursor-pointer'>
                        {job.position}
                    </h4>
                    <div className='flex text-darkGrayCyan space-x-2'>
                        <p>{job.postedAt}</p>
                        <div className='w-[3px] h-[3px] bg-darkGrayCyan rounded-full mt-[10px]'></div>
                        <p>{job.contract}</p>
                        <div className='w-[3px] h-[3px] bg-darkGrayCyan rounded-full mt-[10px]'></div>
                        <p>{job.location}</p>
                    </div>
                </div>
                <hr className='block md:hidden w-[90%] mx-auto my-4' />

                <div className='ml-4 md:ml-auto text-text flex flex-wrap font-bold text-darkCyan mr-4'>
                    <FilterBtn value={job.role} addFilter={addFilter} />
                    <FilterBtn value={job.level} addFilter={addFilter} />

                    {job.languages.map((lang, i) => {
                        return (
                            <FilterBtn
                                key={i}
                                value={lang}
                                addFilter={addFilter}
                            />
                        )
                    })}
                    {job.tools.map((tool, i) => {
                        return (
                            <FilterBtn
                                key={i}
                                value={tool}
                                addFilter={addFilter}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
