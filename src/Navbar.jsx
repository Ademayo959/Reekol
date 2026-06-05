import logo from './assets/reekol-logo-bg.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='font-bricolage border-b border-gray-100 max-sm:px-4'>
            <div className='max-w-7xl m-auto py-4 flex items-center justify-between'>
                <Link to="/">
                    <div className='cursor-pointer'>
                        <img src={logo} alt="logo" className='w-35 max-sm:w-25' />
                    </div>
                </Link>
                <div className='flex gap-6 text-gray-600 max-sm:hidden'>
                    <p className='cursor-pointer'>Products</p>
                    <p className='cursor-pointer'>Solutions</p>
                    <Link to="/resources">
                        <p className='cursor-pointer'>Resources</p>
                    </Link>
                </div>
                <div className='flex gap-4'>
                    <Link to="/login">
                        <div className='border border-green-900 w-fit px-4 text-center h-9 flex items-center justify-center rounded-2xl cursor-pointer max-sm:px-2 max-sm:h-8 max-sm:rounded-lg'>
                            <p className='text-green max-sm:text-[14px]'>Log In</p>
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className='bg-green w-fit px-4 text-center h-9 flex items-center justify-center rounded-2xl cursor-pointer max-sm:px-2 max-sm:h-8 max-sm:rounded-lg'>
                            <p className='text-white max-sm:text-[14px]'>Sign Up</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;