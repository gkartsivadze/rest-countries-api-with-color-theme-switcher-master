import { FaSearch } from 'react-icons/fa'

export default function Search(params) {
    return (
        <div className=' shadow-sm shadow-slate-400 my-4'>
            <button className='p-4'>
                <FaSearch color='gray' />
            </button>
            <input
                type="text"
                placeholder='Search for a country...'
                className=' outline-none'
            />
        </div>
    )
};