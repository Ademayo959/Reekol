import { useState } from "react";

const FAQ = () => {
    const faqs = [
        {
            question: "How much does it cost?",
            answer: "The platform is completely free for students to use. You can discover tutorials, explore study sessions, connect with tutors, and access learning opportunities without paying any subscription fee or hidden charges."
        },
        {
            question: "Can anyone post a tutorial?",
            answer: "Yes, any registered student can post a tutorial. However, tutors are rated by attendees after sessions, allowing the community to identify the most helpful and reliable tutors while encouraging high-quality learning experiences."
        },
        {
            question: "How do I verify a location?",
            answer: "Tutorial locations include detailed venue information, maps, and directions whenever available. Students can also leave confirmations and feedback after attending sessions, helping others know whether a location is accurate and trustworthy."
        },
        {
            question: "Can I join tutorials outside my department?",
            answer: "Absolutely. The platform is designed to encourage collaborative learning across different departments and skill levels, allowing students to explore tutorials, workshops, and study sessions beyond their primary field of study."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)
    return (
        <div className="font-bricolage my-18">
            <div>
                <p className="text-5xl text-green text-center max-sm:leading-15 max-sm:text-[2.7rem] ">Frequently asked Questions</p>
                <div className="justify-self-center mt-12 grid gap-y-4 max-sm:px-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 w-150 rounded-3xl p-2 max-sm:w-full max-sm:rounded-2xl max-sm:p-1">
                            <div className="flex items-center justify-between p-2" onClick={() => setOpenIndex(openIndex == index ? null : index)}>
                                <p className="text-green">{faq.question}</p>
                                <span className="ml-4">{openIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-400 ${openIndex == index ? `max-h-90 opacity-100` : `max-h-0 opacity-0`}`}>
                                <p className="p-2 text-gray-500">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;