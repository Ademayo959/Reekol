import Navbar from './Navbar'

const ResourcesPage = () => {
    return (
        <div className='font-bricolage'>
            <Navbar />
            <div>
                <div className='justify-self-center my-12'>
                    <div className='border border-green-800 bg-green-100 px-2  w-fit rounded-2xl justify-self-center'>
                        <p className='text-green text-[12px] font-bricolage-semibold tracking-wider'>RESOURCES</p>
                    </div>
                    <p className='text-[50px] text-green w-150 leading-12 text-center my-5'>Everything you need to survive on campus</p>
                    <p className='text-gray-500 w-150  text-center'>Guides, tips, and articles to help Nigerian university students make the most of Reekol and ace their exams.</p>
                    <div className='flex items-center gap-2 border border-gray-300 px-4 py-1 rounded-3xl my-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" className='h-8 outline-0 w-full' placeholder='Search articles, guides, FAQs' />
                        <div className='bg-green h-8 w-fit py-2 px-3 flex items-center text-white rounded-2xl'>
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 max-w-2xl'>
                <div className='text-center'>
                    <p>Quick Start Guides</p>
                    <p>Step-by-step walkthroughs for everything on Reekol</p>
                </div>
            </div>

        </div>
    );
}

export default ResourcesPage;