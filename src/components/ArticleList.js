import React from "react";
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {

    // console.log(articles)
    const article = articles.map((article, index) => {
        return <ArticleItem article = {article} key = {index}/>
    }) 

    return (
        <ol>
            {article}
        </ol>
    )
}

export default ArticleList;