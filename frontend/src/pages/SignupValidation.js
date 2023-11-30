function Validation(values){
    let error = {}
    const email_pattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =  /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{8,}$/

    if (values.name === ""){
        error.name = "This field should not be empty"
    }
    else {
        error.name = ""
    }

    if (values.email === ""){
        error.email = "This field should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    }
    else {
        error.email = ""
    }
    
    
    if (values.password === ""){
        error.password = "This field should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }
    else {
        error.password = ""
    }

    if (values.cpassword === ""){
        error.cpassword = "This field should not be empty"
    }

    else if (!(JSON.stringify(values.cpassword) === JSON.stringify(values.password))){
        error.cpassword = "Wrong password combination"
    }
    else {
        error.cpassword = ""
    }
    return error
}

export default Validation;
