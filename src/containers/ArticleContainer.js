import react, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm'
import ArticleHeader from '../components/ArticleHeader';



const ArticleContainer = () => {

    require('dotenv').config();
    const API = process.env.REACT_APP_GUARDIAN_API_KEY;
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
            fetch(`https://content.guardianapis.com/search?page-size=200&q=${search}&format=json&api-key=${API}`)
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
                <ArticleList articles = {newsArticles.sort((a, b) => b.webPublicationDate - a.webPublicationDate).slice(0, 25)}/>
            </main>
            <div className="footer"></div>
        </div>
    )
}

export default ArticleContainer;