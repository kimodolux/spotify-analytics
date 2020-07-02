import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' }

    onSubmitForm = e =>{
        e.preventDefault()
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
        <div className = 'ui search'>
            <form onSubmit={ event => this.onSubmitForm(event) } className='ui icon input'> 
                <input
                    className = 'prompt'
                    type = 'text'
                    placeholder = 'Search songs...'
                    value = { this.state.term }
                    onChange={ (e) => this.setState({term: e.target.value}) }
                />
                <i className="search icon"></i>
            </form>
        </div>
        );
    }
}

export default SearchBar;