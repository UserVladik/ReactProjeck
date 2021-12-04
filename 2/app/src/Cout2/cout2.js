import React from 'react'
import {Click} from '../App'

export default props => {
    return (
        <div style = {{
            border: '1px solid #0000FF',
            width: 200,
            margin: 'auto',
        }}>
            <h2>Cout</h2>
            <Click.Consumer>
                {clicked => clicked ? <p>Clicd</p>:null} 
            </Click.Consumer>
            
        </div>
    )
} 