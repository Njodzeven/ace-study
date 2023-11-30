import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../pages/LoginValidaion";
import axios from "axios";

const SignInOne = () => {
    
    const [values,setValues] = useState({
        email: "",
        password: ""
      })
      const [errors, setErrors] = useState({})
      const navigate = useNavigate();
      const handleSubmit =(event) => {
        event.preventDefault()
        setErrors(Validation(values))
        if( errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                
              if(res.data === "Success"){
                navigate("/");
              }
              else {
                alert("No record existed")
                console.log(`${res.data}`)
                
              }
            })
           
            .catch(err => console.log(err))
        }
        
        
      }

      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }

    return (
        <>
            <div>
            <body class="" id="body">
                <div class="container d-flex align-items-center justify-content-center vh-100">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-10">
                    <div class="card">
                        <div class="card-header bg-primary">
                        <div class="app-brand">
                            <a href="/index.html">
                            <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30" height="33"
                                viewBox="0 0 30 33">
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
                        <h4 class="text-dark mb-5">Sign In</h4>
                        
                        <form action="" onSubmit={handleSubmit}>
                            <div class="row">
                            <div class="form-group col-md-12 mb-4">
                                <label htmlFor="email">Email</label>
                                <input type="email" class="form-control input-lg" name="email" onChange={handleInput} aria-describedby="emailHelp" placeholder="Enter Email"/>
                                {errors.email && <small className='text-danger'>{errors.email}</small>}
                            </div>

                            <div class="form-group col-md-12 ">
                                <label htmlFor="password">Password</label>
                                <input type="password" class="form-control input-lg" name="password" onChange={handleInput} placeholder="Enter Password"/>
                                {errors.password && <small className='text-danger'>{errors.password}</small>}
                            </div>

                            <div class="col-md-12">
                                <div class="d-flex my-2 justify-content-between">
                                <div class="d-inline-block mr-3">
                                    <label class="control control-checkbox">Remember me
                                    <input type="checkbox" />
                                    <div class="control-indicator"></div>
                                    </label>
                                </div>

                                <p><a class="text-blue" href="#">Forgot Your Password?</a></p>
                                </div>

                                <Link to={"/home"}>
                                <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                                </Link>
                                
                                <Link to = "/">
                                    <p>Don't have an account yet ?
                                    <a class="text-blue">Sign Up</a>
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

export default SignInOne;