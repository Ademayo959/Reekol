import Navbar from './Navbar'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';

const ResourcesPage = () => {
    const faqs = [
        {
            question: "Are the guides and articles free to access?",
            answer: "Yes, all guides, articles, and resources on this page are completely free. No subscription or payment is required to read any content on the Reekol resources page."
        },
        {
            question: "Can I search for a specific topic?",
            answer: "Yes, use the search bar at the top of the page to find articles, guides, and FAQs related to any topic you need help with on Reekol."
        },
        {
            question: "Who writes the guides and articles?",
            answer: "Guides are written by the Reekol team and experienced student contributors who understand the Nigerian university experience firsthand."
        },
        {
            question: "How often is new content added?",
            answer: "New guides and articles are added regularly as Reekol grows. You can check back anytime or follow our updates to stay informed about new resources."
        },
        {
            question: "Can I suggest a topic for a guide or article?",
            answer: "Absolutely. If there's something you'd like covered that isn't already here, reach out via the Contact Support button and we'll consider it for a future article."
        }
    ]
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
            <div className='bg-gray-100 border-y border-gray-300'>
                <div className='bg-gray-100  justify-self-center py-8 mx-auto'>
                    <div className='text-center my-8'>
                        <p className='text-[30px]'>Quick Start Guides</p>
                        <p className='text-gray-500'>Step-by-step walkthroughs for everything on Reekol</p>
                    </div>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="text-green h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Getting started with Reekol</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Becoming a Tutor</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Managing your study schedule</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Understanding Tutor Ratings</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Finding Tutorials</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className='bg-white w-90 p-4 rounded-2xl'>
                            <div className='bg-green-100 h-8 w-8 flex items-center justify-center rounded-full mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                            <div className='mb-4'>
                                <p className='font bricolage-semibold'>Getting Notified</p>
                                <p className='text-gray-500'>Create your account, set up your profile, and find your first tutorial in under 5 minutes</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-green font-bricolage-semibold'>Read Guide</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-auto'>
                <div className='grid grid-cols-[40%_60%] items-start gap-12 justify-self-center'>
                    <div className='my-18'>
                        <p className='text-green'>FAQ</p>
                        <p className='text-[35px]'>Frequently Asked Questions</p>
                        <p className='text-gray-500 text-[13px]'>Can't find what you're looking for? Reach out and we'll help</p>
                        <div className='my-6 flex gap-2 border border-gray-300 w-fit py-1 px-2 rounded-lg items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p className='text-[14px]'>Contact Support</p>
                        </div>
                    </div>
                    <div>
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </div>
            <div className='bg-green py-8 '> 
                <div className=''>
                    <div className='max-w-6xl flex justify-between items-center mx-auto'>
                    <div>
                        <p className='text-white text-[25px]'>Ready to never miss a tutorial again?</p>
                        <p className='text-gray-300 text-[13px]'>Join thousands of Nigerian students who use Reekol to stay ahead.</p>
                    </div>
                    <div className='flex gap-4'>
                        <Link to='/dashboard'>
                            <div className='bg-white w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
                                <p className='text-green'>Start For Free</p>
                            </div>
                        </Link>
                        <div className='border border-gray-100 bg-green-50/10 w-fit px-4 text-center h-9 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
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

export default ResourcesPage;