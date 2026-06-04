import { useState } from "react";

const SearchTutorialDashboard = () => {
    const [searchQuery, setSearchQuery] = useState("")
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

    const results = tutorials.filter((tutorial) => 
        tutorial.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) 

    return (
        <div className="w-full px-6 pt-6 bg-gray-100 h-full">
            <div>
                <div>
                    <p className="text-[40px]">Find Tutorials</p>
                    <p className="text-gray-600">Search for upcoming tutorials by course code, topic, or tutor</p>
                </div>
                <div className="flex border border-gray-300 p-2 rounded-lg justify-between my-4">
                    <div className="p-1 flex items-center gap-2 border border-gray-300 w-[80%] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input value={searchQuery} onChange={(e)=> {setSearchQuery(e.target.value)}} type="text" className="w-[85%] h-7 outline-0" placeholder="e.g. MTH 101" />
                    </div>
                    <select name="" id="" className="border border-gray-300 rounded-lg px-4">
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                    <div className="bg-green w-fit py-1 px-5 h-9 flex items-center justify-center rounded-lg">
                        <p className="text-white">Search</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="bg-green text-white px-3 py-1 w-fit rounded-4xl">
                        <p>All Tutorials</p>
                    </div>
                    <div className="bg-white text-green px-3 py-1 w-fit rounded-4xl">
                        <p>Happening Today</p>
                    </div>
                    <div className="bg-white text-green px-3 py-1 w-fit rounded-4xl">
                        <p>Free Sessions</p>
                    </div>
                    <div className="bg-white text-green px-3 py-1 w-fit rounded-4xl">
                        <p>Paid Sessions</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 my-4 gap-6">
                    {results.map((tutorial, index) => (
                        <div key={index} className="w-88 bg-white px-5  py-2 rounded-2xl">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default SearchTutorialDashboard;