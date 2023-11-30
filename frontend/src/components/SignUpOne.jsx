import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from '../pages/SignupValidation'
import axios from "axios";

const SignUpOne = () => {
    const [values,setValues] = useState({
        name: "",
        email:"",
        password: "",
        cpassword: ""
      })
      const [errors, setErrors] = useState({})
      const navigate = useNavigate();
      const handleSubmit =(event) => {
        event.preventDefault()
        setErrors(Validation(values))
        if(errors.name === "" && errors.email === "" && errors.password === "" && errors.cpassword === ""){
            axios.post("http://localhost:8081/signup", values)
            .then(res => {
              navigate("/sign-in");
              alert(`${values.name} has succesfully signed up`)
            })
            .catch(err => console.log(err))
        }
      }

      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
    return(
        <>
            <div>
                <body class="" id="body">
                    <div class="container d-flex align-items-center justify-content-center ">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                        <div class="card">
                            <div class="card-header bg-primary">
                            <div class="app-brand">
                                <a href="/index.html">
                                <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30"
                                    height="33" viewBox="0 0 30 33">
                                    <g fill="none" fill-rule="evenodd">
                                    <path class="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z" />
                                    <path class="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                                    </g>
                                </svg>

                                <span class="brand-name">Ace Study</span>
                                </a>
                            </div>
                            </div>

                            <div class="card-body p-5">
                            <h4 class="text-dark mb-5">Sign Up</h4>

                            <form action="" onSubmit={handleSubmit}>
                                <div class="row">
                                <div class="form-group col-md-12 mb-4">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" class="form-control input-lg" name="name" onChange={handleInput} aria-describedby="nameHelp" placeholder="Enter Name"/>
                                    {errors.name && <small className='text-danger'>{errors.name}</small>}
                                </div>

                                <div class="form-group col-md-12 mb-4">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" class="form-control input-lg" name="email"onChange={handleInput} aria-describedby="emailHelp" placeholder="Enter Email"/>
                                    {errors.email && <small className='text-danger'>{errors.email}</small>}
                                </div>

                                <div class="form-group col-md-12 ">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" class="form-control input-lg" name="password" onChange={handleInput} placeholder="Enter Password"/>
                                    {errors.password && <small className='text-danger'>{errors.password}</small>}
                                </div>

                                <div class="form-group col-md-12 ">
                                    <label htmlFor="confirm password">Confirm Password</label>
                                    <input type="password" class="form-control input-lg" name="cpassword" onChange={handleInput} placeholder="Confirm Password"/>
                                    {errors.cpassword && <small className='text-danger'>{errors.cpassword}</small>}
                                </div>

                                <div class="col-md-12">
                                    <div class="d-inline-block mr-3">
                                    <label class="control control-checkbox">
                                        <input type="checkbox" />
                                        <div class="control-indicator"></div>
                                        I Agree the terms and conditions
                                    </label>
                                    </div>
                                    
                                    <Link to={"/home"}>
                                    <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">Sign Up</button>
                                    </Link>

                                    <Link to = "/sign-in">
                                        <p>Already have an account?
                                        <a class="text-blue" href="sign-in.html">Sign in</a>
                                        </p>
                                    </Link>   
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>



                    <script src="assets/plugins/jquery/jquery.min.js"></script>
                    <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/js/sleek.js"></script>
                    <link href="assets/options/optionswitch.css" rel="stylesheet"/>
                    <script src="assets/options/optionswitcher.js"></script>
                </body>

            </div>
        </>
    );
};

export default SignUpOne;