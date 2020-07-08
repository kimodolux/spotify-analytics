import React from 'react';
import {connect} from 'react-redux';
import SongList from './SongList'
import SongCard from './SongCard';

class MainWindow extends React.Component{
    render(){
        return(
            <div className='ui inverted mainwindow'>
                <div className="ui inverted two column grid">
                    <SongList/>
                    <SongCard/>
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