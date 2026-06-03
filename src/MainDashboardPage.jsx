import { useState } from 'react';
import CreateTutorialModal from './CreateTutorialModal';
import profile1 from './assets/dev1.jpg';
import profile2 from './assets/dev2.jpg';
import profile3 from './assets/dev3.jpg';


const MainDashboardPage = () => {
    const [isModalActive, setIsModalActive] = useState(false)
    const tutorials = [
        {
            name: "MTS 202",
            time: "6:00pm - 8:00pm",
            location: "FBN LT",
            tutor: "Bunday",
            fee: "Free",
            date: "Today"
        },
        {
            name: "MTS 306",
            time: "2:00pm - 4:00pm",
            location: "SOC 3in1 LT",
            tutor: "Bunday",
            fee: "Free",
            date: "Today"
        },
        {
            name: "CHE 102",
            time: "6:00pm - 8:00pm",
            location: "ETF",
            tutor: "Kayshow",
            fee: "Free",
            date: "Today"
        },
        {
            name: "MTS 102",
            time: "7:00pm - 9:00pm",
            location: "LT 2",
            tutor: "Machinery",
            fee: "Free",
            date: "Today"
        },
        {
            name: "MEE 206",
            time: "4:00pm - 7:00pm",
            location: "SEET LR III",
            tutor: "Samuel",
            fee: "Free",
            date: "Tomorrow"
        },
        {
            name: "CSC 203",
            time: "3:00pm - 5:00pm",
            location: "LT I",
            tutor: "E-simple",
            fee: "Free",
            date: "Today"
        },
    ]
    

    return (
        <div>
            <div className='z-0'>
                <div className='flex justify-between border-b border-gray-300 px-4 py-4'>
                    <div className='flex px-2 py-1 gap-2 border border-gray-200 w-100 items-center text-gray-600 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" className='w-90 h-8 outline-0' placeholder='Search Tutorials here' />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <div onClick={() => setIsModalActive(true)} className='flex gap-0.5 bg-green w-fit text-white p-2 rounded-lg cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p>Post Tutorial</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 my-3'>
                    <div>
                        <p className='text-[40px]'>Welcome back, Oluwamayowa 👋🏼</p>
                        <p className='text-[20px] text-gray-500'>You have 2 tutorials to attend today</p>
                    </div>
                    <div className='my-8 flex gap-10'>
                        <div className='border border-gray-300 py-3 px-5 w-75 rounded-xl'>
                            <div className='bg-green-50 h-10 w-10 flex items-center justify-center rounded-full text-green'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                </svg>
                            </div>
                            <p className='text-[30px]'>3</p>
                            <p className='text-gray-600'>Upcoming Tutorials</p>
                        </div>
                        <div className='border border-gray-300 py-3 px-5 w-75 rounded-xl'>
                            <div className='bg-green-50 h-10 w-10 flex items-center justify-center rounded-full text-green'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                            </div>
                            <p className='text-[30px]'>15</p>
                            <p className='text-gray-600'>Saved Topics</p>
                        </div>
                        <div className='border border-gray-300 py-3 px-5 w-75 rounded-xl'>
                            <div className='bg-green-50 h-10 w-10 flex items-center justify-center rounded-full text-green'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <p className='text-[30px]'>2</p>
                            <p className='text-gray-600'>Tutors</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-[70%_28%] gap-[2%]'>
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[20px]'>Happening Today</p>
                                <p className='text-green'>View all</p>
                            </div>
                            <div className="grid grid-cols-2 my-4 gap-6">
                                {tutorials.map((tutorial, index) => (
                                    <div key={index} className="w-88 bg-white px-5  py-2 rounded-2xl border border-gray-300 shadow-md">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[35px] font-extrabold">{tutorial.name}</p>
                                            <div className="bg-green-100 flex w-fit rounded-2xl gap-2 items-center px-2 py-1">
                                                <div className="bg-green h-2 w-2 rounded-full"></div>
                                                <p>{tutorial.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 my-2">
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <p>{tutorial.time}</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                                <p>{tutorial.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 my-2">
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <p>{tutorial.tutor}</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <p>{tutorial.fee}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="bg-green text-white flex items-center gap-2 justify-center p-2.5 my-2 rounded-xl">
                                                <p className="text-[16px]">View Details</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='border border-gray-300 p-4 h-fit rounded-xl pb-0'>
                            <p className='text-[22px]'>Top Tutors</p>
                            <div className='flex justify-between items-center my-4'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={profile1} alt="" className='h-9 w-9 rounded-full object-cover' />
                                    </div>
                                    <div>
                                        <p>Adeyemi T.</p>
                                        <p className='text-gray-500'>Mathematics</p>
                                    </div>
                                </div>
                                <div className='flex items-center bg-green-50 w-16 h-8 rounded-md px-2 gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <p>4.9</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={profile2} alt="" className='h-9 w-9 rounded-full object-cover' />
                                    </div>
                                    <div>
                                        <p>Jinuade P.</p>
                                        <p className='text-gray-500'>Sciences</p>
                                    </div>
                                </div>
                                <div className='flex items-center bg-green-50 w-16 h-8 rounded-md px-2 gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <p>3.9</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={profile3} alt="" className='h-9 w-9 rounded-full object-cover' />
                                    </div>
                                    <div>
                                        <p>Micheal B.</p>
                                        <p className='text-gray-500'>Computer Science</p>
                                    </div>
                                </div>
                                <div className='flex items-center bg-green-50 w-16 h-8 rounded-md px-2 gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <p>4.6</p>
                                </div>
                            </div>
                            <hr className='text-gray-300' />
                            <div className='text-center text-gray-500 my-4'>
                                <p>Find more tutors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalActive && (
                <div className='fixed w-screen h-screen bg-black/70 inset-0 z-99' onClick={() => { setIsModalActive(false) }}>
                    <CreateTutorialModal />
                </div>
            )}
        </div>
    );
}

export default MainDashboardPage;