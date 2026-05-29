import { Link } from 'react-router-dom'
import screenshot from './assets/rekol-screenshot-enhanced.jpg'
import marker from './assets/images-floating/marker.png'
import sticky from './assets/images-floating/sticky.png'

const Hero = () => {
    return (
        <div className='overflow-x-hidden relative'>
            <img src={marker} alt="marker" className='absolute -left-36 w-100 top-50 max-sm:hidden' />
            <img
                src={sticky}
                alt="marker"
                className='absolute -right-40 top-30 w-100 max-sm:hidden'
            />
            <div className="font-bricolage mt-18 justify-self-center max-w-7xl">
                <div className="flex my-2 items-center gap-2 text-[13px] px-2 py-1 justify-self-center border border-gray-200 shadow-md rounded-2xl w-fit h-fit max-sm:text-[12px]">
                    <p className="text-gray-600">Introducing Reekol Partners</p>
                    <div className="flex text-green items-center gap-1 cursor-pointer">
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
                <div className="justify-self-center text-center w-full">
                    <p className="text-[85px] font-bricolage-bold tracking-tight text-green my-3 w-150 justify-self-center leading-20 max-sm:w-80 max-sm:text-[65px] max-sm:leading-15">Never miss a tutorial again</p>
                    <p className="text-gray-500 text-center justify-self-center w-125 max-sm:w-80">Reekol is the modern platform for last minute study groups, tracking exam prep, and finding the best tutors on campus</p>
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

                <div className="mt-24">
                    <div className="flex h-10 gap-2 border border-gray-300 px-1 w-fit items-center rounded-3xl justify-self-center shadow-lg">
                        <div className="flex gap-2 items-center w-fit px-2 rounded-3xl h-8 justify-center bg-gray-100">
                            <div className="bg-red-500 w-2 h-2"></div>
                            <p className="text-green text-[0.7rem]">Live Sessions</p>
                        </div>
                        <div className="flex gap-2 items-center w-fit px-2 rounded-3xl h-8 justify-center">
                            <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                            <p className="text-gray-500 text-[0.7rem]">Top Tutors</p>
                        </div>
                        <div className="flex gap-2 items-center w-fit px-2 rounded-3xl h-8 justify-center">
                            <div className="bg-purple-500 w-2 h-2"></div>
                            <p className="text-gray-500 text-[0.7rem]">Exam Prep</p>
                        </div>
                    </div>
                    <div className='my-12 rounded-3xl shadow-lg max-sm:px-2'>
                        <img src={screenshot} alt="" className='w-5xl max-sm:w-full max-sm:rounded-3xl max-sm:mx-2' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;