import React from 'react';
import {connect} from 'react-redux'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

class App extends React.Component{
    render(){
        return this.props.authToken ? <AuthenticatedApp/> : <UnauthenticatedApp/>;
    }
}

const mapStateToProps = (state)=>({
    authToken: state.auth.authToken
})

export default connect(mapStateToProps)(App);