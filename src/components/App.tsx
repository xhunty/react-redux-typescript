import * as React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../models';
import { Dispatch, Action } from 'redux';
import { FetchActionCreator } from '../actions';

interface IMapStateToProps{
    title:string
}
interface IMapDispatchToProps{
    fetch:() => Action
}
type AppProps = IMapStateToProps & IMapDispatchToProps


class App extends React.Component<AppProps,{}>{
    
    
    render(){

        const {title,fetch} = this.props
        fetch();
        return (
            <div onClick={fetch}>App Component: {title} </div>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    title:state.status
})
const mapDispatchToProps = (dispatch:Dispatch) =>({
    fetch:() => dispatch(FetchActionCreator())
})
export default connect<IMapStateToProps,IMapDispatchToProps,{}>(mapStateToProps,mapDispatchToProps)(App)