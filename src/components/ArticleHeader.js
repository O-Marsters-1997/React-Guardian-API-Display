import React from "react";

const ArticleHeader = () => {

    return(
        <div className="header">
            <nav className="navigation">
                <div className="title-wrapper">
                    <h2>Guardian Top Stories</h2>
                    <p className="title-caption">Stay up to date on the latest news</p>
                </div>
                <ul>
                    <li className="nav-list-item">Quick links
                        <div className="link-border"></div>
                    </li>
                    <li className="nav-list-item">Terms and conditions
                        <div className="link-border"></div>
                    </li>
                    <li className="nav-list-item">Contact
                        <div className="link-border"></div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ArticleHeader;