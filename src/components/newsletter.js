import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image'

const Newsletter = () => {
    return(
        <aside className="news-letter">
            {/* <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif", "svg"]}
                src="../images/profile-pic.svg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />            */}
            {/* TODO add optimized and refactored svg image to news letter signup */}
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
        </aside>
    )
}


export default Newsletter