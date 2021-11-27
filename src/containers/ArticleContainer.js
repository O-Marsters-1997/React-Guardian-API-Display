import react, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm'

const ArticleContainer = () => {

    const[search, setSearch] = useState('')
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() =>{
        getNewsArticles()
    })

    const getSearch = (submittedSearch) => {
        setSearch(submittedSearch)
    }


    const getNewsArticles = () => {
        if (search != '') {
            fetch(`https://content.guardianapis.com/search?q=${search}&format=json&api-key=test`)
            .then(response => response.json())
            .then(data => setNewsArticles(data.response.results))
            .catch(err => console.error);
            }
        
    }
    
    return (
        <div>
            <ArticleForm onSearchSubmit ={(submiitedSearch)=>getSearch(submiitedSearch)} />
            <ArticleList articles = {newsArticles}/>
        </div>
    )
}

export default ArticleContainer;