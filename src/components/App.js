import React from 'react';
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

class App extends React.Component{
    render(){
        return false ? <AuthenticatedApp/> : <UnauthenticatedApp/>;
    }
}

export default App;