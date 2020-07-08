import React, { Component } from 'react'
import {connect} from 'react-redux'

class SongCard extends Component {
    renderSongCard = () =>{
        if(this.props.song){
            console.log(this.props.song)
            return (
                <div>
                    {this.props.song}
                </div>
            )
        }
    }

    render() {
        return(
        <div className='ui'>
            {this.renderSongCard()}
        </div>

        )
    }
}

const mapStateToProps = (state) =>({
    song: state.music.song,
});

export default connect(mapStateToProps)(SongCard);