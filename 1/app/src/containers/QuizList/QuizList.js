import React, { Component } from 'react'
import './QuizList.css'
import Quiz from '../Quiz/Quiz'
import { NavLink } from 'react-router-dom'

export default class QuizList extends Component{

    QuizList() {
        return [1,2, 3].map ((quiz, index) => {
            return (
                <li key = {index}>
                    <NavLink to = {'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className = {'QuizList'}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.QuizList()}
                    </ul>
                </div>
            </div>
        )
    }
}