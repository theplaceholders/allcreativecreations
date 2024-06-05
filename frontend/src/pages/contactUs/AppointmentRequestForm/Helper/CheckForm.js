export default function checkForm(form, fieldName){
    function checkFirstName(){
        if(!form.fname){
            return {error: true, message: "Missing first name!"}
        }
        return {error: false, message: ''}
    }

    function checkLastName(){
        if(!form.lname){
            return {error: true, message: "Missing last name!"}
        }
        return {error: false, message: ''}
    }

    function checkEmail(){
        if(!form.email){
            return {error: true, message: "Missing email address!"}
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
            return {error: true, message: "invalid email format!"}
        }
        return {error: false, message: ''}
    }

    function checkMessage(){
        if(form.message.length > form.constant.maxCharacters){
            return {error: true, message: `Message exceeded ${form.constant.maxCharacters} characters`}
        }
        return {error: false, message: ''}
    }

    const validationFunctions = {
        fname: checkFirstName,
        lname: checkLastName,
        email: checkEmail,
        message: checkMessage,
    }

    if(fieldName){
        return { [fieldName]: validationFunctions[fieldName]()}
    } else {
        const results = {
            firstNameError: checkFirstName(),
            lastNameError: checkLastName(),
            emailError: checkEmail(),
        }
        const hasError = Object.values(results).some(result => result.error)
        return {...results, hasError}
    }
}