import React, { Component } from "react"
import Auxiliary from '../hoc/Auxiliary'
import Cout2 from '../Cout2/cout2'

export default class Cout extends Component {
    state = {
        cout: 0
    }

    addCouter = () => {
        // this.setState ({
        //     cout:this.state.cout + 1
        // })
        this.setState ((pres) => {
            return {
                cout: pres.cout + 1
            }
        })
    }   

    render () {
        // return [
        //     <h2 key={'1'}>Число {this.state.cout}</h2>,
        //     <button key={'2'} onClick={this.addCouter}>+</button>,
        //     <button key={'3'} onClick={() => this.setState({cout: this.state.cout - 1})}>-</button>
        // ]
        return [
      <Auxiliary>
        <h2>Число : {this.state.cout}</h2>
        <button onClick={this.addCouter}>+</button>
        <button onClick={() => this.setState({cout: this.state.cout - 1})}>-</button>
        <Cout2/>
      </Auxiliary>
        ]
    }
}