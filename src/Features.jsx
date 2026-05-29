const Features = () => {
    return (
        <div className="font-bricolage my-20">
            <div className="max-w-6xl mx-auto">
                <p className="text-green text-[55px] text-center max-sm:leading-15 max-sm:text-[3rem]">Study smarter, not harder.</p>
                <p className="text-gray-600 text-center w-140 justify-self-center max-sm:w-80">Everything you need to find the right study group, at the right time, with the right tutor.</p>
                <div className="grid grid-cols-3 my-18 max-sm:grid-cols-1 max-sm:justify-self-center max-sm:gap-6">
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4.5 w-4.5 text-green">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <p className="text-[23px] text-green">Search by Topic</p>
                        <p className="text-gray-600">Instantly find the exact course code or topic you need to master before the paper.</p>
                    </div>
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4.5 w-4.5 text-green">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p className="text-[23px] text-green">Real-time availability</p>
                        <p className="text-gray-600">View a live feed of all study groups happening around campus now.</p>
                    </div>
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4.5 w-4.5 text-green">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <p className="text-[23px] text-green">Verified Locations</p>
                        <p className="text-gray-600">Verify the student teaching and get the exact hall location so you never get lost.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;