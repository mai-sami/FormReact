/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import PasswordStrengthMeter from './PasswordPatreen';
import google from '../assets/flat-color-icons_google.png';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../Api';
import axios from 'axios';

class Form extends Component {
    state = {
        isAgree: false,
        isInformed: false,
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        isLodding: false,
        massagePasword: false,
        massageEmail: false,
        massage: false,
    }

    schema = yup.object().shape({
        name: yup.string().required().min(3, "name must be more than 3").max(16, "must be less than 16"),
        email: yup.string().email("Invalid email format").required("Please Enter your Email"),
        password: yup
            .string()
            .required('Please Enter your Password')
            .matches(
                "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        isAgree: yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
    });


    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });


    };
    handleSubmit = () => {
        this.setState({ isLoading: true })
        this.schema.validate(
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                isAgree: this.state.isAgree
            }, { abortEarly: false }).then(async (name, email, password) => {
                const res = await axios.post(`${BaseUrl}/users/signup`,
                    {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    })
                this.setState({ isLodding: false })

                toast.success('تم تسجيل الدخول بنجاح', "", {
                    disableTimeOut: false,
                    titleClass: 'toaster_title',
                    messageClass: 'toaster_messge',
                    timeOut: 5000,
                    closeButton: true
                })
            }).catch((e) =>
                console.error(e.errors)
            )
    }
    render() {
        const { Fun } = this.props
        return (
            <div className='form' >
                <label className='formGroup'>
                    Name*
                    <input
                        className='mb'
                        placeholder='Enter email address'
                        type="name"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange} />

                </label>
                <label className='formGroup'>
                    Email address*
                    <input
                        className='mb'
                        placeholder='Enter email address'
                        type="email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massageEmail ? " Please enter your email" : ""} </p>
                </label>
                <label className='formGroup'>
                    Create password*
                    <input
                        placeholder='Password'
                        name='password'
                        type={"password"}
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massagePasword ? " Please enter your Password" : ""} </p>
                </label>
                <PasswordStrengthMeter password={this.state.password} />

                <label className='formGroup'>
                    Repeat password*
                    <input
                        placeholder='Repeat password'
                        name='confirmPassword'
                        type={"password"}
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massage ? " Your Password no matched......!" : ""} </p>

                </label>
                <label className='formGroup--custom agrees'>
                    <input
                        name="isAgree"
                        type="checkbox"
                        checked={this.state.isAgree}
                        onChange={this.handleInputChange} />
                    I agree to terms & conditions
                </label>
                <div className='formGroup--custom'>
                    <input type="submit" value="Register Account" onClick={this.handleSubmit} />

                </div>
                <div className='dividers'>
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <div className=' formGroup--customs BackLogin'>
                    <img src={google} alt="google" className='google' />
                    <Link to={'/login'}>
                        <input type="submit" onClick={Fun} value="login" />
                    </Link>
                    <ToastContainer />
                </div>


            </div>

        )
    }
}

export default Form