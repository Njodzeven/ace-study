import React, { useState } from "react";
import { Link } from "react-router-dom";

const Timeline = () => {
    return(
        <>
        <div class="tab-pane fade show active" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
    <div class="media mt-5 profile-timeline-media timeline-media-spacing">
    <div class="align-self-start iconbox-45 overflow-hidden mr-3">
        <img  src="assets/img/user/u3.jpg" alt="Generic placeholder image"/>
    </div>

    <div class="media-body">
        <h6 class="mt-0 text-dark">Larissa Gebhardt</h6>
        <span>Designer</span>
        <span class="float-right">5 mins ago</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa1.jpg" alt="Product"/>
        </div>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa2.jpg" alt="Product"/>
        </div>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa3.jpg" alt="Product"/>
        </div>
    </div>
    </div>

    <div class="media mt-5 profile-timeline-media">
    <div class="align-self-start iconbox-45 overflow-hidden mr-3">
        <img  src="assets/img/user/u4.jpg" alt="Generic placeholder image"/>
    </div>

    <div class="media-body">
        <h6 class="mt-0 text-dark">Walter Reuter</h6>
        <span>Designer</span>
        <span class="float-right">2 hrs ago</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    </div>
    </div>

    <div class="media mt-5 profile-timeline-media">
    <div class="align-self-start iconbox-45 overflow-hidden mr-3">
        <img  src="assets/img/user/u7.jpg" alt="Generic placeholder image"/>
    </div>

    <div class="media-body">
        <h6 class="mt-0 text-dark">Albrecht Straub</h6>
        <span>Designer</span>
        <span class="float-right">5 days ago</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa4.jpg" alt="Product"/>
        </div>
    </div>
    </div>

    <div class="media mt-5 profile-timeline-media">
    <div class="align-self-start iconbox-45 overflow-hidden mr-3">
        <img  src="assets/img/user/u8.jpg" alt="Generic placeholder image"/>
    </div>

    <div class="media-body">
        <h6 class="mt-0 text-dark">Selena Wagner</h6>
        <span>Designer</span>
        <span class="float-right">Mar 05, 2018</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa5.jpg" alt="Product"/>
        </div>

        <div class="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
        <img src="assets/img/products/pa6.jpg" alt="Product"/>
        </div>
    </div>
    </div>
        </div>

        </>
    );
};

const Profile = () => {
    return(
        <>
        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div class="tab-widget mt-5">
    <div class="row">
        <div class="col-xl-4">
        <div class="media widget-media p-4 bg-white border">
            <div class="icon rounded-circle mr-4 bg-primary">
            <i class="mdi mdi-account-outline text-white "></i>
            </div>

            <div class="media-body align-self-center">
            <h4 class="text-primary mb-2">5300</h4>
            <p>New Users</p>
            </div>
        </div>
        </div>

        <div class="col-xl-4">
        <div class="media widget-media p-4 bg-white border">
            <div class="icon rounded-circle bg-warning mr-4">
            <i class="mdi mdi-cart-outline text-white "></i>
            </div>

            <div class="media-body align-self-center">
            <h4 class="text-primary mb-2">1953</h4>
            <p>Order Placed</p>
            </div>
        </div>
        </div>

        <div class="col-xl-4">
        <div class="media widget-media p-4 bg-white border">
            <div class="icon rounded-circle mr-4 bg-danger">
            <i class="mdi mdi-cart-outline text-white "></i>
            </div>

            <div class="media-body align-self-center">
            <h4 class="text-primary mb-2">1450</h4>
            <p>Total Sales</p>
            </div>
        </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
        
                <div class="card card-default">
                <div class="card-header justify-content-between mb-1">
                    <h2>Latest Notifications</h2>
                    <div>
                        <button class="text-black-50 mr-2 font-size-20"><i class="mdi mdi-cached"></i></button>
                        <div class="dropdown show d-inline-block widget-dropdown">
                            <Link class="dropdown-toggle icon-burger-mini" to="#" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>
                            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-notification">
                            <li class="dropdown-item"><Link  to="#">Action</Link></li>
                            <li class="dropdown-item"><Link  to="#">Another action</Link></li>
                            <li class="dropdown-item"><Link  to="#">Something else here</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="card-body compact-notifications" data-simplebar >
                    <div class="media pb-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                        <i class="mdi mdi-cart-outline font-size-20"></i>
                    </div>
                    <div class="media-body pr-3 ">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">New Order</Link>
                        <p >Selena has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                    </div>

                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                        <i class="mdi mdi-email-outline font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">New Enquiry</Link>
                        <p >Phileine has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 9 AM</span>
                    </div>


                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                        <i class="mdi mdi-stack-exchange font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">Support Ticket</Link>
                        <p >Emma has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                    </div>

                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                        <i class="mdi mdi-cart-outline font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">New order</Link>
                        <p >Ryan has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                    </div>

                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                        <i class="mdi mdi-calendar-blank font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="">Comapny Meetup</Link>
                        <p >Phileine has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                    </div>

                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                        <i class="mdi mdi-stack-exchange font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">Support Ticket</Link>
                        <p >Emma has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                    </div>

                    <div class="media py-3 align-items-center justify-content-between">
                    <div class="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                        <i class="mdi mdi-email-outline font-size-20"></i>
                    </div>
                    <div class="media-body pr-3">
                        <Link class="mt-0 mb-1 font-size-15 text-dark" to="#">New Enquiry</Link>
                        <p >Phileine has placed an new order</p>
                    </div>
                    <span class=" font-size-12 d-inline-block"><i class="mdi mdi-clock-outline"></i> 9 AM</span>
                    </div>

                </div>
                <div class="mt-3"></div>
                </div>

        </div>

        <div class="col-xl-6">
        
        <div class="card card-default todo-table" id="todo">
            <div class="card-header d-block pb-0 ">
            <div class="todo-single-item mb-0" id="todo-input">
                <form class="todo-form">
                <div class="input-group mb-0">
                    <input type="text" class="form-control border-right-0" placeholder="Add Todo" required="" autofocus/>
                    <div class="input-group-append ml-0">
                    <button class="input-group-text border-0 btn bg-primary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 448 448" width="18" class="">
                        <g><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
                        </g>
                        </svg>
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>

            <div class="card-body compact-to-do-list" data-simplebar>
            <div class="todo-list" id="todo-list" >
                <div id="item" class="todo-single-item todo-item d-flex flex-row justify-content-between finished alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Finish Dashboard UI Kit update</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between current alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Create new prototype for the landing page</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Add new Google Analytics code to all main files sed auctor lacus in sem interdum, ac gravida tortor elementum. Cras magna enim.</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Update parallax scroll on team page</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Integer et porta odio, pulvinar pretium eros. Curabitur vel tellus erat.</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Pellentesque blandit ut eros sed vehicula.</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, fringilla in volutpat sit amet, viverra nec mi. Donec at dui dolor.</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>

                <div class="todo-single-item d-flex flex-row justify-content-between mb-1 alert alert-dismissible fade show" role="alert">
                <i class="mdi"></i>
                <span>Update parallax scroll on team page</span>

                <div class="task-content">
                    <span data-dismiss="alert" aria-label="Close">
                    <svg class="remove-task" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="16" viewBox="0 0 515.556 515.556" width="16" xmlns="http://www.w3.org/2000/svg"><path class="" d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>
                    </span>
                </div>
                </div>
            </div>
            </div>
            <div class="mt-3"></div>
        </div>

        </div>

        <div class="col-12">
        <div class="card card-table-border-none" id="recent-orders">
            <div class="card-header justify-content-between">
            <h2>Recent Orders</h2>

            <div class="date-range-report">
                <span></span>
            </div>
            </div>

            <div class="card-body pt-0 pb-5">
            <table class="table card-table table-responsive table-responsive-large col-12">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th class="d-none d-xl-table-cell">Units</th>
                    <th class="d-none d-xl-table-cell">Order Date</th>
                    <th class="d-none d-xl-table-cell">Order Cost</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>24541</td>
                    <td>
                    <Link class="text-dark" to=""> Coach Swagger</Link>
                    </td>
                    <td class="d-none d-xl-table-cell">1 Unit</td>
                    <td class="d-none d-xl-table-cell">Oct 20, 2018</td>
                    <td class="d-none d-xl-table-cell">$230</td>
                    <td>
                    <span class="badge badge-success">Completed</span>
                    </td>
                    <td class="text-right">
                    <div class="dropdown show d-inline-block widget-dropdown">
                        <Link class="dropdown-toggle icon-burger-mini" to="" role="button" id="dropdown-recent-order1"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>

                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                        <li class="dropdown-item">
                            <Link to="#">View</Link>
                        </li>

                        <li class="dropdown-item">
                            <Link to="#">Remove</Link>
                        </li>
                        </ul>
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>24541</td>
                    <td>
                    <Link class="text-dark" to=""> Toddler Shoes, Gucci Watch</Link>
                    </td>
                    <td class="d-none d-xl-table-cell">2 Units</td>
                    <td class="d-none d-xl-table-cell">Nov 15, 2018</td>
                    <td class="d-none d-xl-table-cell">$550</td>
                    <td>
                    <span class="badge badge-warning">Delayed</span>
                    </td>
                    <td class="text-right">
                    <div class="dropdown show d-inline-block widget-dropdown">
                        <Link class="dropdown-toggle icon-burger-mini" to="#" role="button" id="dropdown-recent-order2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>

                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order2">
                        <li class="dropdown-item">
                            <Link to="#">View</Link>
                        </li>

                        <li class="dropdown-item">
                            <Link to="#">Remove</Link>
                        </li>
                        </ul>
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>24541</td>
                    <td>
                    <Link class="text-dark" to=""> Hat Black Suits</Link>
                    </td>
                    <td class="d-none d-xl-table-cell">1 Unit</td>
                    <td class="d-none d-xl-table-cell">Nov 18, 2018</td>
                    <td class="d-none d-xl-table-cell">$325</td>
                    <td>
                    <span class="badge badge-warning">On Hold</span>
                    </td>
                    <td class="text-right">
                    <div class="dropdown show d-inline-block widget-dropdown">
                        <Link class="dropdown-toggle icon-burger-mini" to="#" role="button" id="dropdown-recent-order3"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>

                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order3">
                        <li class="dropdown-item">
                            <Link to="#">View</Link>
                        </li>

                        <li class="dropdown-item">
                            <Link to="#">Remove</Link>
                        </li>
                        </ul>
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>24541</td>
                    <td>
                    <Link class="text-dark" to=""> Backpack Gents, Swimming Cap Slin</Link>
                    </td>
                    <td class="d-none d-xl-table-cell">5 Units</td>
                    <td class="d-none d-xl-table-cell">Dec 13, 2018</td>
                    <td class="d-none d-xl-table-cell">$200</td>
                    <td>
                    <span class="badge badge-success">Completed</span>
                    </td>
                    <td class="text-right">
                    <div class="dropdown show d-inline-block widget-dropdown">
                        <Link class="dropdown-toggle icon-burger-mini" to="#" role="button" id="dropdown-recent-order4"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>

                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order4">
                        <li class="dropdown-item">
                            <Link to="#">View</Link>
                        </li>

                        <li class="dropdown-item">
                            <Link to="#">Remove</Link>
                        </li>
                        </ul>
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>24541</td>
                    <td>
                    <Link class="text-dark" to=""> Speed 500 Ignite</Link>
                    </td>
                    <td class="d-none d-xl-table-cell">1 Unit</td>
                    <td class="d-none d-xl-table-cell">Dec 23, 2018</td>
                    <td class="d-none d-xl-table-cell">$150</td>
                    <td>
                    <span class="badge badge-danger">Cancelled</span>
                    </td>
                    <td class="text-right">
                    <div class="dropdown show d-inline-block widget-dropdown">
                        <Link class="dropdown-toggle icon-burger-mini" to="#" role="button" id="dropdown-recent-order5"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></Link>
                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order5">
                        <li class="dropdown-item">
                            <Link to="#">View</Link>
                        </li>

                        <li class="dropdown-item">
                            <Link to="#">Remove</Link>
                        </li>
                        </ul>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>
        </div>
        </>
    );
};

const Settings = () => {
    return(
        <>
        <div class="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <div class="tab-pane-content mt-5">
            <form>
                <div class="form-group row mb-6">
                <label for="coverImage" class="col-sm-4 col-lg-2 col-form-label">User Image</label>
                <div class="col-sm-8 col-lg-10">
                    <div class="custom-file mb-1">
                    <input type="file" class="custom-file-input" id="coverImage" required/>
                    <label class="custom-file-label" for="coverImage">Choose file...</label>
                    <div class="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                </div>
                </div>

                <div class="row mb-2">
                <div class="col-lg-6">
                    <div class="form-group">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" value="Albrecht"/>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" value="Straub"/>
                    </div>
                </div>
                </div>

                <div class="form-group mb-4">
                <label for="userName">User name</label>
                <input type="text" class="form-control" id="userName" value="Straub"/>
                </div>

                <div class="form-group mb-4">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" value="albrecht.straub@gmail.com"/>
                </div>

                <div class="form-group mb-4">
                <label for="oldPassword">Old password</label>
                <input type="password" class="form-control" id="oldPassword"/>
                </div>

                <div class="form-group mb-4">
                <label for="newPassword">New password</label>
                <input type="password" class="form-control" id="newPassword"/>
                </div>

                <div class="form-group mb-4">
                <label for="conPassword">Confirm password</label>
                <input type="password" class="form-control" id="conPassword"/>
                </div>

                <div class="d-flex justify-content-end mt-5">
                <button type="submit" class="btn btn-primary mb-2 btn-pill">Update Profile</button>
                </div>
            </form>
            </div>
        </div>
        </>
    );
};

const UserProfileOne = () => {
    const [activeTab, setActiveTab] = useState('settings');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <>
        <div>
            <div class="content-wrapper">
                <div class="content">
                    <div class="bg-white border rounded">
                        <div class="row no-gutters">
                            <div class="col-lg-4 col-xl-3">
                            <div class="profile-content-left profile-left-spacing pt-5 pb-3 px-3 px-xl-5">
                                <div class="card text-center widget-profile px-0 border-0">
                                <div class="card-img mx-auto rounded-circle">
                                    <img src="public\assets\imgs\users\user.jpg" alt="user image"/>
                                </div>
                                <div class="card-body">
                                    <h4 class="py-2 text-dark">Albrecht Straub</h4>
                                    <p>Albrecht.straub@gmail.com</p>
                                </div>
                                </div>


                                <hr class="w-100"/>

                            </div>
                            </div>

                            <div class="col-lg-8 col-xl-9">
                            <div class="profile-content-right profile-right-spacing py-5">
                                <ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myTab" role="tablist">
                                    <li className="nav-item" onClick={() => handleTabClick('timeline')}>
                                        <Link className="nav-link" to="#timeline" role="tab" aria-controls="timeline" aria-selected="true">Timeline</Link>
                                    </li>

                                    <li className="nav-item" onClick={() => handleTabClick('profile')}>
                                        <Link className="nav-link" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</Link>
                                    </li>

                                    <li className="nav-item" onClick={() => handleTabClick('settings')}>
                                        <Link className="nav-link" to="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</Link>
                                    </li>
                                </ul>

                                <div class="tab-content px-3 px-xl-5" id="myTabContent">
                                    {activeTab === 'timeline' && <Timeline />}
                                    {activeTab === 'profile' && <Profile />}
                                    {activeTab === 'settings' && <Settings />}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
};


export default UserProfileOne;

