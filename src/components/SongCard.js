import React, { Component } from 'react'
import {connect} from 'react-redux'

class SongCard extends Component {
    convertMsToMinutes(duration){
        var minutes = Math.floor(duration/60000);
        var seconds = ((duration % 60000)/1000).toFixed(0);
        return minutes + (seconds < 10 ? ':0' : ':') + seconds;
    }

    getYearFromReleaseDate(releaseDate){
        return releaseDate.split('-')[0];
    }


    renderSongCard = () =>{
        if(this.props.song){
            console.log(this.props.song)
            const {song} = this.props
            return (
                <div className='ui container'>
                    <img className="ui medium circular image" src={song.album.images[1].url} alt="Album Picture"></img>
                    <h3>Song: {song.name}</h3>
                    <h5>Artist: {song.artists[0].name}</h5>
                    <h5>Album: {song.album.name}</h5>
                    <p>Duration: {this.convertMsToMinutes(song.duration_ms)} </p>
                    <p>Year: {this.getYearFromReleaseDate(song.album.release_date)}</p>
                </div>
            )
        }
        else if(this.props.selectedPlaylist){
            return(
                <div className='six wide column'>
                    Select a song
                </div>
            )
        }
    }

    render() {
        return(
        <div className='ui container'>
            {this.renderSongCard()}
        </div>

        )
    }
}

const mapStateToProps = (state) =>({
    song: state.music.selectedSong,
    selectedPlaylist: state.music.selectedPlaylist,
});

export default connect(mapStateToProps)(SongCard);