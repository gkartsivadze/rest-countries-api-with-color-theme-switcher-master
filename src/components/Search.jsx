import { FaSearch } from 'react-icons/fa'

export default function Search({ onSubmit }) {
    return (
        <div className=' shadow-sm shadow-slate-400 my-4'>
            <button
                className='p-4'
                onClick={onSubmit}>
                <FaSearch color='gray' />
            </button>
            <input
                name="name"
                type="text"
                placeholder='Search for a country...'
                className=' outline-none'
                onKeyPress={(e) => {if(e.key == "Enter") onSubmit()}}
            />
        </div>
    )
};