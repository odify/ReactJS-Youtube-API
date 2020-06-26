import React, { useState } from 'react'
import './style.css'


export const SearchBar = ({onSearchSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        onSearchSubmit(searchTerm)
    }
    return (
      
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="video search" value={searchTerm} onChange={searchTermHandler} />
                </div>
                <hr className="header-line"></hr>
            </form>
        </div>
    );
}