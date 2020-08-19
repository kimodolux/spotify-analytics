import React from 'react';
import {connect} from 'react-redux';
import SongList from './SongList'
import SongCard from './SongCard';
import {resetToken} from '../actions'


class MainWindow extends React.Component{
    logout(){
        this.props.resetToken();
    }

    render(){
        return(
            <div>
                <div className='ui secondary pointing menu'>
                    <div className="right menu">
                        <a className="ui item" onClick={()=>this.logout()}>Logout</a>
                    </div>
                </div>
                <div className="ui inverted grid">
                    <div className='six wide column'>
                        <SongList/>
                    </div>
                    <div className='six wide column'>
                        <SongCard/>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps= (state) =>({
    selectedPlaylist: state.music.selectedPlaylist,
});

export default connect(mapStateToProps, {resetToken})(MainWindow);