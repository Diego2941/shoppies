import React from 'react'
import { useGlobalContext } from './AppProvider';
import { BsSearch } from 'react-icons/bs'

const Search = () => {
    const { setSearchTitle } = useGlobalContext();
    const title = React.useRef('');

    const handleChange = () => {
         setSearchTitle(title.current.value);
    }

    return (
        <section className="search">
            <form className="search-form" action="">
                <div>
                    <label htmlFor="search-title">Movie Titles</label>
                </div>
                <div className="search-bar">
                    <BsSearch className="icon-static"/>
                    <input className="input-field" type="text" id="search-title" placeholder="Search Movie Title ..." ref={title} onChange={handleChange}/>
                </div>
            </form>
        </section>
    )
}

export default Search
