import logo from './assets/reekol-logo-bg.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    //info states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const size = 24;
    //handlesignup function
    async function handleSignup(e) {
        e.preventDefault();
        const response = await fetch("https://reekol-backend.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = response.json();
        console.log(data)
    }


    return (
        <div className="font-bricolage">
            <div className="w-full h-screen grid grid-cols-2">
                <div className="bg-[url('./assets/reekol-pattern.png')] px-8 py-14 grid justify-between">
                    <Link to="/" className='cursor-pointer`'>
                        <img src={logo} alt="logo" className='w-30' />
                    </Link>
                    <div className='flex items-end'>
                        <div>
                            <p className='text-green text-[65px] leading-15 my-6'>Ace your next <br /> exam.</p>
                            <p className='text-gray-600'>Find last minute tutorials, join study groups, <br /> and master your courses before the paper.</p>
                        </div>
                    </div>
                </div>
                <div className='my-auto'>
                    <div>
                        <p className='text-center text-[36px]'>Start using Reekol today!</p>
                        <p className='text-gray-500 text-center'>Create an account</p>
                        <div className='w-100 m-auto my-3'>
                            <div className='my-2'>
                                <p className='my-1.5'>Your Name</p>
                                <input onChange={(e) => { setName(e.target.value) }} type="text" className='h-8 w-full border border-gray-300 rounded-lg px-4 py-5 text-bricolage outline-0' />
                            </div>
                            <div>
                                <p className='my-1.5'>Your Email</p>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="text" className='h-8 w-full border border-gray-300 rounded-lg px-4 py-5 text-bricolage outline-0' />
                            </div>
                            <div>
                                <p className='my-1.5'>Password</p>
                                <input onChange={(e) => { setPassword(e.target.value) }} type="text" className='h-8 w-full border border-gray-300 rounded-lg px-4 py-5 text-bricolage outline-0' />
                            </div>
                            <div onClick={(e) => handleSignup(e)} className='w-full bg-green h-9 text-white flex items-center justify-center rounded-lg my-6'>
                                <p>Signup</p>
                            </div>
                            <div className='flex items-center my-6 justify-self-center'>
                                <hr className='w-32 text-gray-400' />
                                <p className='mx-3 text-[13px] text-gray-500'>OR SIGNUP WITH</p>
                                <hr className='w-32 text-gray-400' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex gap-2 border border-gray-200 p-2 w-fit rounded-lg px-11'>
                                    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.2-.1-2.4-.4-3.5z" fill="#FFC107" />
                                        <path d="M6.3 14.7l6.6 4.8C14.6 15.5 18.9 12 24 12c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.5 6.5 29.6 4 24 4 16.3 4 9.6 8.4 6.3 14.7z" fill="#FF3D00" />
                                        <path d="M24 44c5.5 0 10.4-2.1 14.1-5.4l-6.5-5.5C29.6 34.9 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.6 5.1C9.5 39.5 16.2 44 24 44z" fill="#4CAF50" />
                                        <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.4 4.2-4.4 5.5l6.5 5.5C43 35.8 44 30.3 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1976D2" />
                                    </svg>
                                    <p className='text-green'>Google</p>
                                </div>
                                <div className='flex gap-2 border border-gray-200 p-2 w-fit rounded-lg px-11'>
                                    <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                        fill={"currentColor"} viewBox={"0 0 24 24"}>
                                        {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                                    </svg>
                                    <p className='text-green'>Facebook</p>
                                </div>
                            </div>
                            <div className='my-12 justify-self-center'>
                                <p className='text-gray-600'>Already have an account  <Link to="/login"><span className='text-green'>Login?</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;