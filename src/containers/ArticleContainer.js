import react, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm'
import ArticleHeader from '../components/ArticleHeader';

const ArticleContainer = () => {

    const[search, setSearch] = useState('')
    const [newsArticles, setNewsArticles] = useState([])
    const [isValid, setIsValid] = useState(true);
    
    useEffect(() =>{
        getNewsArticles()

    }, [search])

    const getSearch = (submittedSearch) => {
        setSearch(submittedSearch)
    }


    const getNewsArticles = () => {
        if (search != '') {
            fetch(`https://content.guardianapis.com/search?q=${search}&format=json&api-key=test`)
            .then(response => response.json())
            .then(data => setNewsArticles(data.response.results))
            .catch(err => console.error)
            }
        
    }
    
    return (
        <div>
            <ArticleHeader/>
            <main className="main-content">
                <ArticleForm onSearchSubmit ={(submiitedSearch)=>getSearch(submiitedSearch)} isValid = {isValid}/>
                <ArticleList articles = {newsArticles.sort((a, b) => b.webPublicationDate - a.webPublicationDate).slice(0, 10)}/>
            </main>
            <div className="footer"></div>
        </div>
    )
}

export default ArticleContainer;