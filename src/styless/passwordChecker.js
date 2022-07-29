const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/;

export const LoginValidChecker = (userInput) => {
    const { email, password } = userInput ; 

    const error = {};
    let isError = false ;

    if (!email.match(mailFormat)) {
        error.email = "Enter valid email";
        isError = true ;
    }
    if (!password) {
        error.password = " Enter valid password"
        isError = true ;
    }
    if(password && !password.match(passwordFormat)) {
        error.password = "Weak password ! Should contain one charactor one digit and length between 4 and 8"
        isError = true ;
    }

    error.isError = isError;

    return error ; 
};

export const SignupValidChecker = (useInput) => {
    const { firstName, lastName, email, password, confirmpassword} = useInput ;

    const error = { };
    let isError = false ;

    if (!firstName) {
        error.firstname = "Enter valid name";
        isError = true ; 
    }
    
    if (!lastName) {
        error.lastname = "Enter valid lastname";
        isError = true ; 
    }
    
    if (!email.match(mailFormat)) {
        error.email = "Enter valid email";
        isError = true ; 
    }
    
    if (!password) {
        error.password1 = "Enter valid password";
        isError = true ; 
    }
    
    if (password && !password.match(passwordFormat)) {
        error.password = "Weak password ! Should contain one charactor one digit and length between 4 and 8";
        isError = true ; 
    }
    
    if (!confirmpassword) {
        error.confirmpassword = "Enter confirm password";
        isError = true ; 
    }
    
    if (confirmpassword && password !== confirmpassword) {
        error.passwordnotmatch = "password didn't match";
        isError = true ; 
    }

    error.isError = isError;

    return error
};