import logo from './assets/reekol-logo-bg.png'

const Footer = () => {
    return (
        <div className="font-bricolage border-t border-gray-300">
            <div className="max-w-6xl mx-auto text-gray-500 max-sm:px-6">
                <div className='grid grid-cols-[40%_20%_20%_20%] gap-10 max-w-full my-12 max-sm:grid-cols-1'>
                    <div>
                        <img src={logo} alt="rekol logo" className='w-35 my-2.5' />
                        <p className='w-90 max-sm:w-full'>The modern platform for university students to find and host tutorials.</p>
                    </div>
                    <div className='grid gap-2'>
                        <p className='text-green'>Product</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Changelogs</p>
                    </div>
                    <div className='grid gap-2'>
                        <p className='text-green'>Resources</p>
                        <p>Blogs</p>
                        <p>Help center</p>
                        <p>Community</p>
                    </div>
                    <div className='grid gap-2'>
                        <p className='text-green'>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Acceptable use</p>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="flex justify-between items-center py-6">
                    <p className='max-sm:text-[0.8rem]'>© 2026 Rekol Inc, All Rights Reserved</p>
                    <div className="flex gap-4 text-green">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                            fill={"currentColor"} viewBox={"0 0 24 24"}>
                            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                            fill={"currentColor"} viewBox={"2 2 20 20"}>
                            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.04 4.04 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.03 4.03 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.02 4.02 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.46 11.46 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a8 8 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8 8 0 0 0 2.319-.624 8.7 8.7 0 0 1-2.019 2.083" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                            fill={"currentColor"} viewBox={"0 0 24 24"}>
                            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;