import logo from './assets/reekol-logo-bg.png'
import { Link } from 'react-router-dom';
import profile1 from './assets/dev1.jpg';
import profile2 from './assets/dev2.jpg';
import profile3 from './assets/dev3.jpg';

const dashboard = () => {
    return (
        <div className="font-bricolage">
            <div className="grid grid-cols-1 min-[840px]:grid-cols-[20%_80%] p-0 h-screen">
                <div className='border-r border-gray-300 top-0 left-0 h-full grid'>
                    <div>
                        <Link to='/'>
                            <div className='cursor-pointer px-6 py-4 border-b border-gray-300'>
                                <img src={logo} alt="logo" className='w-35 h-10.5' />
                            </div>
                        </Link>
                        <div className='px-4'>
                            <div className='grid gap-y-2 my-2'>
                                <p className='text-gray-600'>MENU</p>
                                <div className='grid gap-y-2'>
                                    <div className='flex gap-2 bg-green-50 p-2 rounded-xl text-green'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <p className='text-[16px]'>Dashboard</p>
                                    </div>
                                    <div className='flex gap-2 p-2 rounded-xl text-gray-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                        <p className='text-[16px] '>Search Tutorials</p>
                                    </div>
                                    <div className='flex gap-2 p-2 rounded-xl text-gray-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>
                                        <p className='text-[16px]'>My Schedule</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid gap-y-2 my-2'>
                                <p className='text-gray-600'>TUTORS</p>
                                <div className='grid gap-y-2'>
                                    <div className='flex gap-2 p-2 rounded-xl text-gray-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <p className='text-[16px]'>Tutors</p>
                                    </div>
                                    <div className='flex gap-2 p-2 rounded-xl text-gray-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                        </svg>
                                        <p className='text-[16px]'>Top Tutors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center px-4 border-t border-gray-300 h-18 mt-auto'>
                        <div className='h-11 w-11 rounded-full bg-gray-200 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p>Oluwamayowa A.</p>
                            <p>Software Eng.</p>
                        </div>
                    </div>
                </div>
                <div className=''>
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
                            <div className='flex gap-0.5 bg-green w-fit text-white p-2 rounded-lg'>
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
                                <div className='grid grid-cols-2 w-full my-8 gap-8'>
                                    <div className='w-90 border border-gray-200 p-4'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[20px]'>MTH 201: Advanced Calculus</p>
                                            <div className='px-2 py-1 bg-green-50 w-fit'>
                                                <p className='text-green'>TODAY</p>
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-[14px]'>Taught by Adeyemi T.</p>
                                        <hr className='text-gray-300 my-4'/>
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>TIME</p>
                                                <p>4:00 PM - 6:00 PM</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                                <p>LT 2, Science Faculty</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                                <p>4:00 PM - 6:00 PM</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>FEE</p>
                                                <p>Free</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-90 border border-gray-200 p-4'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[20px]'>MCS 201: Exam Prep</p>
                                            <div className='px-2 py-1 bg-green-50 w-fit'>
                                                <p className='text-green'>TODAY</p>
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-[14px]'>Taught by Blessing</p>
                                        <hr className='text-gray-300 my-4'/>
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>TIME</p>
                                                <p>10:00 AM - 12:00 PM</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                                <p>SLS 3 in 1 A</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                                <p>45/50</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>FEE</p>
                                                <p>Free</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-90 border border-gray-200 p-4'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[20px]'>MTH 112</p>
                                            <div className='px-2 py-1 bg-green-50 w-fit'>
                                                <p className='text-green'>TOMORROW</p>
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-[14px]'>Taught by Adeyemi T.</p>
                                        <hr className='text-gray-300 my-4'/>
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>TIME</p>
                                                <p>4:00 PM - 6:00 PM</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                                <p>Great Hall</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                                <p>12/30</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>FEE</p>
                                                <p>Paid</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-90 border border-gray-200 p-4'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[20px]'>MTH 301: Abstract Algebra</p>
                                            <div className='px-2 py-1 bg-green-50 w-fit'>
                                                <p className='text-green'>TODAY</p>
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-[14px]'>Taught by Parker V.</p>
                                        <hr className='text-gray-300 my-4'/>
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>TIME</p>
                                                <p>6:00 PM - 8:00 PM</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>LOCATION</p>
                                                <p>FOC 500 Cap</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>CAPACITY</p>
                                                <p>40/100</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-500 text-[13px]'>FEE</p>
                                                <p>Free</p>
                                            </div>
                                        </div>
                                    </div>
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
            </div>
        </div>
    );
}

export default dashboard;