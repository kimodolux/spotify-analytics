import React from 'react';
import {connect} from 'react-redux';

class MainWindow extends React.Component{
    renderPlaylistInfo = () => {
        if(this.props.selectedPlaylist){
            return(
                <div>
                    <h1>{ this.props.selectedPlaylist.name }</h1>
                    <p> { this.props.selectedPlaylist.description} </p>
                </div>
            )
        }
    }

    renderTracks = () => {

        if(this.props.selectedPlaylist){
            return this.props.selectedPlaylist.tracks.items.map(song => {
                return(
                    <div className="item" key={song.track.id}>
                        <img className="ui mini image" src={song.track.album.images[2].url} alt='album art'></img>
                        <div className="content">
                            <a className="header">{song.track.name}</a>
                            <div className='white'> {song.track.album.name} </div>
                            <div className= 'white'> {song.track.artists[0].name} </div>
                        </div>
                    </div>
                )
            });
        }
    }

    render(){
        return(
            <div className='ui container mainwindow'>
                {this.renderPlaylistInfo()}
                <div className="ui relaxed divided list">
                    {this.renderTracks()}
                </div>
            </div>
         );
    }
}

const mapStateToProps= (state) =>({
    authToken: state.auth.authToken,
    selectedPlaylist: state.music.selectedPlaylist,
});

export default connect(mapStateToProps)(MainWindow);