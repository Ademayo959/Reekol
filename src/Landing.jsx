import Navbar from "./Navbar"
import Hero from "./Hero";
import Trusted from "./Trusted";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTAsection from "./CTAsection";
import Footer from "./Footer";

const Landing = () => {
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
  return (
    <div className="overflow-x-hidden font-bricolage">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Testimonials />
      <p className="text-5xl text-green text-center max-sm:leading-15 max-sm:text-[2.7rem] mt-18 mb-0">Frequently asked Questions</p>
      <FAQ faqs={faqs} />
      <CTAsection />
      <Footer />
    </div>
  );
}

export default Landing;