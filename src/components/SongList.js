import React from 'react'
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component {
    selectSong = (song) =>{
        this.props.selectSong(song);
    }

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
                        <img className="ui mini image" src={song.track.album.images[2].url} alt='album art' onClick={() => this.selectSong(song.track)}></img>
                        <div className="content">
                            <div className="white" onClick={() => this.selectSong(song.track)}> Song: {song.track.name} </div>
                            <div className='white'> Album: {song.track.album.name} </div>
                            <div className='white'> Artist: {song.track.artists[0].name} </div>
                        </div>
                    </div>
                )
            });
        }
    }

    render() {
        return (
            <div className="ui relaxed divided list ">
                {this.renderPlaylistInfo()}
                {this.renderTracks()}
            </div>
        )
    }

}
const mapStateToProps = (state) =>({
    playlists: state.music.playlists,
    selectedPlaylist: state.music.selectedPlaylist,
})

export default connect(mapStateToProps, {selectSong})(SongList);
