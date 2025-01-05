import React from "react"
export default function Content(): React.JSX.Element {
    return (
        <div className='w-[90%] max-w-[1200px] mx-auto'>
            <div className='flex flex-wrap  items-center justify-between  mt-32'>
                <img src="./assets/planet-mercury.svg" alt="mercury" className='w-[20rem] h-[20rem] object-cover' />
                <div className='w-[30%]'>
                    <h1 className='h1 uppercase'>mercury</h1>
                    <p className='body my-8'>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                    <span className='body flex items-center gap-2'>
                        <span className='text-white text-opacity-50'>Source:</span>
                        Wikipedia
                        <a href="#">
                            <img src="./assets/icon-source.svg" alt="Source" className='w-3 h-3 object-cover' />
                        </a>
                    </span>
                    <div className='flex-col flex items-start gap-4 mt-10'>
                        <span className='h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full'><span className='text-white text-opacity-50'>01</span> OVERVIEW</span>
                        <span className='h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full'><span className='text-white text-opacity-50'>02</span> Internal Structure</span>
                        <span className='h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full'><span className='text-white text-opacity-50'>03</span> Surface Geology</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 items-center justify-between mt-24 pb-20'>
                <div className='p-6 border-[1px] border-gray border-solid w-full '>
                    <span className='h4 text-white text-opacity-50 block'>ROTATION TIME</span>
                    <span className='h2 mt-1'>58.6 days</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='h4 text-white text-opacity-50 block'>ROTATION TIME</span>
                    <span className='h2 mt-1'>58.6 days</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='h4 text-white text-opacity-50 block'>ROTATION TIME</span>
                    <span className='h2 mt-1'>58.6 days</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='h4 text-white text-opacity-50 block'>ROTATION TIME</span>
                    <span className='h2 mt-1'>58.6 days</span>
                </div>
            </div>
        </div>)
}