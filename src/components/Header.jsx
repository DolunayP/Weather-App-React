import React from 'react'

const Header = ({ searchedWord, handleSearch, handleSubmit }) => {
    return (
        <div>
            <h1 className='title'>Weather Forecast APP</h1>
            <div className='input-container'>
                <form onSubmit={e => { handleSubmit(e) }}>
                    <input type="text" className='location-input' placeholder='Type City Name...' value={searchedWord} onChange={handleSearch} />
                </form>
            </div>
        </div>
    )
}

export default Header