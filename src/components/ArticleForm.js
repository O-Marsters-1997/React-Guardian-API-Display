import React, {useState, useEffect} from "react";

const ArticleForm = ({onSearchSubmit})=> {

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
        <>
        <h2>Please enter a category</h2>
         <form onSubmit = {handleFormSubmit}>
             <input type="text" placeholder = "Select a category" value = {text} onChange = {handleTextChange}/>
             <input type="submit" value = "Search" />
             
         </form>
         </>
    )
}

export default ArticleForm;