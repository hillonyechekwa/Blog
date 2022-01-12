import * as React from 'react';


function Footer () {
    return(
        <footer>
            <p className="tagline">All articles written with love by <a href="">Hill Onyechekwa</a></p>
            <nav className="footer-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>|</li>
                    <li><a href="#">Subscribe</a></li>
                    <li>|</li>
                    <li><a href="#">Other writing</a></li>
                </ul>
            </nav>
            <p id="copy"> © {new Date().getFullYear()}, hillsofcode</p>
        </footer>
    )
}


export default Footer