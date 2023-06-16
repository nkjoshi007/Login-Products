import * as Yup from "yup";

export const Signup_validation=Yup.object({
    uname:Yup.string().min(4,"Too Short!").max(30,"Too long!").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Enter capital letters,small letters and number!!").required("Please enter your username!!"),
    fname:Yup.string().min(2,"Too Short!").max(30,"Too long!").required("Please enter your name!!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lname:Yup.string().min(2).max(25).required("Please enter your last name!!"),
    email:Yup.string().email("invalid email").min(2,"enter valid email").required("Please enter your email!!"),
    password:Yup.string().min(8).required("Please enter your password!!").matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
      ),
      mobile: Yup.string().matches(/^[0-9]{10}$/, "Phone number is not valid").required("enter your phone number")
      ,
    gender:Yup.string().required("Please select your gender!!"),
    faname:Yup.string().min(2).max(25).required("Please enter your father's name!!"),
    DOB:Yup.date().required("Please enter your Birth date!!"),
    // terms: Yup.boolean()
    //         .oneOf([true], "You must accept the terms and conditions"),
            // gender1:Yup.string().required("please select your gender")
})
// export const Signup_validation=Yup.object().shape({
//     fname : Yup.string()
//     .min(2,"Too short")
// })
