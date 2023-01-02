/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import PasswordStrengthMeter from './PasswordPatreen';
import google from '../assets/flat-color-icons_google.png';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

class Form extends Component {
    state = {
        isAgree: false,
        isInformed: false,
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        massagePasword: false,
        massageEmail: false,
        massage: false,
    }

    schema = yup.object().shape({
        name: yup.string().required().min(6, "name must be more than 5").max(16, "must be less than 16").lowercase("should be lower case"),
        email: yup.string().email().required(),
        password: yup
            .string()
            .required('Please Enter your password')
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

    handlPaswordChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this.state.restPassword !== this.state.password) {
            this.setState((preState) => {
                return preState.massage = false
            });
        }
        this.setState({
            [name]: value
        });
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (this.state.massagePasword != "") {
            return this.state.massagePasword = false

        }
        else if (this.state.massagePasword != "") {
            return this.state.massagePasword = false

        }
        this.setState({
            [name]: value
        });
        if (this.state.restPassword === this.state.password) {
            this.setState((preState) => {
                return preState.massage = false
            });
        }
    };
    handleSubmit = () => {

        this.schema.validate(
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                isAgree: this.state.isAgree
            }, { abortEarly: false }).catch((e) =>
                console.error(e.errors)
            )



        // if (this.state.email === '') {
        //     this.setState((preState) => {
        //         return preState.massageEmail = true
        //     });
        // }
        // else if (this.state.password === "") {
        //     this.setState((preState) => {
        //         return preState.massagePasword = true, preState.massageEmail = false
        //     });
        // }
        //  if (this.state.password != this.state.restPassword) {
        //     this.setState((preState) => {
        //         return preState.massagePasword = false, preState.massage = true
        //     });
        // }
        // else if (this.state.isAgree === false) {
        //     toast.error('يجب عليك الموافقة على الأحكام والشروط', "", {
        //         disableTimeOut: false,
        //         titleClass: 'toaster_title',
        //         messageClass: 'toaster_messge',
        //         timeOut: 5000,
        //         closeButton: true
        //     })
        // }
        // else {
        //     toast.success('تم تسجيل الدخول بنجاح', "", {
        //         disableTimeOut: false,
        //         titleClass: 'toaster_title',
        //         messageClass: 'toaster_messge',
        //         timeOut: 5000,
        //         closeButton: true
        //     })
        // }

    };
    render() {
        const { Fun } = this.props
        return (
            <div className='form' onSubmit={this.handleSubmit}>
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
                        name='restPassword'
                        type={"password"}
                        value={this.state.confirmPassword}
                        onChange={this.handlPaswordChange} />
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