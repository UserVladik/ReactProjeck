import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import Erro from './Erro/Erro'
import Cout from './Cout/cout'

export const Click = React.createContext (false)


class App extends Component {

  constructor(props) {
    super (props)

    this.state = {
      clicked: false,
      cars:[
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Roll Roys', year: 2010}
      ],
      pageTitle: 'Модели',
      show:  false
    }
  }

  show = () => {
    this.setState({
      show: !this.state.show
    })
  }

  TitleName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState ({cars})
  }
  onDelete (index) {
    const cars = this.state.cars.concat()
      cars.splice (index, 1)
        this.setState({cars})
  }
  
  button() {
    
  }

  render() {
    console.log ('App render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
      if (this.state.show) {
        cars = 
          this.state.cars.map((car, index) => {
            return (
                <Erro >
                  <Car
                  name = {car.name}
                  year = {car.year}
                  index = {index}
                  onDelete = {this.onDelete.bind(this, index)}
                  TitleName = {event => this.TitleName(event.target.value, index)}
                  />
                </Erro>
      )
    }) 
  }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
          <h1>{this.props.title}</h1>
            
            <Click.Provider value={this.state.clicked}>
              <Cout/>
            </Click.Provider>
            
            <hr/>
              <button onClick = {this.show}>Главная кнопка</button>
              <button onClick = {() => this.setState({clicked:true})}>Кнопка</button>
              <div style = {{
                    width: 400,
                    margin: 'auto',
                    paddingTop: "20px",
              }}>
                { cars }
        </div>
      </div>
    );
  }
}

export default App;