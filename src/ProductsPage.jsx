import Navbar from "./Navbar";
import Footer from "./Footer"
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import screenshot from "./assets/reekol-screenshot.png"

const ProductsPage = () => {
    return (
        <div className="font-bricolage">
            <Navbar />
            <div className="max-w-6xl mx-auto ">
                <div className="justify-self-center my-12">
                    <div className="bg-green-100 border border-green-900 px-2 rounded-2xl w-fit justify-self-center">
                        <p className="text-green text-[13px] font-bricolage-semibold">PRODUCTS</p>
                    </div>
                    <div>
                        <p className="text-[50px] leading-13 my-6 text-green w-150 text-center max-sm:px-2 max-sm:w-[95%] max-sm:justify-self-center max-sm:leading-13">Built for every Student. Designed for campus life</p>
                        <p className="text-center w-120 text-gray-500 justify-self-center max-sm:w-[95%] max-sm:justify-self-center">Reekol gives students and tutors everything they need - from finding last minute tutorials to managing a full schedule.</p>
                    </div>
                    <div className="flex gap-4 justify-self-center my-8">
                        <Link to='/dashboard'>
                            <div className='bg-green w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
                                <p className='text-white'>Start For Free</p>
                            </div>
                        </Link>
                        <div className='border border-gray-300 w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
                            <p className='text-green'>Get a Demo</p>
                        </div>
                    </div>
                </div>
                <div className="max-sm:px-2">
                    <img src={screenshot} alt="A screenshot of reekol dashboard" className="border border-gray-300 rounded-3xl mb-20 max-sm:px-2 max-sm:rounded-lg" />
                </div>
            </div>
            <div className="bg-gray-100 py-12 mt-8 border-y border-gray-300">
                <div className="max-w-6xl mx-auto">
                    <div className="justify-self-center">
                        <p className="text-[35px] text-center">Everything in One Place</p>
                        <p className="text-gray-500 text-[15px] text-center">Powerful features, all free for students - no setup, no friction</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-10 max-sm:grid-cols-1 max-sm:px-2">
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                        <div className="bg-white w-90 rounded-xl border border-gray-300 p-4 max-sm:w-full">
                            <div className="flex items-center justify-between">
                                <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <div className='bg-green-100 flex items-center justify-center w-fit text-green px-2 rounded-2xl'>
                                    <p>Core</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-[20px] font-bricolage-semibold">Tutorial Discovery</p>
                                <p className="text-gray-500 text-[16px] mt-2">Search and filter tutorials by coure, title, date - updated in real time as sessions are posted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-green py-8 '>
                <div className=''>
                    <div className='max-w-6xl flex justify-between items-center mx-auto max-sm:grid max-sm:px-4'>
                        <div>
                            <p className='text-white text-[25px]'>Ready to never miss a tutorial again?</p>
                            <p className='text-gray-300 text-[13px] max-sm:w-[95%]'>Join thousands of Nigerian students who use Reekol to stay ahead.</p>
                        </div>
                        <div className='flex gap-4 max-sm:mt-3 max-sm:grid'>
                            <Link to='/dashboard'>
                                <div className='bg-white w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer max-sm:w-full max-sm:rounded-sm'>
                                    <p className='text-green'>Start For Free</p>
                                </div>
                            </Link>
                            <div className='border border-gray-100 bg-green-50/10 w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer max-sm:w-full max-sm:rounded-sm'>
                                <p className='text-white'>Get a Demo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductsPage;