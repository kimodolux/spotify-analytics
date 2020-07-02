import React from 'react';
import { connect } from 'react-redux';
import { getToken } from '../actions'
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "../hash";

class UnauthenticatedApp extends React.Component{
    constructor() {
        super();
        this.state = {
          token: null,
          item: {
            album: {
              images: [{ url: "" }]
            },
            name: "",
            artists: [{ name: "" }],
            duration_ms: 0
          },
          is_playing: "Paused",
          progress_ms: 0
        };
    }


    componentDidMount() {
        // Set token
        let _token = hash.access_token;

        if (_token) {
          // Set token
          this.props.getToken(_token)
        }
      }

    render(){
        return(
            <div className='ui inverted vertical masthead center aligned segment'>
                <div className='ui container'>
                    <div className='ui large secondary inverted pointing menu'>
                        <a href='/' className = 'header item'> SpotifyAPI</a>
                        <div className='right item'>
                            <a className="ui inverted button"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
                            &scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                            Login to Spotify
                            </a>
                        </div>
                    </div>
                </div>

                <div className = 'ui text container'>
                    <h1 className ='ui inverted header'>Welcome to my Spotify App</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return { token :  state.token }
}

export default connect(mapStateToProps, {getToken})(UnauthenticatedApp);
