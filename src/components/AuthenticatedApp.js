import React from 'react';
import Sidemenu from './Sidemenu'
import MainWindow from './MainWindow'

class AuthenticatedApp extends React.Component{
    render(){
        return(
            <div className='ui inverted masthead full-screen grid mainwindow'>
                <div className='four wide column'>
                    <Sidemenu/>
                </div>
                <div className='twelve wide column'>
                    <MainWindow/>
                </div>

            </div>
        )
    }
}

export default AuthenticatedApp;