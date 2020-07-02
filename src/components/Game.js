import React from 'react';

import GameButton from './GameButton'
import SearchBar from './SearchBar'
import spotify from '../apis/spotify'
import SongList from './SongList'



class Game extends React.Component{
    state = {
        songs: []
    };

    onSearchSubmit = async (term) => {
        const response = await spotify.get('/search', {
            params: { q: term },
        });
        console.log(response)
        //this.setState({songs: response.data.results});
    }
    render(){
        return (
            <div className='ui container' style = {{ marginTop: '10px' }}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <SongList images = { this.state.images }/>
            </div>
        );
    }
}

export default Game;