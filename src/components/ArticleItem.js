import React from "react";

const ArticleItem = ({article}) => {

    const dateConversion = function (date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let d = new Date(article.webPublicationDate)
        d = d.toLocaleDateString('en-GB', options)
        return d
    }
    

    return (
        <li>
            <span>{article.webTitle}</span>
            {console.log(article.webPublicationDate)}
            <span>{dateConversion(article.webPublicationDate)}</span>
            <a href = {article.webUrl}>Read the entire article at this link</a>
        </li>
        
    )
}

export default ArticleItem;