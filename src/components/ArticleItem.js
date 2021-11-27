import React from "react";

const ArticleItem = ({article}) => {

    const dateConversion = function (date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let d = new Date(article.webPublicationDate)
        d = d.toLocaleDateString('en-GB', options)
        return d
    }
    

    return (
        <li className="response-list-item">
            <span className="result-title">{article.webTitle}</span>
            <br/>
            {/* {console.log(article.webPublicationDate)} */}
            <span>{dateConversion(article.webPublicationDate)}</span>
            <br/>
            <a href = {article.webUrl} target="_blank">Read the entire article at this link
                <div className="link-border"></div>
            </a>
        </li>
        
    )
}

export default ArticleItem;