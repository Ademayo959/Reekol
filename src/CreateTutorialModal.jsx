const CreateTutorialModal = ({setIsModalActive}) => {
    return (
        <div onClick={(e) => { e.stopPropagation() }} className=" border border-gray-300 rounded-xl bg-white w-[48%] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2">
            <div className="p-4 border-b border-gray-300 flex justify-between">
                <div>
                    <p className="text-[18px]">Post a tutorial</p>
                    <p className="text-[14px] text-gray-500">Fill in the datils below to list your tutorial on reekol</p>
                </div>
                <div onClick={()=>{setIsModalActive(false)}} className="text-gray-500 border border-gray-300 w-fit p-1 rounded-lg h-fit items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <div className="py-2">
                    <p>TUTORIAL TITLE</p>
                    <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g MTS 201 - Integration Techniques" />
                </div>
                <div className="grid grid-cols-2 gap-4 py-2">
                    <div>
                        <p>TUTOR NAME</p>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="Your name" />
                    </div>
                    <div>
                        <p>HOSTED BY</p>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g NUESA, SRC" />
                    </div>
                </div>
                <div className="py-2">
                    <p>COURSE CODE</p>
                    <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g MTS 201 - Integration Techniques" />
                </div>
                <div className="grid grid-cols-2 gap-4 py-2">
                    <div>
                        <p>DATE</p>
                        <input type="date" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="Your name" />
                    </div>
                    <div>
                        <p>TIME</p>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g 3:00PM - 5:00PM" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-2">
                    <div>
                        <p>LOCATION</p>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g Hall, Lab or Classroom" />
                    </div>
                    <div>
                        <p>FEE</p>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg px-3 outline-green-900" placeholder="e.g $50 or FREE" />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 px-4 py-5">
                <div className="flex justify-between items-center">
                    <div>
                    <p className="text-gray-500 text-[13px]">Your tutorial would be visible to all students on campus</p>
                </div>
                <div className="flex gap-3">
                    <div onClick={()=>{setIsModalActive(false)}} className="bg-gray-100 border border-gray-300 w-fit px-3 rounded-lg py-2 cursor-pointer">
                        <p>Cancel</p>
                    </div>
                    <div className="bg-green text-white flex w-fit px-3 rounded-lg py-2 gap-2 items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        <p>Post Tutorial</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTutorialModal;