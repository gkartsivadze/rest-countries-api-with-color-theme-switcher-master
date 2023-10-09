import { FaMoon } from 'react-icons/fa'

export default function Header() {
    return (
        <nav className='flex justify-between px-4 py-6 border-b-[1px] border-dark-grey'>
            <h1 className='font-extrabold'>Where in the world?</h1>
            <button className=' font-semibold'>
                <FaMoon className='inline me-2' /> Dark Mode
            </button>
        </nav>
    )
};
