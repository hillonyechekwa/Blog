import React,{useEffect} from 'react';
import {StaticImage} from 'gatsby-plugin-image'

const Newsletter = () => {
    return(
        <aside className="news-letter">
            <h3>Subscribe to the news letter</h3>
            <p>Get great articles written by Hill Onyechekwa, Frontend Developer</p>
            <form>
                <div className="form-control">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email"  />
                </div>
                <div className="form-control">
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input type="text" />
                </div>
                <button id="nl-submit">Submit</button>
            </form>
            <a href="//twitter.com/madeofhill">
                <StaticImage
                src="../images/twitter.png"
                alt="twitter icon"
                className="social-icon"
                />
            </a>
        </aside>
    )
}


export default Newsletter