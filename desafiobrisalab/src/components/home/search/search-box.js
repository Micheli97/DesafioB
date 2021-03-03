import React from 'react'
import './search.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            search : undefined

        }
    }

    search(event){
        const search = event.target.search.value 
        this.preventDefault()
    }

    renderSearchBox(){
        return (
            <div>
                <form >
                    <input className="searchBox" placeholder="pesquisar..."></input>
                </form>
            </div>
        )
    }

    render(){
        return (
            <div>
                {this.renderSearchBox()}
            </div>
        )
    }
}

export default SearchBox