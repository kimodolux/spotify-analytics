import React from 'react';
import Sidemenu from './Sidemenu'
import MainWindow from './MainWindow'

class AuthenticatedApp extends React.Component{
    render(){
        return(
            <div className='ui inverted masthead full-screen'>
                <Sidemenu/>
                <MainWindow/>
            </div>
        )
    }
}

export default AuthenticatedApp;