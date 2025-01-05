import React from "react"
import clsx from "clsx"
import { useParams } from "react-router";
interface Tab {
    tab: string
}
export default function Content({ data }: { data: Planet[] }): React.JSX.Element {
    const [state, setState] = React.useState({ tab: "overview" } as Tab)
    const handleChangeTab = (tab: string) => setState({ ...state, tab: tab })
    const params = useParams();
    const planet: Planet = data[parseInt(params.id ?? "1") - 1]
    return (
        <div className='w-[90%] max-w-[1200px] mx-auto'>
            <div className='flex flex-wrap  items-center justify-between  mt-32'>

                <div className="w-[20rem] h-[20rem] relative tb:w-full">
                    {
                        (state.tab == "geology") ?
                            <>
                                <img src={planet.images["overview"]} alt="mercury" className='w-[20rem] h-[20rem] object-cover tb:mx-auto' />
                                <img src={planet.images[state.tab as (keyof typeof planet.images)]} alt="mercury" className='w-[11rem] h-[13.5rem] object-cover aspect-square absolute top-[60%] left-[50%] translate-x-[-50%]' />
                            </>
                            : <img src={planet.images[state.tab as (keyof typeof planet.images)]} alt="mercury" className='w-[20rem] h-[20rem] object-cover tb:mx-auto' />
                    }
                </div>

                <div className='w-[30%] mb:w-full tb:w-full tb:flex tb:justify-between mt-32 tb:items-center'>
                    <div className="tb:max-w-[350px]">
                        <h1 className='h1 uppercase mb:text-center'>{planet.name}</h1>
                        <p className='body my-8'>{planet[state.tab].content}</p>
                        <span className='body flex items-center gap-2'>
                            <span className='text-white text-opacity-50'>Source:</span>
                            Wikipedia
                            <a href={planet[state.tab].source}>
                                <img src="./assets/icon-source.svg" alt="Source" className='w-3 h-3 object-cover' />
                            </a>
                        </span>
                    </div>

                    <div className='flex-col flex items-start gap-4 mt-10'>
                        <span onClick={() => handleChangeTab("overview")} className={clsx('h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full cursor-pointer', { "bg-cyan": state.tab == "overview" })}><span className='text-white text-opacity-50'>01</span> OVERVIEW</span>
                        <span onClick={() => handleChangeTab("structure")} className={clsx('h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full cursor-pointer', { "bg-cyan": state.tab == "structure" })}><span className='text-white text-opacity-50'>02</span> Internal Structure</span>
                        <span onClick={() => handleChangeTab("geology")} className={clsx('h3 py-4 px-8 uppercase border-[1px] border-solid border-gray w-full cursor-pointer', { "bg-cyan": state.tab == "geology" })}><span className='text-white text-opacity-50'>03</span> Surface Geology</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 items-center justify-between mt-24 pb-20 tb:gap-4 tb:items-stretch mb:flex-col'>
                <div className='p-6 border-[1px] border-gray border-solid w-full '>
                    <span className='body text-white text-opacity-50 block'>ROTATION TIME</span>
                    <span className='h3 mt-1'>{planet.rotation}</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='body text-white text-opacity-50 block'>REVOLUTION TIME</span>
                    <span className='h3 mt-1'>{planet.revolution}</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='body text-white text-opacity-50 block'>RADIUS</span>
                    <span className='h3 mt-1'>{planet.radius}</span>
                </div>
                <div className='p-6 border-[1px] border-gray border-solid w-full'>
                    <span className='body text-white text-opacity-50 block'>AVERAGE TEMP.</span>
                    <span className='h3 mt-1'>{planet.temperature}</span>
                </div>
            </div>
        </div>)
}