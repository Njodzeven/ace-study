import React from "react";
import { Link } from "react-router-dom";

const SignInOne = () => {
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
                        
                        <form action="/index.html">
                            <div class="row">
                            <div class="form-group col-md-12 mb-4">
                                <input type="email" class="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Username"/>
                            </div>

                            <div class="form-group col-md-12 ">
                                <input type="password" class="form-control input-lg" id="password" placeholder="Password"/>
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
                                <Link to = "/">
                                    <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                                </Link>
                                <Link to = "/SignUp">
                                    <p>Don't have an account yet ?
                                    <a class="text-blue" href="sign-up.html">Sign Up</a>
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