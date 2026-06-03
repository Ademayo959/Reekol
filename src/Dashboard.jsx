import logo from './assets/reekol-logo-bg.png'
import { Link } from 'react-router-dom';
import MainDashboardPage from './MainDashboardPage';
import MyScheduleDashboard from './MyScheduleDashboard';
import SearchTutorialDashboard from './SearchTutorialDashboard';
import TutorDashboard from './TutorDashboard';
import { useState } from 'react';


const dashboard = () => {
    const [activeTab, setActiveTab] = useState("main-dashboard-page")
  


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
                                    <div onClick={() => setActiveTab("main-dashboard-page")} className={`flex gap-2 ${activeTab === "main-dashboard-page" ? `bg-green-50 text-green` : `bg-white`} p-2 rounded-xl text-gray-600`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <p className='text-[16px]'>Dashboard</p>
                                    </div>
                                    <div onClick={() => setActiveTab("search-tutorial-dashboard")} className={`flex gap-2 ${activeTab === "search-tutorial-dashboard" ? `bg-green-50 text-green` : `bg-white`} p-2 rounded-xl text-gray-600`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                        <p className='text-[16px] '>Search Tutorials</p>
                                    </div>
                                    <div onClick={() => setActiveTab("my-schedule-dashboard")} className={`flex gap-2 ${activeTab === "my-schedule-dashboard" ? `bg-green-50 text-green` : `bg-white`} p-2 rounded-xl text-gray-600`}>
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
                                    <div onClick={() => setActiveTab("tutor-dashboard")} className={`flex gap-2 ${activeTab === "tutor-dashboard" ? `bg-green-50 text-green` : `bg-white`} p-2 rounded-xl text-gray-600`}>
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
                <div className='overflow-y-auto h-full'>
                    {activeTab === "main-dashboard-page" && <MainDashboardPage />}
                    {activeTab === "my-schedule-dashboard" && <MyScheduleDashboard />}
                    {activeTab === "search-tutorial-dashboard" && <SearchTutorialDashboard />}
                    {activeTab === "tutor-dashboard" && <TutorDashboard />}
                </div>
            </div>
        </div>
    );
}

export default dashboard;