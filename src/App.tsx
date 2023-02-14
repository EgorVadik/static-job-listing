import Header from './components/Header'
import joblistings from '../data.json'
import Card from './components/Card'
import FilterBar from './components/FilterBar'
import { useEffect, useState } from 'react'

function App() {
    const [jobs, setJobs] = useState(joblistings)
    const [filter, setFilter] = useState<string[]>(['Frontend'])

    useEffect(() => {
        setJobs(
            joblistings.filter((job) => {
                let match = 0
                filter.forEach((f) => {
                    const isInRole = f === job.role
                    const isInlevel = f === job.level
                    const isInTools = job.tools.includes(f)
                    const isInLangs = job.languages.includes(f)

                    if (isInLangs || isInRole || isInTools || isInlevel) {
                        match += 1
                    }
                })

                return match === filter.length
            })
        )
    }, [filter])

    function addFilter(value: string) {
        if (!filter.includes(value)) {
            setFilter([...filter, value])
        }
    }

    function removeFilter(value: string) {
        setFilter(filter.filter((f) => f !== value))
    }

    function clear() {
        setFilter([])
    }

    return (
        <>
            <main className='bg-[#f0fafb]'>
                <Header />
                <div className='container m-auto mt-10 font-leagueSpartan relative'>
                    {filter.length > 0 && (
                        <FilterBar
                            filter={filter}
                            removeFilter={removeFilter}
                            clear={clear}
                        />
                    )}
                    <div className='mb-5 invisible'>.</div>
                    {jobs.map((job) => {
                        return (
                            <Card
                                key={job.id}
                                job={job}
                                addFilter={addFilter}
                            />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default App
