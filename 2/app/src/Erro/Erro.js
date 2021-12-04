import React from   'react'

export default class Erro extends React.Component {
    
    state = {
        hasErro: false,
    }

    componentDidCatch(error, info) {
        this.setState ({hasErro:true})
    }

    render ()  {
        if (this.state.hasErro) {
            return <h1 style = {{color:'red'}}>Ошибка</h1>
        }
            return this.props.children
    }
    
}