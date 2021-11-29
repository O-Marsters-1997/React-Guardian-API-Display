import react, {useState, useRef, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm'
import ArticleHeader from '../components/ArticleHeader';



const ArticleContainer = () => {

    require('dotenv').config();
    const API = process.env.REACT_APP_GUARDIAN_API_KEY;
    const [count, setCount] = useState(0);
    const[search, setSearch] = useState('')
    const [newsArticles, setNewsArticles] = useState([])
    const [isValid, setIsValid] = useState(true);
    
    const firstUpdate = useRef(true);
    useEffect(() =>{
        getNewsArticles()
    }, [search])

    useEffect(() => {
         if (firstUpdate.current) {
            firstUpdate.current = false;
            setCount(count + 1);
            return;
        }
        const listul = document.getElementsByClassName('form-item-grid')[0]
        console.log(listul)
        if (listul.innerHTML == '') {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [newsArticles])

    const getSearch = (submittedSearch) => {
        setSearch(submittedSearch)
    }


    const getNewsArticles = async () => {
        if (search != '') {
            const response = await fetch(`https://content.guardianapis.com/search?page-size=200&q=${search}&format=json&api-key=c70cf907-5664-49f9-8191-46612e9a2110`)
            // const data = await response.json();
            // setNewsArticles(data.response.results)

            .then(response => response.json())
            .then(data => setNewsArticles(data.response.results))
            
            .catch(err => console.error(err))
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