import React, { Component } from 'react'
import './Auth.css'
import Buttom from '../../components/UI/Button/Button'
import Input from '../../components/UI/input/input'
import is from  'is-js'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends Component{

    state = {
        isForm: false,
        formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
            required: true,
            email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validation: {
            required: true,
            minLength: 6
            }
        }
        }
    }
    
    login = () => {
    
    }
    
    regis = () => {
    
    }
    
    sub = event => {
        event.preventDefault()
    }
    
    validateC(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true 
            if (validation.required) {
                isValid = value.trim() !== '' && isValid
            }
            if (validation.email) {
                isValid = validateEmail(value) && isValid
            }
            if (validation.minLength) {
                isValid = value.length >= validation.minLength && isValid
            }
            return isValid
    }

    onChangeHandler = (event, controlName) => {
        

        const formControls = { ...this.state.formControls}
        const control = { ...formControls[controlName]}

        control.value = event.target.value
        control.touched = true 
        control.valid = this.validateC (control.value,control.validation)
        
        formControls [controlName] = control

        let isForm = true 
        Object.keys(formControls).forEach(name =>{
            isForm=formControls[name].valid && isForm
        })

        this.setState ({
            formControls,isForm
        })
    }
    
    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
        const control = this.state.formControls[controlName]
        return (
            <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event, controlName)}
            />
        )
    })
}
    render() {
        return (
            <div className = 'Auth'>
                <div>
                <h1>Авторизация</h1>

                <form onSubmit = {this.sub} className = 'form'>
                    
                    { this.renderInputs() } 
                    
                    <Buttom 
                    type = 'success' 
                    onClick = {this.login}
                    disabled = {!this.state.isForm}
                    >Войти
                    </Buttom>

                    <Buttom
                    type = 'success' 
                    onClick = {this.regis}
                    disabled = {!this.state.isForm}
                    >
                    Регистрация
                    </Buttom>

                </form>

                </div>
            </div>
        )
    }
}
