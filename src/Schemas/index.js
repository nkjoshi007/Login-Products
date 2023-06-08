import * as Yup from "yup";

export const Signup_validation=Yup.object({
    fname:Yup.string().min(2).max(25).required("Please enter your name!!"),
    lname:Yup.string().min(2).max(25).required("Please enter your last name!!"),
    email:Yup.string().email().min(2).required("Please enter your email!!"),
    password:Yup.string().min(8).required("Please enter your password!!"),
    mobile:Yup.number().min(10).required("Please enter your mobile number!!"),
    gender:Yup.string().required("Please select your gender!!"),
    faname:Yup.string().min(2).max(25).required("Please enter your father's name!!"),
    DOB:Yup.date().required("Please enter your Birth date!!"),
    terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
})
// export const Signup_validation=Yup.object().shape({
//     fname : Yup.string()
//     .min(2,"Too short")
// })