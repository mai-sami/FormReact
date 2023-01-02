/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Vector from '../../../../assets/Vector.svg'
import eyeSlash from '../../../../assets/eyeSlash.svg'
import './index.css'
import Register from '../../../../Pages/Register';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

class FormLogin extends Component {

    state = {
        isPassShow: false,
        score: 'null',
        isInformed: false,
        email: "",
        password: "",
        massagePasword: false,
        massageEmail: false,
        massage: false
    }
    schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup
            .string()
            .required('Please Enter your password')
    });

    passwordVisibility = () => {
        const { isPassShow } = this.state;
        this.setState({ isPassShow: !isPassShow })
    };

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if (this.state.massagePasword != "") {
            return this.state.massagePasword = false

        }
        this.setState({
            [name]: value
        });


    };
    handleSubmit = () => {
        console.log(this.state.massageEmail)
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
        if (this.state.email === '') {
            this.setState((preState) => {
                return preState.massageEmail = true
            });
        }
        else if (this.state.password === "") {
            this.setState((preState) => {
                return preState.massagePasword = true, preState.massageEmail = false
            });

        }

        else {
            toast.success('تم تسجيل الدخول بنجاح', "", {
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
        }

    };
    as = (e) => {
        const { StateRoutes } = this.props;
        console.log(StateRoutes, "ola")
        StateRoutes((prevState) => {
            const UpdateRoute = prevState.pathHome = '/';
            if (prevState.pathHome === UpdateRoute)
                return {
                    UpdateRoute: <Register />,
                }
        }
        )
    }
    render() {
        const { isPassShow } = this.state;
        return (
            <div className='form' onSubmit={this.handleSubmit}>
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
                        className='inputRelative'
                        placeholder={'•••••••••'}
                        type={(isPassShow) ? "text" : "password"}
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massagePasword ? " Please enter your Password" : ""} </p>
                    <img src={isPassShow ? eyeSlash : Vector} alt=" " onClick={this.passwordVisibility} className={'showPass'} />

                </label>

                <div className='formGroup--custom'>
                    <Link to={'/'}>
                    <input type="submit" value="Login" onClick={this.handleSubmit} />
                    </Link>
 
                </div>
                <div className='lastText'>
                    <p className={'text-center last-p'}> Don’t have an account? <Link id='register' name="register" to={'/register'}>Register </Link></p>

                </div>


                <ToastContainer />
            </div>

        )
    }
}

export default FormLogin