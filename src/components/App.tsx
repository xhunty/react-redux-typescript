import * as React from 'react'
import { connect } from 'react-redux';
import { AppState, Tip } from '../models';
import { GetData } from '../actions';
import { ThunkDispatch } from 'redux-thunk';

interface IMapStateToProps{
    title:string,
    tips:Tip[]
}
interface IMapDispatchToProps{
    fetch:() => void
}
type AppProps = IMapStateToProps & IMapDispatchToProps


class App extends React.Component<AppProps,{}>{   
    
    render(){
        const {title,fetch,tips} = this.props
        console.log('---Tips-->',tips)
        return (
            <div>
                <div onClick={fetch}>App Component: {title} </div>
                <ul>
                    {tips.map(tip => <li key={tip.id}>{tip.title}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    title:state.status,
    tips:state.tips
})
const mapDispatchToProps = (dispatch:ThunkDispatch<{},{},any>):IMapDispatchToProps => {
    return{
        fetch: async () => {
            await dispatch(GetData())
        }
    }    
}


export default connect<IMapStateToProps,IMapDispatchToProps,{}>(mapStateToProps,mapDispatchToProps)(App)