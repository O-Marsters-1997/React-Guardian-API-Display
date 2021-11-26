import react, {useState, useEffect} from 'react';

const ArticleContainer = () => {

    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() =>{
        getNewsArticles()
    }, [])

    const getNewsArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(response => response.json())
        .then(data => setNewsArticles(data))
    }

    return (
        <h2>hello world</h2>
    )
}

export default ArticleContainer;