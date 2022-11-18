import React from "react"

const Hero = ({ setFilter }) => <main className="container mx-auto mt-24 text-center lg:px-40 flex flex-col justify-center items-center">
    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-cyan-300">The momentum is building.</h1>
    <p className="mt-10 text-2xl lg:text-4xl text-center" >Your guide to what’s live today and coming soon on the Aurora network!.</p>
    <button className="mt-10 p-4 rounded-lg bg-teal-800">Submit your project</button>
    <p className="mt-10 text-sm text-center w-1/2 text-slate-500">This list is for informational purposes only, and Aurora does not endorse any project listed here. DYOR before interacting with any of the projects listed below.</p>
    <form className="mt-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="w-64 flex bg-jade rounded-lg">
            <div className="flex items-center pl-3 pointer-events-none">
                <svg ariaHidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 text-md text-white bg-jade rounded-lg focus:outline-none" placeholder="Search project by name" onChange={e => setFilter(e.target.value)} />
        </div>
    </form>
</main>

export default React.memo(Hero)