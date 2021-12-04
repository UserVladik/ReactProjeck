import React from 'react'
import './Car.css'
import wiht from '../hoc/wiht'
import PropTypes from 'prop-types'

class Car extends React.Component {

    constructor(props) {
        super(props)
            this.inputRef = React.createRef ()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
        console.log ('Car render')

        const inputClass = ['input']

        if (this.props.name !== '') {
            inputClass.push ('green')
        } else {
            inputClass.push('red')
        }
        if (this.props.name.length > 4) {
            inputClass.push ('bold')
        }
        
        return (
            <React.Fragment>
            <div className = "Car" > 
                <h3>Car name : {this.props.name}</h3>
                <p>Year : <strong>{this.props.year}</strong></p>
                <input 
                ref = {this.inputRef}
                type = "text" 
                onChange ={this.props.TitleName} 
                value={this.props.name} 
                className = {inputClass.join ( ' ' )}/>
                <button onClick = {this.props.onDelete}>Удалить</button>
            </div>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default  wiht(Car)