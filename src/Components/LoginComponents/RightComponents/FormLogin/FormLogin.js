/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Vector from '../../../../assets/Vector.svg'
import eyeSlash from '../../../../assets/eyeSlash.svg'
import './index.css'
import Register from '../../../../Pages/Register';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../../../Api';
import { isLogend } from '../../../../User';
import Spinner from '../../../Spinner';

class FormLogin extends Component {

    state = {
        isPassShow: false,
        score: 'null',
        isInformed: false,
        email: "",
        password: "",
        name: "",
        massagePasword: false,
        massageEmail: false,
        massage: false,
        errors: [],
        isLodding: false
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
        this.setState({
            [name]: value
        });


    };

    handleSubmit = () => {

        // this.setState({ isLodding: true })

        this.schema.validate(
            {
                email: this.state.email,
                password: this.state.password,
            }, { abortEarly: false }).then(async (email, password) => {
                console.log(email, password)
                const res = await axios.post(`${BaseUrl}/users/login`,
                    {
                        email: this.state.email,
                        password: this.state.password
                    }
                )

                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.login();

            })
            .catch((error) => console.log(error))
            .finally(() => this.setState({ isLoading: false }));
    };
    render() {
        const { isPassShow } = this.state;
        return (

            <div className='form'>
                {
                    this.state.isLodding ?
                        <Spinner />
                        :
                        <>
                            {this.state.errors.map((error) => (
                                <span style={{ color: 'red' }}>{error.error}</span>
                            ))}
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
                                <input type="submit" value="Login" onClick={this.handleSubmit} />


                            </div>
                            <div className='lastText'>
                                <p className={'text-center last-p'}> Don’t have an account? <Link id='register' name="register" to={'register'}>Register </Link></p>

                            </div>


                            <ToastContainer />
                        </>
                }
            </div>

        )
    }
}

export default FormLogin




