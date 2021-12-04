import React, { Component } from 'react'
import './Drawer.css'
import Backd from '../../UI/Backd/Backd'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'Cписок', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
]

class Drawer extends Component {
    onClick = () => {
        this.props.onClose()
    }

    renderLinks(){ 
        return links.map ((link, index) => {
            return (
                <li key= {index}>
                    <NavLink
                        to = {link.to}
                        exact = {link.exact}
                        activeClassName = {link.active}
                        onClick = {this.onClick}
                    >
                        {link.label}
                    </NavLink>          
                </li>
            )
        })
    }
    
    render(){
        const cls = ['Drawer']
        if (!this.props.isOpen) {
            cls.push ('close')
        }
        return (
            <React.Fragment>
             <nav className = {cls.join (' ')}>
                <ul>
                    {this.renderLinks ()}
                </ul>
            </nav> 
            {this.props.isOpen ?<Backd onClick = {this.props.onClick}/> : null}
            </React.Fragment>
        )
    }
}



export default Drawer