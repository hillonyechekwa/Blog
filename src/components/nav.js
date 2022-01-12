import * as React from 'react';
import {Link} from 'gatsby'

function Nav({title}) {
    return (
        <nav className="nav">
            {title}
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><a href="//buymeacoffee.com/hillonyechekwa">Buymeacoffee</a></li>
                <li><Link to="#">Podcast</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;