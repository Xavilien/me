import React from "react";

export function Header() {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        <a className="navbar-brand logo_h" href="https://www.facebook.com"><img src="" alt="" /></a>

                        {/* For the there bars at the top right hand corner when collapsed */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>

                        {/* Navbar items */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" href={'./'}>Home</a></li>
                                <li className="nav-item"><a className="nav-link" href={'./'}>About</a></li>
                                <li className="nav-item"><a className="nav-link" href={'./'}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}