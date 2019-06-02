import * as React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../models';

interface AppProps{
    title:string    
}

class App extends React.Component<AppProps>{
    
    render(){
        const {title} = this.props
        return (
            <div>App Component: {title}</div>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    title:state.status
})

export default connect<AppProps,{}>(mapStateToProps)(App)