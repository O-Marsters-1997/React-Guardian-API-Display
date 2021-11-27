import React, {useState, useEffect} from "react";

const ArticleForm = ({onSearchSubmit, isValid})=> {

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // console.log(text)
        const texttoSubmit = text.trim();
        if (!texttoSubmit) {
            return
        }

        onSearchSubmit(text);

        setText("");
    }

    return(
        <div className="form-wrapper">
            <h1>Please enter a category</h1>
            <p className="form-text" style={{display: !isValid ? 'block' : 'none'}}>Your search received no results, please enter a valid category name</p>
            <form className="form" onSubmit = {handleFormSubmit}>
                <input type="text" placeholder = "Select a category" value = {text} onChange = {handleTextChange}/>
                <input type="submit" value = "Search" />
                
            </form>
         </div>
    )
}

export default ArticleForm;