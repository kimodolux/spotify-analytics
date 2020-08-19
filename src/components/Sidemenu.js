import React from 'react';
import {connect} from 'react-redux'
import { fetchPlaylists, fetchPlaylist } from '../actions'

class Sidemenu extends React.Component{
    componentDidMount = ()=>{
        this.props.fetchPlaylists(this.props.authToken);
    }

    selectPlaylist = (playlistId) =>{
        this.props.fetchPlaylist(this.props.authToken, playlistId);
    }

    renderPlaylists(){
        if(this.props.playlists){
            return this.props.playlists.map(playlist =>{
                return(
                    <a className='item' key={playlist.id} onClick={() => this.selectPlaylist(playlist.id)}>
                        <p> {playlist.name} </p>
                    </a>
                );
            });
        }
    }
    render(){
        return(
            <div className='ui inverted visible sidebar vertical menu sidemenu'>
                <h1 className='ui inverted header'> Playlists </h1>
                {this.renderPlaylists()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    authToken: state.auth.authToken,
    playlists: state.music.playlists
})

export default connect(mapStateToProps, {fetchPlaylists, fetchPlaylist})(Sidemenu);