import React from 'react';
import {setToken} from '../actions'
import {connect} from 'react-redux';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "89450131baf446758afdb5f94f35281d";
const redirectUri = "http://localhost:3000/callback";
const scopes = [
     "user-top-read",
     "user-read-currently-playing",
     "user-read-playback-state",
 ];

class UnauthenticatedApp extends React.Component{

componentDidMount() {
    // Set token
    let _token =  window.location.hash.substr(1).split('&')[0].split("=")[1];
    window.location.hash = "";
    if (_token) {
        // Set token
        //call an action say singed in and set token
        this.props.setToken(_token);
        // this.setState({
        //     token: _token
        // });
    }
  }
    render(){
        return(
            <div>
                <div className='ui inverted vertical masthead center aligned segment'>
                    <div className = 'ui text container centered'>
                        <h1 className ='ui inverted header'>Welcome to Spotify Analytics</h1>
                        <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}>
                            <button className="ui huge green button">
                                <i className="spotify icon"></i>
                                Log in with Spotify
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    Info
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return { authToken: state._token }
}

export default connect(mapStateToProps, {setToken})(UnauthenticatedApp);