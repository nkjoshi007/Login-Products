export const Add=(item)=>{
    return{
        type:'Addcart',
        payload:item
    }
}
export const Remove=(item)=>{
    return{
        type:'Removecart',
        payload:item
    }
}
export const Signup_data=(data)=>{
    return{
        type:"signup",
        payload:data
    }
}
export const Login_data=(username,email)=>{
    return{
        type:"login",
        userName:username,
        Email:email,
    }
}