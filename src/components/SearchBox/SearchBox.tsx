import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './searchBox.module.css'
import cn from 'classnames'

const { wrapper, input, searchBtn } = styles

const SearchBox = () => {
    const nav = useNavigate()
    const [query, setQuery] = useState('')

    const handleChange = (e: {target:HTMLInputElement}): void => {
        const { value } = e.target
        setQuery(value)
    }

    const handleSearch = () => {
        nav(`./profile/${query}`)
    }

    return (
        <div className={wrapper}>
            <input 
                className={input} 
                placeholder="Search by ID" 
                value={query} 
                onChange={e => handleChange(e)}
            />
            <button 
                className={cn('btn primary', searchBtn)}
                onClick={() => handleSearch()}
            >
                GO
            </button>
        </div>
    )
}

export default SearchBox