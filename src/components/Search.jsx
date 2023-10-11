import { FaSearch } from 'react-icons/fa'

export default function Search({ onSubmit }) {
    return (
        <div className='flex shadow-sm shadow-slate-400 my-4 sm:flex-1'>
            <button
                className='p-4'
                onClick={onSubmit}>
                <FaSearch color='gray' />
            </button>
            <input
                name='name'
                type='text'
                placeholder='Search for a country...'
                className='flex-1 outline-none bg-transparent'
                onKeyPress={(e) => {if(e.key == 'Enter') onSubmit()}}
            />
        </div>
    )
};