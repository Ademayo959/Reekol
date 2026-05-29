const CTAsection = () => {
    return (
        <div className="font-bricolage my-32 max-sm:px-3">
            <div className="text-center">
                <p className="text-green text-[54px] leading-14 justify-self-center w-250 max-sm:w-full">Academic success isn't just about attending classes.</p>
                <p className="text-gray-500 text-5xl max-sm:w-full">It's about passing exams.</p>
            </div>
            <div className="flex gap-4 justify-self-center my-8 max-sm:grid max-sm:w-full">
                <div className='bg-green w-fit px-4 text-center h-11 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer max-sm:w-full max-sm:rounded-md'>
                    <p className='text-white'>Start learning today</p>
                </div>
                <div className='border border-gray-300 w-fit px-4 text-center h-11 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer max-sm:w-full max-sm:rounded-md'>
                    <p className='text-green'>Become a tutor</p>
                </div>
            </div>
        </div>
    );
}

export default CTAsection;