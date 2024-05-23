export default function checkForm({form, setForm}){
    let errorMessage={
        fname:"",
        lname:"",
        email:"",
        phone:"",
        address:"",
        calendar:""
    }
    let noError = true

    if(!form.fname){
        errorMessage.fname = "Missing first name"
        noError = false
    }

    if(!form.lname){
        errorMessage.lname = "Missing last name"
        noError = false
    }

    if(!form.email){
        errorMessage.email = "Missing email"
        noError = false
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
        errorMessage.email = "not a valid email format"
        noError = false
    }

    setForm((prev)=>{return {...prev, errorMessage:{...errorMessage}}})
    return noError
}