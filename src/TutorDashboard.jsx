import man from "./assets/man.jpeg"

const TutorDashboard = () => {
    const tutors = [
        {
            name: "Adeyemi Tunde",
            level: "400L",
            department: "Mathematics",
            rating: 4.9,
            courses: ["MTS 102", "MTS 202", "MTS 301"],
        },
        {
            name: "Sarah Kelechi",
            level: "200L",
            department: "Physics",
            rating: 4.8,
            courses: ["PHY 101", "PHY 201"],
        },
        {
            name: "Micheal Babatunde",
            level: "300L",
            department: "Computer Science",
            rating: 4.9,
            courses: ["CSC 102", "CSC 202", "CSC 301"],
        },
        {
            name: "Chisom Okafor",
            level: "200L",
            department: "Biology",
            rating: 4.3,
            courses: ["BIO 101", "BIO 102", "BIO 201"],
        },
        {
            name: "Fatima Aliyu",
            level: "300L",
            department: "Chemistry",
            rating: 4.9,
            courses: ["CHE 102", "CHE 202", "CHE 301"],
        },
        {
            name: "Tobi Adeyinka",
            level: "200L",
            department: "Economics",
            rating: 4.5,
            courses: ["ECN 101", "ECN 102", "ECN 201"],
        },
        {
            name: "Amaka Eze",
            level: "200L",
            department: "Mathematics",
            rating: 4.5,
            courses: ["MTS 101", "MTS 102", "MTS 201"],
        },
    ]


    return (
        <div>
            <div>
                <div className='flex justify-between border-b border-gray-300 px-4 py-4'>
                    <div className='grid leading-5'>
                        <p className="text-[23px]">All tutors</p>
                        <p className="text-[13px] text-gray-500 mt-0.5">Browse all available tutors on campus</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex px-2 py-1 gap-2 border border-gray-200 w-100 items-center text-gray-600 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" className='w-90 h-8 outline-0' placeholder='Search by name or course' />
                        </div>
                    </div>
                </div>
                <div className="flex px-4 py-2 gap-4">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <p className="text-gray-500">7 tutors registered</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="bg-green-400 h-2 w-2 rounded-full"></div>
                        <p className="text-gray-500">7 tutors registered</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 px-4">
                {tutors.map((tutor) => (
                    <div className="w-65 border border-gray-300 rounded-lg shadow-md ">
                        <div className="border-b border-gray-300">
                            <div className="flex justify-between items-center p-2">
                                <img src={man} alt="" className="w-12 h-12 rounded-full object-cover" />
                                <div className="leading-4">
                                    <p>{tutor.name}</p>
                                    <p className="text-gray-500 text-[13px]">{tutor.department}</p>
                                </div>
                                <div className="px-1 rounded-md border border-gray-300 w-fit">
                                    <p>{tutor.level}</p>
                                </div>
                            </div>
                        </div> 
                        <div className="border-b border-gray-300">
                            <div className="p-2">
                                <p className="text-gray-600 tracking-wide font-sans">TEACHES</p>
                                <div className="flex gap-3 py-2">
                                    {tutor.courses.map((course) => (
                                        <div className="border border-gray-300 w-fit px-1 rounded-sm bg-gray-50 shadow-sm">
                                            <p className="text-[13px]">{course}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-center py-2 text-green">View Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TutorDashboard;