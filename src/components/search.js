import React from 'react';
import {StaticImage} from 'gatsby-plugin-image'

const Search = () => {
    return(
        <form className="form-search">
            <div className="form-control">
                <label htmlFor="search">
                    {/* <StaticImage
                    src="../images/search-icon.png"
                    className="search-icon"
                    alt="search icon"
                    /> */}
                </label>
                    <input type="search" name="search" id="search" placeholder="What are you looking for?" />
            </div>
            <input type="submit" value="Search" id="search-submit" />
        </form>
    )
    }


export default Search