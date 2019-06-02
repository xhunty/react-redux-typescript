import * as React from 'react'

interface AppProps{
    title:string    
}

export class App extends React.Component<AppProps>{
    render(){
        const {title} = this.props
        return (
            <div>App Component: {title}</div>
        )
    }
}